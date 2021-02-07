import { FaSearch } from "react-icons/fa";

import Avatar from "../Avatar";
import Input from "../layout/Input";
import {
  ChatListContainer,
  ChatMessageItem,
  RecentChatList,
  ChatHeader,
  OnlineUsers,
  OnlineUserItem,
} from "./styles";

const ChatList = (props) => {
  return (
    <ChatListContainer>
      <ChatHeader>
        <h4>Chats</h4>
        <Input
          type="text"
          placeholder="Search for messages or users"
          icon={<FaSearch />}
        />
        <OnlineUsers>
          {/* Alice carousel */}
          <OnlineUserItem>
            <a href="#">
              <Avatar width={40} />
              <h5>Dedaldino</h5>
            </a>
          </OnlineUserItem>
          <OnlineUserItem>
            <a href="#">
              <Avatar width={40} />
              <h5>Dedaldino</h5>
            </a>
          </OnlineUserItem>
          <OnlineUserItem>
            <a href="#">
              <Avatar width={40} />
              <h5>Dedaldino</h5>
            </a>
          </OnlineUserItem>
          <OnlineUserItem>
            <a href="#">
              <Avatar width={40} />
              <h5>Dedaldino</h5>
            </a>
          </OnlineUserItem>
          <OnlineUserItem>
            <a href="#">
              <Avatar width={40} />
              <h5>Dedaldino</h5>
            </a>
          </OnlineUserItem>
          <OnlineUserItem>
            <a href="#">
              <Avatar width={40} />
              <h5>Dedaldino</h5>
            </a>
          </OnlineUserItem>
          <OnlineUserItem>
            <a href="#">
              <Avatar width={40} />
              <h5>Dedaldino</h5>
            </a>
          </OnlineUserItem>
          {/* Alice carousel */}
        </OnlineUsers>
        <RecentChatList>
          <h5>Recent</h5>
          <div className="chat-message-list">
            <ul>
              <ChatMessageItem className="active">
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
              <ChatMessageItem>
                <a href="#">
                  <div className="chat-media">
                    <Avatar width={40} />
                    <div className="message-item-body">
                      <h5>Helena Gaia</h5>
                      <p>Tomorrow we'll talk about that</p>
                    </div>
                    <div style={{ fontSize: "11px" }}>12:40</div>
                  </div>
                </a>
              </ChatMessageItem>
              <ChatMessageItem>
                <a href="#">
                  <div className="chat-media">
                    <Avatar width={40} />
                    <div className="message-item-body">
                      <h5>Helena Gaia</h5>
                      <p>Tomorrow we'll talk about that</p>
                    </div>
                    <div style={{ fontSize: "11px" }}>12:40</div>
                  </div>
                </a>
              </ChatMessageItem>
              <ChatMessageItem>
                <a href="#">
                  <div className="chat-media">
                    <Avatar width={40} />
                    <div className="message-item-body">
                      <h5>Helena Gaia</h5>
                      <p>Tomorrow we'll talk about that</p>
                    </div>
                    <div style={{ fontSize: "11px" }}>12:40</div>
                  </div>
                </a>
              </ChatMessageItem>
              <ChatMessageItem>
                <a href="#">
                  <div className="chat-media">
                    <Avatar width={40} />
                    <div className="message-item-body">
                      <h5>Helena Gaia</h5>
                      <p>Tomorrow we'll talk about that</p>
                    </div>
                    <div style={{ fontSize: "11px" }}>12:40</div>
                  </div>
                </a>
              </ChatMessageItem>
            </ul>
          </div>
        </RecentChatList>
      </ChatHeader>
    </ChatListContainer>
  );
};

export default ChatList;
