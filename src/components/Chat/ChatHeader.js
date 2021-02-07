import styled from "styled-components";
import { FaRegUser, FaVideo } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";

import Avatar from "../Avatar";

const ChatHeaderContainer = styled.div`
  border-bottom: 1px solid #36404a;

  @media (min-width: 992px) {
    padding: 1.5rem;
  }

  & > div {
    display: flex;
    flex: 1 0 100%;
    flex-wrap: wrap;
    margin: 0 -12px;
    align-items: center;
  }
`;

const UserChatDetails = styled.div`
  position: relative;
  width: 100%;
  padding: 0 12px;
  display: flex;
  align-items: center;

  @media (min-width: 576px) {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }

  & > :first-child {
    display: inline-block;
    margin-right: 1rem;
  }

  & > h5 {
    font-size: 16px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #e1e9f1;
  }
`;

const ChatMoreInfo = styled.div`
  position: relative;
  width: 100%;
  padding: 0 12px;
  text-align: end;

  @media (min-width: 576px) {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
`;

const UserChatButton = styled.button`
  height: 40px;
  width: 40px;
  line-height: 40px;
  box-shadow: none;
  padding: 0;
  font-size: 20px;
  color: #abb4d2;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  :not(:disabled) {
    cursor: pointer;
  }
`;

const ChatHeader = (props) => {
  return (
    <ChatHeaderContainer>
      <div>
        <UserChatDetails>
          <Avatar width={40} online />
          <h5>Luciana Regrina</h5>
        </UserChatDetails>
        <ChatMoreInfo>
          <ul>
            <li style={{ display: "inline-block" }}>
              <UserChatButton>
                <FaRegUser />
              </UserChatButton>
            </li>
            <li style={{ display: "inline-block" }}>
              <UserChatButton>
                <FaVideo />
              </UserChatButton>
            </li>
            <li style={{ display: "inline-block" }}>
              <UserChatButton>
                <MdMoreVert />
              </UserChatButton>
            </li>
          </ul>
        </ChatMoreInfo>
      </div>
    </ChatHeaderContainer>
  );
};

export default ChatHeader;
