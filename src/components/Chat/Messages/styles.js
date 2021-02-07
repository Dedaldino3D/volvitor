import styled, { css } from "styled-components";

export const MessagesContainer = styled.div`
  max-height: 100%;
  height: calc(100vh - 184px);
  position: relative;
  flex-direction: column;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
    cursor: pointer;
  }

  ::-webkit-scrollbar-trace,
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }

  @media (min-width: 992px) {
    padding: 1.5rem;
  }
`;

export const MessageTimestamp = styled.span`
  margin-left: 5px;
  font-size: 10px;
  color: var(--gray-60);
  width: max-content;
  display: block;

  ${(props) =>
    props.direction === "incoming"
      ? css`
          margin: 0 auto 0 0;
        `
      : css`
          margin: 0 0 0 auto;
        `}
`;

export const MessageContent = styled.div`
  position: relative;
  padding: 12px 20px;
  word-break: break-word;
  max-width: max-content;
  white-space: break-all;
  border-radius: 15px 15px 0 15px;
  color: var(--white);
  font-size: 14px;

  ${(props) =>
    props.direction === "incoming"
      ? css`
          margin: 0 auto 0 0;
          background: var(--blue-bold);
          color: var(--text-light);
          border-radius: 15px;
          border-bottom-left-radius: 0;
        `
      : css`
          margin: 0 0 0 auto;
          background-color: var(--message-incoming-bg);
          color: var(--text-light);
        `}
`;

export const MessageContainer = styled.li`
  display: flex;
  align-items: flex-start;
  clear: both;
  float: left;
  padding: 5px;
  font-weight: 600;

  & > :last-child {
    flex: 1 2 auto;
  }

  ${(props) =>
    props.direction === "sended" &&
    css`
      float: right;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      max-width: calc(100% - 80px);
      & > :first-child {
        float: right;
        margin: 6px 0 0 8px;
      }

      & > div {
        float: right;
      }
    `}
  ${(props) =>
    props.direction === "received" &&
    css`
      width: calc(100% - 80px);
      align-self: end;

      & > :first-child {
        margin-top: 20px;
        margin-right: 5px;
      }
    `}
`;

export const MessageChatState = styled.span`
  font-size: 13px;
  font-style: italic;
  font-weight: 600;
  line-spacing: 1.2;
  color: var(--green);
  text-shadow: 1px 1px 1px rgba(80, 245, 180, 0.4);
`;
