(function(){"use strict";let t=null,a=!1;async function i(e){try{return t.runPython(`str(${e.name}) + ": " + str(${e})`)}catch{return e.message||String(e)}}async function n(){importScripts("https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.js"),t=await loadPyodide(),await t.loadPackage("micropip"),await t.runPythonAsync(`
    import micropip
    await micropip.install("regex")
    await micropip.install("lark")
  `);const e=await fetch("./py/parse_runner.py").then(s=>s.text());await t.runPythonAsync(e),a=!0,self.postMessage({type:"ready"})}n(),self.onmessage=async e=>{if(!a){self.postMessage({type:"error",message:"Pyodide not yet loaded."});return}const{grammar:s,text:o,start:y,parser:p,lexer:c,debug:l,strict:d,regex:u}=e.data;try{const r=await t.runPythonAsync(`
      parse_input(
        ${JSON.stringify(s)},
        ${JSON.stringify(o)},
        ${JSON.stringify(y)},
        ${JSON.stringify(p)},
        ${JSON.stringify(c)},
        debug=${l?"True":"False"},
        strict=${d?"True":"False"},
        regex=${u?"True":"False"}
      )
    `);self.postMessage({type:"success",tree:JSON.parse(r)})}catch(r){const g=await i(r);self.postMessage({type:"error",message:g})}}})();
