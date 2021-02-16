import boxStyles from "../styles/box.module.scss";
import miscStyles from "../styles/misc.module.scss";
import buttonStyles from "../styles/buttons.module.scss";

import Avatar from "./avatar";
import Comments from "./comments";

export default function Post({ index, user, post, comments, onAddComment }) {
  return (
    <div class={boxStyles.box}>
      <div class={boxStyles.content}>
        <div class={miscStyles.flex}>
          <div>
            <Avatar />
          </div>
          <div class={miscStyles.flexGrow}>
            <div class={[miscStyles.h4, miscStyles.green].join(" ")}>
              {user.name}
            </div>
            <span class={[miscStyles.small, miscStyles.gray].join(" ")}>
              Hace # minutos.
            </span>
            <p>{post.content}</p>
            <button
              class={[
                buttonStyles.button,
                buttonStyles.invisible,
                buttonStyles.gap,
              ].join(" ")}
            >
              Me Gusta
            </button>
            <button
              class={[buttonStyles.button, buttonStyles.invisible].join(" ")}
            >
              Comentar
            </button>
          </div>
        </div>
      </div>
      <div class={boxStyles.footer}>
        <Comments
          comments={comments}
          onAdd={(comment) => {
            onAddComment(index, comment);
          }}
        />
      </div>
    </div>
  );
}
