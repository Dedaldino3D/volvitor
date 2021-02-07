import styled from "styled-components";

import Avatar from "../Avatar";
import { ChatSearch } from "../ChatList";
import { ChatMessageItem, ChatHeader } from "../ChatList/styles";

const GroupsContainer = styled.div`
  height: 100vh;
  background-color: #303841;
  @media (min-width: 992px) {
    margin-right: 0.25rem;
    min-width: 380px;
    max-width: 380px;
  }
`;

const GroupList = styled.div``;

const Groups = (props) => {
  return (
    <GroupsContainer>
      <ChatHeader>
        <h4>Groups</h4>
      </ChatHeader>
      <ChatSearch />
      <GroupList>
        <ul>
          <ChatMessageItem>
            <a href="#">
              <div className="chat-media">
                <Avatar width={40} online />
                <div className="message-item-body">
                  <h5>Helena Gaia</h5>
                  <p>Tomorrow we'll talk about that</p>
                </div>
                <div style={{ fontSize: "11px" }}>12:40</div>
              </div>
            </a>
          </ChatMessageItem>
        </ul>
      </GroupList>
    </GroupsContainer>
  );
};

export default Groups;
