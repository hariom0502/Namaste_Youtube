import React from "react";
const commentData = [
  {
    name: "hariom",
    text: "lorem ipsum dolor sit amet",
    replies: [
      {
        name: "hariom",
        text: "lorem ipsum dolor sit amet",
        replies: [
          {
            name: "hariom",
            text: "lorem ipsum dolor sit amet",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "hariom",
    text: "lorem ipsum dolor sit amet",
    replies: [
      {
        name: "hariom",
        text: "lorem ipsum dolor sit amet",
        replies: [],
      },
    ],
  },
  {
    name: "hariom",
    text: "lorem ipsum dolor sit amet",
    replies: [
      {
        name: "hariom",
        text: "lorem ipsum dolor sit amet",
        replies: [],
      },
    ],
  },
  {
    name: "hariom",
    text: "lorem ipsum dolor sit amet",
    replies: [
      {
        name: "hariom",
        text: "lorem ipsum dolor sit amet",
        replies: [
          {
            name: "hariom",
            text: "lorem ipsum dolor sit amet",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-8 h-8"
        src="https://cdn-icons-png.flaticon.com/512/25/25634.png "
        alt="comment"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 w-[1120px]">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
