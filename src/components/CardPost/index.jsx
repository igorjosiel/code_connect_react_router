import { useState } from "react";
import { Link } from "react-router";
import { Author } from "../Author";
import { ThumbsUpButton } from "./ThumbsUpButton";
import { ModalComment } from "../ModalComment";
import http from "../../api";
import { useAuth } from "../../hooks/useAuth";
import styles from "./cardpost.module.css";

export const CardPost = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);

  const { isAuthenticated } = useAuth();

  const handleNewComment = (newComment) => {
    setComments([newComment, ...comments]);
  };

  const handleLikeButton = () => {
    http.post(`blog-posts/${post.id}/like`).then(() => {
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
            <ThumbsUpButton
              loading={false}
              onClick={handleLikeButton}
              disabled={!isAuthenticated}
            />

            <p>{likes}</p>
          </div>

          <div className={styles.action}>
            <ModalComment onSuccess={handleNewComment} postId={post.id} />

            <p>{comments.length}</p>
          </div>
        </div>

        <Author author={post.author} />
      </footer>
    </article>
  );
};
