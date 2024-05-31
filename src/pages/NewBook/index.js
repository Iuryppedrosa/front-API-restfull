import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../../assets/logo.svg";
import "./styles.css";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";

export default function NewBook() {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [launchDate, setLaunchDate] = useState("");

  const navigate = useNavigate();

  const { bookId } = useParams();

  const username = localStorage.getItem("username");
  const accessToken = localStorage.getItem("accessToken");

  async function loadBook() {
    try {
      const response = await api.get(`api/book/v1/${bookId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      let adjustDate = response.data.launchDate.split("T", 10)[0];

      setId(response.data.id);
      setTitle(response.data.title);
      setAuthor(response.data.author);
      setPrice(response.data.price);
      setLaunchDate(adjustDate);
    } catch (error) {
      alert("Error loading book, please try again!");
      navigate("/books");
    }
  }

  useEffect(() => {
    if (bookId === "0") return;
    else loadBook();
  }, [bookId]);

  async function saveOrUpdate(e) {
    e.preventDefault();

    const data = {
      title,
      author,
      launchDate,
      price,
    };

    try {
      if (bookId === "0") {
        await api.post("api/book/v1", data, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      } else {
        data.id = id;
        await api.put("api/book/v1", data, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      }

      navigate("/books");
    } catch (error) {
      alert("Error while recording a book, please try again!");
    }
  }

  return (
    <div className="new-book-container">
      <div className="content">
        <section className="form">
          <img src={logoImage} alt="logo" />
          <h1>{bookId === "0" ? "Add" : "Update"} Book!</h1>
          <p>
            Enter the book information and click on{" "}
            {bookId === "0" ? "Add" : "'Update'"}
          </p>
          <Link className="back-link" to="/books">
            <FiArrowLeft size={16} color="#251fc5" />
            Back to Home
          </Link>
        </section>
        <form onSubmit={saveOrUpdate}>
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="date"
            value={launchDate}
            onChange={(e) => setLaunchDate(e.target.value)}
          />

          <input
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <button className="button" type="submit">
            {bookId === "0" ? "Add" : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
}
