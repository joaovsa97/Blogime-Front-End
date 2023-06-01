import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import moment from "moment";

import "../style.scss";
import { api } from "../services/api";

const Write = () => {
  const state = useLocation().state;

  const [title, setTitle] = useState(state?.title || "");
  const [desc, setDesc] = useState(state?.desc || "");
  const [file, setFile] = useState(state?.img || "");
  const [category, setCategory] = useState(state?.category || "");

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await api.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = await handleUpload();
    try {
      state
        ? await api.put(`/posts/${state.id}`, {
            title,
            desc: desc,
            img: imgUrl,
            category,
          }).then(navigate(`/post/${state.id}`))
        : await api.post(`/posts/`, {
            title,
            desc: desc,
            img: imgUrl,
            category,
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          }).then(navigate(`/post/${state.id}`));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <div className="add">
        <div className="textContent">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <div className="editor">
            <ReactQuill theme="snow" value={desc} onChange={setDesc} />
          </div>
        </div>
        <div className="menu">
          <div className="item l1">
            <h2>Publish</h2>
            <input
              style={{ display: "none" }}
              type="file"
              name="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
            <label
              htmlFor="file"
              style={{ backgroundColor: file ? "green" : "$red" }}
            >
              Upload Image
            </label>
            <div className="buttons">
              <button>Save as a draft</button>
              <button className="publish-btn" onClick={handleSubmit}>
                Publish
              </button>
            </div>
          </div>
          <div className="item l2">
            <h2>Category</h2>
            <div className="cat">
              <input
                type="radio"
                name="category"
                value="Animes"
                checked={category === "Animes"}
                id="Animes"
                onChange={(e) => setCategory(e.target.value)}
                required
              />
              <label htmlFor="Animes">Anime</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="category"
                value="Mangas"
                checked={category === "Mangas"}
                id="Mangas"
                onChange={(e) => setCategory(e.target.value)}
                required
              />
              <label htmlFor="Mangas">Manga</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="category"
                value="Music"
                checked={category === "Music"}
                id="Music"
                onChange={(e) => setCategory(e.target.value)}
                required
              />
              <label htmlFor="Music">Music</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
