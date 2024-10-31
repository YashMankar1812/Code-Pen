// src/components/Editor.jsx
import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { AiOutlineClose } from 'react-icons/ai'; // Importing close icon
import './Editor.css';

const Editor = (onClose) => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  const handleCloseEditor = () => {
    window.location.href = '/dashboard';
  };

  const handleRunCode = () => {
    const outputFrame = document.getElementById('output-frame').contentWindow.document;
    outputFrame.open();
    outputFrame.write(`
      <style>${cssCode}</style>
      ${htmlCode}
      <script>${jsCode}</script>
    `);
    outputFrame.close();
  };

  return (
    <div className="editor">
      <div className='editor-button'>
        <button className="close-btn " onClick={handleCloseEditor}>
          <AiOutlineClose  className="animate__animated animate__pulse animate__infinite	infinite" size={24} /> {/* Close icon */}
        </button>
        <div>
          <button className="run-code-btn" onClick={handleRunCode}>
            Run Code
          </button>
        </div>
      </div>

      <div className='editor-content'>
        <div className='code-mirror'>
          <h3 className='html'>HTML</h3>
          <CodeMirror
            value={htmlCode}
            height="350px"
            width='310px'
            extensions={[html()]}
            onChange={(value) => setHtmlCode(value)}
            className="code-editor"
          />
        </div>

        <div className='code-mirror'>
          <h3 className='css'>CSS</h3>
          <CodeMirror
            value={cssCode}
            height="350px"
            width='310px'
            extensions={[css()]}
            onChange={(value) => setCssCode(value)}
            className="code-editor"
          />
        </div>

        <div className='code-mirror'>
          <h3 className='js'>JS</h3>
          <CodeMirror
            value={jsCode}
            height="350px"
            width='310px'
            extensions={[javascript()]}
            onChange={(value) => setJsCode(value)}
            className="code-editor"
          />
        </div>
      </div>
      <div className="output">
        <h3>Output</h3>
        <iframe id="output-frame" title="output" className="output-frame"></iframe>
      </div>
      
    </div>
  );
};

export default Editor;
