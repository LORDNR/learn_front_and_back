import React from "react";
import { useState } from "react";
import axios from "axios";
import { render } from "react-dom";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

export default function Add() {
  const [title, setTitle] = useState("");
  const [from, setFrom] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:5000/p/new", {
        title: title,
        from: from,
        content: content,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.status === 200) {
          setMessage("Post added successfully");
          window.setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          setMessage("Error adding post");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main style={{ padding: "1rem 0" }}>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={title}
              placeholder="title"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              value={from}
              placeholder="from"
              required
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              value={content}
              placeholder="content"
              required
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>

          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
    </main>
  );
}
