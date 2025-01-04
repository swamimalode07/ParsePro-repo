import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import Editor from "./components/Editor";
import NavBar from "./components/Navbar";

function App() {
  const [openedEditor, setOpenedEditor] = useState("html");
  const [activeButton, setActiveButton] = useState("html");

  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState(``);

  const onTabClick = (editorName) => {
    setOpenedEditor(editorName);
    setActiveButton(editorName);
  };

  const openinnewtab=()=>{
    const newWindow=window.open();
    newWindow.document.write(`
      <html>
        <head>
          <title>Preview</title>
        </head>
        <body>
          <div>${html}</div>
          <style>${css}</style>
          <script>${js}</script>
        </body>
      </html>
    `);
    newWindow.document.close();
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `
      );
    }, 0);

    return () => clearTimeout(timeOut);
  }, [html, css, js]);

  return (
    
    <div className="App">
      <NavBar/>
      
      <div className="tab-button-container">
        <Button
          backgroundColor={activeButton === "html" ? "blue" : ""}
          title="HTML"
          onClick={() => {
            onTabClick("html");
          }}
        />
        <Button
          backgroundColor={activeButton === "css" ? "blue" : ""}
          title="CSS"
          onClick={() => {
            onTabClick("css");
          }}
        />
        <Button
          backgroundColor={activeButton === "js" ? "blue" : ""}
          title="JavaScript"
          onClick={() => {
            onTabClick("js");
          }}
        />
      </div>
      <div className="codeeditingspace">
      <div className="editor-container">
        {openedEditor === "html" ? (
          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            setEditorState={setHtml}
          />
        ) : openedEditor === "css" ? (
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            setEditorState={setCss}
          />
        ) : (
          <Editor
            language="javascript"
            displayName="JS"
            value={js}
            setEditorState={setJs}
          />
        )}
      </div>
      <div className="preview">
        <iframe
          id="my_iframe"
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="1"
          width="100%"
          height="100%"
        />
      </div>
      </div>
      <div>
        <button onClick={openinnewtab}>Open in new Tab</button>
      </div>
    </div>
  );
}

export default App;
