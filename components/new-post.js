import { useRef, useState } from "react";
import boxStyles from "../styles/box.module.scss";
import buttonStyles from "../styles/buttons.module.scss";
import formStyles from "../styles/form.module.scss";

export default function NewPost({ onSubmit }) {
  let [text, setText] = useState("");
  return (
    <div class={boxStyles.box}>
      <div class={boxStyles.content}>
        <textarea
          id="new-post"
          onChange={(e) => setText(e.target.value)}
          class={formStyles.textarea}
          placeholder="Escribe aquí tu estado"
          value={text}
        />
      </div>
      <div class={boxStyles.footer} style={{ textAlign: "right" }}>
        <button
          class={buttonStyles.button}
          onClick={() => {
            onSubmit(text) && setText("");
          }}
        >
          Publicar
        </button>
      </div>
    </div>
  );
}
