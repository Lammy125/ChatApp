import { ChatEngine } from "react-chat-engine";
import ChatFeed from "../../components/ChatFeed";
import { NEW_MSG_AUDIO, PROJECT_ID } from "../../constants/constants";

const Chat = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID={PROJECT_ID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(NEW_MSG_AUDIO).play()
      }
    />
  );
};

export default Chat;
