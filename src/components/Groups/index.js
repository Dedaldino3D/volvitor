import { useState } from "react";
import styled from "styled-components";
import { BsPeople } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

import Modal from "../Modal";
import Avatar from "../Avatar";
import Input from "../layout/Input";
import { ChatMessageItem, ChatHeader } from "../ChatList/styles";

const GroupsContainer = styled.div`
  height: 100vh;
  background-color: #303841;
  padding-bottom: 100px;

  @media (min-width: 992px) {
    margin-right: 0.25rem;
    min-width: 380px;
    max-width: 380px;
    padding-bottom: 0;
  }
`;

const GroupList = styled.div``;

const Groups = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <GroupsContainer>
      <ChatHeader>
        <h4>Groups</h4>
        <BsPeople onClick={handleButtonClick} />
        <Modal
          isVisible={isOpen}
          onClose={handleButtonClick}
          title="Create new Group"
        />
        <Input
          type="text"
          placeholder="Search for messages or users"
          icon={<FaSearch />}
        />
      </ChatHeader>
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
