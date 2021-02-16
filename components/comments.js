import Avatar from "./avatar";
import styles from "../styles/comments.module.scss";
import miscStyles from "../styles/misc.module.scss";
import formStyles from "../styles/form.module.scss";
import { useRef, useState } from "react";

export default function Comments({ comments, onAdd }) {
  let input = useRef();
  return (
    <div class={styles.comments}>
      <div class={styles.summary}>
        <div class={miscStyles.green}>Likes</div>
        <div class={[styles.total, miscStyles.gray].join(" ")}>
          {comments.length} comments
        </div>
      </div>
      <ul>
        {comments.map((comment, index) => (
          <li key={`comment-${index}`}>
            <div class={styles.comment}>
              <div class="avatar">
                <Avatar />
              </div>
              <div class="comment">
                <p style={{ margin: "5px 0 0 0" }}>
                  <span class={[miscStyles.h4, miscStyles.green].join(" ")}>
                    {comment.user.name}:{" "}
                  </span>
                  {comment.content}
                </p>
                <span class={[miscStyles.small, miscStyles.gray].join(" ")}>
                  Hace # minutos.
                </span>
              </div>
            </div>
          </li>
        ))}
        <li class={styles.newCommentBox}>
          <textarea
            id="new-comment"
            class={formStyles.textarea}
            ref={input}
            placeholder="Escribe aquí tu comentario"
            onKeyUp={(e) =>
              e.key === "Enter" &&
              onAdd(input.current.value) &&
              (input.current.value = "" && input.current.reset())
            }
          />
        </li>
      </ul>
    </div>
  );
}
