import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "../style.scss";

const Write = () => {
  const [value, setValue] = useState("");
  return (
    <div className="container">
      <div className="add">
        <div className="textContent">
          <input type="text" placeholder="Title" />
          <div className="editor">
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </div>
        </div>
        <div className="menu">
          <div className="item l1">
            <h2>Publish</h2>
            <input style={{display: "none"}} type="file" name="file" id="file" />
            <label htmlFor="file">Upload Image</label>
            <div className="buttons">
              <button>Save as a draft</button>
              <button>Update</button>
            </div>
          </div>
          <div className="item l2">
            <h2>Category</h2>
            <input type="radio" name="category" value="anime" id="anime" />
            <label htmlFor="anime">Anime</label>
            <input type="radio" name="category" value="manga" id="manga" />
            <label htmlFor="manga">Manga</label>
            <input type="radio" name="category" value="music" id="music" />
            <label htmlFor="music">Music</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
