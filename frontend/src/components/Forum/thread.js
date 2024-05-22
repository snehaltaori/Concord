import React, { useState } from "react";
import ThreadReplies from "./threadreplies";

const Thread = ({ thread, toggleReplyForm, toggleReplies, postReply }) => {
  const [replyText, setReplyText] = useState("");
  const [replyPosted, setReplyPosted] = useState(false);
  const tagColors = [
    "rgba(215, 102, 27, 0.47)",
    "rgba(27, 215, 27, 0.27)",
    "rgba(104, 4, 239, 0.57)",
    "rgba(215, 27, 27, 0.47)",
  ];
  const categorybordcol = ["orange", "green", "purple", "red"];
  const categories = ["General Discussions", "Academic Affairs", "Clubs and Societies", "Student Life"];

  const handlePostReply = () => {
    if (replyText.trim() !== "") {
      postReply(thread.threadId, replyText);
      setReplyText("");
      setReplyPosted(true);
      setTimeout(() => {
        setReplyPosted(false);
      }, 2000);
    }
  };

  const calculateTimeAgo = (date) => {
    const currentTime = new Date();
    const postedTime = new Date(date);
    const timeDifference = currentTime - postedTime;

    const seconds = Math.floor(timeDifference / 1000);
    
    if (seconds < 60) {
      return "less than a minute ago";
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
      const days = Math.floor(seconds / 86400);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    }
  };

  return (
    <div className="thread mb-4 border-b-2 pb-5 ml-4 mr-4 ">
      <h6 className="mb-3 text-lg text-white">{thread.title}</h6>
      <div className="mb-2 text-sm text-gray-400">Posted by {thread.author} - {calculateTimeAgo(thread.postedAt)}</div>
      <div className="mb-2">
        <span
          className="bg-gray-700 text-white text-xs px-2 py-1"
          style={{
            backgroundColor: tagColors[categories.indexOf(thread.category)],
            borderColor: categorybordcol[categories.indexOf(thread.category)],
            borderRadius: "20px",
            borderWidth: "1px",
            borderStyle: "solid",
          }}
        >
          #{thread.category}
        </span>
      </div>
      <div className="text-base text-white mb-4">{thread.description}</div>
      <button
        type="button"
        className="replybtn"
        onClick={() => toggleReplies(thread.threadId)}
      >
        {thread.showReplies ? "Hide Replies" : `View ${thread.replies?.length || 0} more replies`}
      </button>
      <button
        type="button"
        className="ml-2 replybtn"
        onClick={() => toggleReplyForm(thread.threadId)}
      >
        Reply
      </button>
      {thread.showReplyForm && (
        <div className="form-group mt-1">
          <input
            style={{ width: "83%" }}
            className="chat-input mt-3 pl-2 mb-3"
            placeholder="Type here..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <button
            type="button"
            style={{ height: "30px" }}
            className="post-reply-btn hover:bg-blue-700"
            onClick={handlePostReply}
          >
            Post Reply
          </button>
          {replyPosted && (
            <div className="text-green-500 text-sm ml-3 mt-2">Reply posted successfully!</div>
          )}
        </div>
      )}
      {thread.showReplies && (
        <ThreadReplies replies={thread.replies || []} thread={thread} />
      )}
    </div>
  );
};

export default Thread;
