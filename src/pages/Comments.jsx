import React, { useState } from "react";
// Custom CSS
import '../styles/comment.css'
export default function InputArea() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [allcomment, setAllcomment] = useState([]);

  function handleName(e) {
    setName(e.target.value);
  }
  function handleComment(e) {
    setComment(e.target.value);
  }
  function addComment() {
    if (name && comment !== "") {
      const commentDetails = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        content: comment,
      };
      setAllcomment([...allcomment, commentDetails]);
    }
  }
  const deleteComment = (e, id) => {
    e.preventDefault();
    setAllcomment(allcomment.filter((item) => item.id !== id));
  };
  return (
    <div className="col text-center mt-5">
      <div className="d-flex flex-column">
        <h1>Yorum Yap</h1>
        <input
          className="name-input mt-2"
          onChange={(e) => handleName(e)}
          type="text"
          name="name"
          id="text"
          placeholder="Adınız..."
        />
        <textarea
          className="comment-area mt-2"
          onChange={(e) => handleComment(e)}
          name="comment"
          placeholder="Yorumunuz..."
          id=""
          cols="84"
          rows="3"
        ></textarea>
        <button className="comment-button mt-2" onClick={addComment}>
          Gönder
        </button>
      </div>
      <h1 className="mt-5">Yorumlar</h1>
      <ul>
        {allcomment.map((item) => (
          <li className="comment-area p-4 mt-2">
            <div className="fw-bold">{item.name}</div>
            <p className="text-gray m-0 mt-2 p-0">{item.content}</p>
            <button
              className="delete mt-2 mx-auto"
              onClick={(e) => deleteComment(e, item.id)}>
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}