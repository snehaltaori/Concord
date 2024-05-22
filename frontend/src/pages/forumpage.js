import React, { useState, useEffect } from "react";
import Thread from "../components/Forum/thread";
import axios from "axios";
import "../style.css";
import "../style_forum.css";
import "../index.css";

const Forum = () => {
  const [threads, setThreads] = useState([]);
  const [originalThreads, setOriginalThreads] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newThreadTitle, setNewThreadTitle] = useState("");
  const [newThreadDescription, setNewThreadDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSidebarCategory, setSelectedSidebarCategory] = useState("");
  const [loading, setLoading] = useState(true);

  const categorybordcol = ["orange", "green", "purple", "red"];
  const categories = [
    "General Discussions",
    "Academic Affairs",
    "Clubs and Societies",
    "Student Life",
  ];

  useEffect(() => {
    const fetchThreadsAndReplies = async () => {
      try {
        const [threadsResponse, repliesResponse] = await Promise.all([
          axios.get("/threads/"),
          axios.get("/replies/"),
        ]);

        const threads = threadsResponse.data.data;
        const replies = repliesResponse.data.data;

        const threadsWithReplies = threads.map((thread) => ({
          ...thread,
          replies: replies.filter((reply) => reply.threadId === thread.threadId) || [],
          showReplyForm: false,
          showReplies: false,
        }));

        setThreads(threadsWithReplies);
        setOriginalThreads(threadsWithReplies); // Save the original threads
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchThreadsAndReplies();
  }, []);

  const postNewThread = () => {
    if (newThreadTitle && newThreadDescription && selectedCategory) {
      const newThread = {
        title: newThreadTitle,
        author: "You",
        category: selectedCategory,
        description: newThreadDescription,
      };

      axios
        .post("/threads/", newThread)
        .then((response) => {
          const createdThread = response.data.data[0];
          setThreads((prevThreads) => [
            ...prevThreads,
            { ...createdThread, replies: [], showReplyForm: false, showReplies: false },
          ]);
          setOriginalThreads((prevThreads) => [
            ...prevThreads,
            { ...createdThread, replies: [], showReplyForm: false, showReplies: false },
          ]); // Update the original threads
          setNewThreadTitle("");
          setNewThreadDescription("");
        })
        .catch((error) => {
          console.error("Error posting new thread:", error);
          alert("An error occurred while posting the thread. Please try again later.");
        });
    } else {
      alert("Please fill in all fields and select a category.");
    }
  };

  const toggleReplyForm = (threadId) => {
    setThreads((prevThreads) =>
      prevThreads.map((thread) =>
        thread.threadId === threadId
          ? { ...thread, showReplyForm: !thread.showReplyForm }
          : thread
      )
    );
  };

  const toggleReplies = (threadId) => {
    setThreads((prevThreads) =>
      prevThreads.map((thread) =>
        thread.threadId === threadId
          ? { ...thread, showReplies: !thread.showReplies }
          : thread
      )
    );
  };

  const postReply = (threadId, replyText) => {
    axios
      .post("/replies/", {
        author: "You",
        text: replyText,
        threadId: threadId,
      })
      .then((response) => {
        const createdReply = response.data.data[0];
        setThreads((prevThreads) =>
          prevThreads.map((thread) =>
            thread.threadId === threadId
              ? { ...thread, replies: [...thread.replies, createdReply] }
              : thread
          )
        );
        setOriginalThreads((prevThreads) =>
          prevThreads.map((thread) =>
            thread.threadId === threadId
              ? { ...thread, replies: [...thread.replies, createdReply] }
              : thread
          )
        );
      })
      .catch((error) => {
        console.error("Error posting reply:", error);
      });
  };

  const searchThreads = () => {
    if (searchTerm.trim() === "") {
      setThreads(originalThreads);
    } else {
      const filteredThreads = originalThreads.filter((thread) =>
        thread.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        thread.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        thread.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setThreads(filteredThreads);
    }
  };

  const filterThreadsByCategory = (category) => {
    setSelectedSidebarCategory(
      category === selectedSidebarCategory ? "" : category
    );
    setSelectedCategory(category);
  };

  const filteredThreads = selectedSidebarCategory
    ? threads.filter((thread) => thread.category === selectedSidebarCategory)
    : threads;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-forum mx-auto w-full flex justify-center" style={{ maxWidth: "90%" }}>
      <section className="main ">
        <h2 className="center-heading text-3xl font-semibold mb-4">
          Welcome to the College Forum
        </h2>
        <p className="text-center text-white mb-6">
          Discuss and collaborate on organizational matters related to college.
        </p>
        <a className="a-vishal" href="../Dashboard/index.html">Back to Dashboard</a>

        <form className="flex justify-center items-center mb-4" id="searchForm">
          <input
            className="border border-gray-300 py-2 px-4 rounded-md mr-2 mt-2"
            style={{ width: "95%" }}
            type="search"
            placeholder="Search in Forum"
            aria-label="Search"
            id="searchInput"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mt-2"
            type="button"
            onClick={searchThreads}
          >
            Search
          </button>
        </form>
        <div className="flex gap-4 flex-row">
          <div className=" lg:w-1/4 pr-4">
            <div className="cardv bg-gray-800 rounded-md mb-6">
              <div className="card-body py-2 px-2">
                <h5 className="f-card-title text-xl font-semibold mb-2">
                  Forum Categories
                </h5>
                <ul className="">
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      className={`list-group-item ${
                        categories[index] === selectedSidebarCategory
                          ? "active-cat"
                          : ""
                      }`}
                      onClick={() => filterThreadsByCategory(categories[index])}
                    >
                      <div
                        className={`py-2 px-2 ${
                          categories[index] === selectedSidebarCategory
                            ? "active-anchor"
                            : ""
                        }`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          className="cat-dec"
                          style={{
                            backgroundColor: categorybordcol[index],
                          }}
                        ></div>
                        <a className="a-vishal" href="#">
                          {category}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/4">
            <div className="cardv bg-gray-800 rounded-md">
              <div className="card-body py-4">
                <h5 className="f-card-title text-3xl font-semibold ml-4 mb-4">
                  Latest Discussions
                </h5>
                {filteredThreads.map((thread) => (
                  <Thread
                    key={thread.threadId}
                    thread={thread}
                    toggleReplyForm={toggleReplyForm}
                    postReply={postReply}
                    toggleReplies={toggleReplies}
                  />
                ))}

                <div className="form-group">
                  <label
                    htmlFor="threadTitle"
                    className="block ml-4 text-white"
                  >
                    Thread Title:
                  </label>
                  <input
                    type="text"
                    style={{ width: "96%" }}
                    className="border ml-4 border-gray-300 py-2 px-4 rounded-md"
                    id="threadTitle"
                    value={newThreadTitle}
                    onChange={(e) => setNewThreadTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label
                    htmlFor="threadDescription"
                    className="block ml-4 text-white"
                  >
                    Thread Description:
                  </label>
                  <textarea
                    style={{ width: "96%"}}
                    className="border ml-4 border-gray-300 py-2 px-4 rounded-md"
                    id="threadDescription"
                    rows="3"
                    value={newThreadDescription}
                    onChange={(e) => setNewThreadDescription(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label
                    htmlFor="threadCategory"
                    className="block ml-4 mb-1 text-white"
                  >
                    Category:
                  </label>
                  <select
                    className="border ml-4 border-gray-300 py-2 px-4 rounded-md"
                    id="threadCategory"
                    style={{ width: "96%" }}
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md ml-4 mt-4"
                  type="button"
                  onClick={postNewThread}
                >
                  Post Thread
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Forum;
