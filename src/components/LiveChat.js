import React from "react";
import ChatMessage from "./ChatMessage.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice.js";
import { generateRandomName, randomMessage } from "../utils/helper.js";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: randomMessage(20),
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className=" bg-slate-100 rounded-lg ml-2 p-2 w-full h-[450px] border border-black overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        className="border border-black w-full ml-2 p-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name:'hari',
            message: liveMessage
          }));
          setLiveMessage("")
        }}
      >
        <input
          className="w-64 px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
