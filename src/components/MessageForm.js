import React from "react";
import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { chatId, creds, setMessages } = props;

  // Handling submitted messages
  const handleSubmit = (e) => {
    e.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text }, (message) => {
        console.log("a messages");
        console.log(message);
        const sentMessage = {
          [message.created]: message,
        };
        console.log(sentMessage);

        setMessages((messages) => ({ ...messages, ...sentMessage }));
      });
    }

    setValue("");
  };

  // Handling changed messages
  const handleChange = (e) => {
    setValue(e.target.value);

    isTyping(props, chatId);
  };

  // Handling uploaded messages
  const handleUpload = (e) => {
    sendMessage(creds, chatId, { files: e.target.files, text: "" });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
