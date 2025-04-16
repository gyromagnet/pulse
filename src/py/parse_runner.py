# ruff: noqa: F704, PLE1142, E402
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
