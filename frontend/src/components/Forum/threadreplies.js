import React from "react";

const ThreadReplies = ({ replies, thread}) => {
  return (
    <div className="thread-replies">
      <h6 className="text-white text-lg mt-4 mb-2">Replies:</h6>
      {replies.filter(reply => reply.thread_id!==thread.threadId).map(reply => (
        <div key={reply.id} className="reply">
          <div className="text-sm text-gray-400 mb-1">Posted by {reply.author}</div>
          <div className="text-base text-white">{reply.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ThreadReplies;
