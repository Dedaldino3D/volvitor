import styled from "styled-components";

export const ChatListContainer = styled.div`
  height: 100vh;
  background-color: #303841;
  @media (min-width: 992px) {
    margin-right: 0.25rem;
    min-width: 380px;
    max-width: 380px;
  }
`;

export const ChatHeader = styled.div`
  padding: 1.5rem 1.5rem 0;

  & > h4 {
    font-weight: 600;
    color: #e1e9f1;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    margin-top: 0;
    font-size: 1.40625rem;
  }
`;

export const OnlineUsers = styled.div`
  padding: 0 1.5rem 1.5rem;
  display: flex;
  flex-flow: row nowrap;
  overflow-x: hidden;
`;

export const OnlineUserItem = styled.div`
  display: inline-block;
  position: relative;

  & > a {
    background-color: #36404a;
    padding: 8px;
    border-radius: 8px;
    text-align: center;
    display: block;
    margin-top: 16px;
    color: #7269ef;

    & > :first-child {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
    }

    & > h5 {
      margin-top: 1rem;
      font-weight: 600;
      color: #e1e9f1;
      margin-bottom: 0.25rem;
      oerflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 13px;
    }
  }
`;

export const RecentChatList = styled.div`
  padding: 0 0.5rem;

  & > h5 {
    font-size: 16px;
    padding: 0 1rem;
    margin-bottom: 1rem;
    color: #e1e9f1;
    font-weight: 600;
    line-height: 1.2;
  }

  .chat-message-list {
    max-height: 100%;
    height: calc(100vh - 280px);
    overflow-y: auto;
    position: relative;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;

    ::-webkit-scrollbar {
      width: 8px;
      cursor: pointer;
    }

    ::-webkit-scrollbar:hover {
      background-color: rgba(0, 0, 0, 0.2);
      transition: all 0.4s;
    }

    ::-webkit-scrollbar-thumb,
    ::-webkit-scrollbar-trace {
      background-color: var(--message-incoming-bg);
      border-radius: 8px;
    }

    .active {
      background-color: #36404a;
    }
  }
`;

export const ChatMessageItem = styled.li`
  & > a {
    position: relative;
    display: flex;
    padding: 15px 20px;
    color: #abb4d2;
    transition: all 0.4s;
    border-top: 1px solid #303841;
    border-radius: 4px;
    text-decoration: none;
  }

  .chat-media {
    display: flex;
    align-items: flex-start;

    & > :first-child {
      margin-right: 1rem;
      align-self: center;
    }
  }

  .message-item-body {
    overflow: hidden;
    flex: 1 1;

    & > h5 {
      font-size: 15px;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 0.25rem;
      color: #e1e9f1;
      font-weight: 600;
    }

    & > p {
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 0;
      margin-top: 0;
    }
  }
`;
