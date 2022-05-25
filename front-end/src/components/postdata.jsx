import * as React from "react";
import axios from "axios";
import { useState, setState, useEffect } from "react";
import "./postdata.css";
import { Link } from "react-router-dom";

export default function PostData() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const api = await axios.get(`http://localhost:5000/`);
      setPosts(api.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>hello</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title} {post.content}
          </li>
        ))}
      </ul>
      <h2 className="testh2">
        {posts.map((post) => (
          <li className="testli" key={post.id}>
            {post.title}
          </li>
        ))}
      </h2>
      <h1>Home Page</h1>
      <Link to="/invoices">Invoices</Link> |{" "}
      <Link to="/expenses">Expenses</Link> | <Link to="/add">Add</Link>
    </div>
  );
}
