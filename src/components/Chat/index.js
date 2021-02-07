import styled from "styled-components";

import Messages from "./Messages";
import ChatHeader from "./ChatHeader";
import ChatForm from "./ChatForm";

const ChatContainer = styled.div`
  background-color: #262e35;
  box-shadow: 0 2px 4px rgb(15 34 58 / 12%);
  transition: all 0.4s;
  width: 100%;

  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

const Chat = (props) => {
  return (
    <ChatContainer>
      <ChatHeader />
      <Messages />
      <ChatForm />
    </ChatContainer>
  );
};

export default Chat;
