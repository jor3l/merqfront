import Header from "../components/header";
import Post from "../components/post";
import NewPost from "../components/new-post";

import containerStyles from "../styles/container.module.scss";
import { useState } from "react";

const initialState = [
  {
    user: { name: "Juan Rodriguez" },
    post: {
      content:
        "Aliquam id urna ultricies, facilisis est eget, volutpat nisl. Nulla nulla metus, dictum nec pretium interdum, auctor ut urna. Praesent tincidunt et ante quis blandit. Mauris suscipit, ante at euismod sollicitudin, lorem mauris ultricies velit, non faucibus mi sapien eget lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      createdAt: new Date(),
    },
    comments: [
      {
        user: { name: "Test Comment" },
        content: "My test comment",
        createdAt: new Date(),
      },
      {
        user: { name: "Other User" },
        content: "this is a comment too",
        createdAt: new Date(),
      },
    ],
  },
];

const activeUser = {
  name: "Juan User",
};

export default function Home() {
  let [posts, setPosts] = useState([...initialState]);
  return (
    <>
      <Header />
      <div class={containerStyles.container}>
        <NewPost
          onSubmit={(post) => {
            setPosts([
              {
                user: { ...activeUser },
                post: { content: post, createdAt: new Date() },
                comments: [],
              },
              ...posts,
            ]);
          }}
        />
        {posts &&
          posts.map(({ user, post, comments }, i) => (
            <Post
              index={i}
              key={`post-${i}`}
              user={user}
              post={post}
              comments={comments}
              onAddComment={(index, comment) => {
                let set = [...posts];
                set[index].comments.push({
                  user: { ...activeUser },
                  content: comment,
                  createdAt: new Date(),
                });
                setPosts(set);
              }}
            />
          ))}
      </div>
    </>
  );
}
