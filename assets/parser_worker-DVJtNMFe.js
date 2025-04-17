(function(){"use strict";var n=`# ruff: noqa: F704, PLE1142, E402
import micropip

await micropip.install("regex")
await micropip.install("lark")
import json
from typing import Any

from lark import Lark, Token, Tree


def tree_to_dict(node: Tree | Token) -> dict[str, Any] | None:
    if isinstance(node, Tree):
        children = [tree_to_dict(c) for c in node.children]
        child_start_pos = [c["startPos"] for c in children if c.get("startPos") is not None]
        child_end_pos = [c["endPos"] for c in children if c.get("endPos") is not None]
        child_start_line = [c["startLine"] for c in children if c.get("startLine") is not None]
        child_end_line = [c["endLine"] for c in children if c.get("endLine") is not None]

        return {
            "type": "rule",
            "name": node.data,
            "children": children,
            "startPos": min(child_start_pos) if child_start_pos else None,
            "endPos": max(child_end_pos) if child_end_pos else None,
            "startLine": min(child_start_line) if child_start_line else None,
            "endLine": max(child_end_line) if child_end_line else None,
        }
    if isinstance(node, Token):
        return {
            "type": "token",
            "name": node.type,
            "value": node.value,
            "hidden": node.type.startswith("_"),
            "startPos": getattr(node, "start_pos", None),
            "endPos": getattr(node, "end_pos", None),
            "startLine": getattr(node, "start_line", None),
            "endLine": getattr(node, "end_line", None),
        }
    return None


def create_parser(
    grammar: str, start: str, parser: str, lexer: str, *, debug: bool, strict: bool, regex: bool
) -> Lark:
    return Lark(
        grammar,
        start=start,
        parser=parser,
        lexer=lexer,
        debug=debug,
        strict=strict,
        regex=regex,
        keep_all_tokens=True,
        propagate_positions=True,
        maybe_placeholders=True,
    )


def parse_input(
    grammar: str,
    text: str,
    start: str,
    parser: str,
    lexer: str,
    *,
    debug: bool,
    strict: bool,
    regex: bool,
) -> str:
    parser_instance = create_parser(grammar, start, parser, lexer, debug=debug, strict=strict, regex=regex)
    tree = parser_instance.parse(text)
    return json.dumps(tree_to_dict(tree))
`;console.log("🛠️ parseRunnerSource length:",n==null?void 0:n.length),console.log(n==null?void 0:n.slice(0,200));let t=null,a=!1;self.addEventListener("error",e=>{self.postMessage({type:"error",message:e.message}),e.preventDefault()}),self.addEventListener("unhandledrejection",e=>{var s;const r=((s=e.reason)==null?void 0:s.message)||String(e.reason);self.postMessage({type:"error",message:r}),e.preventDefault()});async function o(){try{importScripts("https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.js"),t=await loadPyodide(),await t.loadPackage("micropip"),await t.runPythonAsync(`
      import micropip
      await micropip.install("regex")
      await micropip.install("lark")
    `),await t.runPythonAsync(n),a=!0,self.postMessage({type:"ready"})}catch(e){self.postMessage({type:"error",message:e.message||String(e)})}}o(),self.onmessage=async e=>{try{if(!a){self.postMessage({type:"error",message:"Pyodide not yet loaded."});return}const{grammar:r,text:s,start:d,parser:c,lexer:p,debug:g,strict:f,regex:m}=e.data,y=`
      parse_input(
        ${JSON.stringify(r)},
        ${JSON.stringify(s)},
        ${JSON.stringify(d)},
        ${JSON.stringify(c)},
        ${JSON.stringify(p)},
        debug=${g?"True":"False"},
        strict=${f?"True":"False"},
        regex=${m?"True":"False"}
      )
    `;try{const i=await t.runPythonAsync(y);self.postMessage({type:"success",tree:JSON.parse(i)})}catch(i){const _=await l(i);self.postMessage({type:"error",message:_})}}catch(r){self.postMessage({type:"error",message:r.message||String(r)})}};async function l(e){try{return t.runPython(`str(${e.name}) + ": " + str(${e})`)}catch{return e.message||String(e)}}})();
