import React from "react";
import { useState } from "react";
import "./App.css";
import ProjectLinks from "./components/project-links/ProjectLinks";

enum Elements {
  Default = "Default",
  Test1 = "Test1",
  Test2 = "Test2",
}

function App() {
  const [blurred, setBlurred] = useState(true);
  const [hoveredElement, setHoveredElement] = useState(Elements.Default);
  const [selectedElement, setSelectedElement] = useState("");
  const [hideText, setHideText] = useState(false);

  return (
    <div className="App" style={{ overflow: "hidden" }}>
      {/*<object type="text/html" data="resources/cubeTransition/test.html" width="800px" height="600px">*/}
      {/*</object>*/}
      <h1
        style={{
          position: "absolute",
          color: "white",
          zIndex: 1000,
          transition: "all .8s ease-in",
          fontSize: "55px",
          marginLeft: hideText ? "-2500px" : "50px",
          WebkitTextStroke: "1px black",
        }}
      >
        My Name
      </h1>
      <div
        className="default"
        style={{
          position: "absolute",
          backgroundColor: "black",
          top: "0",
          right: "0",
          left: "0",
          bottom: "0",
          transition: "all .5s ease-in",
          opacity:
            !selectedElement && hoveredElement === Elements.Default ? 1 : 0,
        }}
      ></div>
      <div id="test"></div>
      <div
        id="test1"
        className="test1"
        style={{
          position: "absolute",
          filter:
            selectedElement === Elements.Test1 ? "blur(0px)" : "blur(10px)",
          transition: "all .5s ease-in",
          // overflow:'hidden',
          opacity:
            hoveredElement === Elements.Test1 ||
            selectedElement === Elements.Test1
              ? 1
              : 0,
          visibility:
            hoveredElement === Elements.Test1 ||
            selectedElement === Elements.Test1
              ? "visible"
              : "hidden",
        }}
      >
        <iframe
          id="ceva"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: "2560px",
            height: "1300px",
            border: "none",
            margin: 0,
            padding: 0,
            zIndex: 999999,
          }}
          frameBorder="0"
          src={"https://drownskitest.000webhostapp.com/"}
        />
        {/*<h1>text</h1>*/}
        {/*<h1>text</h1>*/}
        {/*<h1>text</h1>*/}
        {/*<h1>text</h1>*/}
        {/*<h1>text</h1>*/}
      </div>
      <div
        className="test2"
        style={{
          position: "absolute",
          filter:
            selectedElement === Elements.Test2 ? "blur(0px)" : "blur(10px)",
          transition: "all .5s ease-in",
          overflow: "none",
          opacity:
            hoveredElement === Elements.Test2 ||
            selectedElement === Elements.Test2
              ? 1
              : 0,
          visibility:
            hoveredElement === Elements.Test2 ||
            selectedElement === Elements.Test2
              ? "visible"
              : "hidden",
        }}
      >
        <h1>text</h1>
        <h1>text</h1>
        <h1>tex123123123123123123t</h1>
        <h1>tex123123123123123123t</h1>
        <h1>text</h1>
      </div>
      <ProjectLinks
        setHoveredElement={setHoveredElement}
        setSelectedElement={setSelectedElement}
        setHidden={setHideText}
        hidden={hideText}
        Elements={Elements}
      />
    </div>
  );
}

export default App;
