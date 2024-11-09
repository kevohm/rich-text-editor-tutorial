import { useState } from "react";
import ReactQuill from "react-quill";
import DOMPurify from "dompurify";
import "./App.css"
import Quill from "quill";

const ImageFormat = Quill.import('formats/image');
ImageFormat.className = 'editor-image';
Quill.register(ImageFormat, true);


function App() {
  const [value, setValue] = useState("");

  const config = {
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],
        ["image", "video"],

        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent


        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ align: [] }],

        ["clean"], // remove formatting button
      ],
    },

    formats: [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
    ],
  };

  return <div className="w-full flex flex-col items-center justify-center h-screen overflow-y-scroll p-10 py-5">
    <div style={{
        maxWidth:"700px",
        width:"100%",
        margin:"0 auto"
      }}>   
    <div className="px-5" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(value)}}>
    </div>
     <ReactQuill
      theme="snow"
      modules={config.modules}
      value={value}
      onChange={setValue}
      style={{
        maxWidth:"700px",
        width:"100%",
        margin:"0 auto"
      }}
    />
    </div>
  </div>
}

export default App;
