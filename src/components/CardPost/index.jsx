import { useState } from "react";
import { Link } from "react-router";
import { Author } from "../Author";
import { ThumbsUpButton } from "./ThumbsUpButton";
import { ModalComment } from "../ModalComment";

import styles from "./cardpost.module.css";
import http from "../../api";

export const CardPost = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);

  const handleLikeButton = () => {
    const access_token = localStorage.getItem("access_token");

    http
      .post(
        `blog-posts/${post.id}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      )
      .then(() => {
        setLikes((oldLikes) => oldLikes + 1);
      });
  };

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <figure className={styles.figure}>
          <img src={post.cover} alt={`Capa do post de titulo: ${post.title}`} />
        </figure>
      </header>

      <section className={styles.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>

        <Link to={`/blog-post/${post.slug}`}>Ver detalhes</Link>
      </section>

      <footer className={styles.footer}>
        <div className={styles.actions}>
          <div className={styles.action}>
            <ThumbsUpButton loading={false} onClick={handleLikeButton} />

            <p>{likes}</p>
          </div>

          <div className={styles.action}>
            <ModalComment />

            <p>{post.comments.length}</p>
          </div>
        </div>

        <Author author={post.author} />
      </footer>
    </article>
  );
};
