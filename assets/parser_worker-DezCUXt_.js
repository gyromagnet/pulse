(function(){"use strict";let t=null,i=!1;async function n(e){try{return t.runPython(`str(${e.name}) + ": " + str(${e})`)}catch{return e.message||String(e)}}async function o(){importScripts("https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.js"),t=await loadPyodide(),await t.loadPackage("micropip"),await t.runPythonAsync(`
    import micropip
    await micropip.install("regex")
    await micropip.install("lark")
  `);const s=await fetch("./py/parse_runner.py").then(r=>r.text());await t.runPythonAsync(s),i=!0,self.postMessage({type:"ready"})}o(),self.onmessage=async e=>{if(!i){self.postMessage({type:"error",message:"Pyodide not yet loaded."});return}const{grammar:s,text:r,start:y,parser:c,lexer:p,debug:l,strict:u,regex:d}=e.data;try{const a=await t.runPythonAsync(`
      parse_input(
        ${JSON.stringify(s)},
        ${JSON.stringify(r)},
        ${JSON.stringify(y)},
        ${JSON.stringify(c)},
        ${JSON.stringify(p)},
        debug=${l?"True":"False"},
        strict=${u?"True":"False"},
        regex=${d?"True":"False"}
      )
    `);self.postMessage({type:"success",tree:JSON.parse(a)})}catch(a){const g=await n(a);self.postMessage({type:"error",message:g})}}})();
