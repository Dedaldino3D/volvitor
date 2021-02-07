import Avatar from "../Avatar";
import { Input } from "../layout/Input";
import {
  ChatListContainer,
  ChatMessageItem,
  RecentChatList,
  ChatHeader,
  ChatSearch as ChatSearchContainer,
  OnlineUsers,
  OnlineUserItem,
} from "./styles";

export const ChatSearch = (props) => {
  return (
    <ChatSearchContainer>
      <div className="input-group-prepend">
        <button type="button">{/* FaSearch here */}Search</button>
        <Input placeholder="Search messages or users" type="text" />
      </div>
    </ChatSearchContainer>
  );
};

const ChatList = (props) => {
  return (
    <ChatListContainer>
      <ChatHeader>
        <h4>Chats</h4>
        <ChatSearch />
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
