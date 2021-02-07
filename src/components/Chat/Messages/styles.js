import styled from "styed-components";

export const MessagesContainer = styled.div`
  max-height: 100%;
  height: calc(100vh - 184px);
  position: relative;
  flex-direction: column;

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
  padding: 5px 15px;
  word-break: break-word;
  max-width: max-content;
  white-space: break-all;
  border-radius: 20px;
  color: var(--white);

  ${(props) =>
    props.direction === "incoming"
      ? css`
          margin: 0 auto 0 0;
          background: #fefefe;
        `
      : css`
          margin: 0 0 0 auto;
          background: var(--green);
        `}
`;

export const MessageContainer = styled.li`
  display: flex;
  align-items: flex-start;
  clear: both;
  float: left;
  padding: 5px;

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
