import { timeSince } from "../../../utils/helpers";
import Avatar from "../../Avatar";
import {
  MessageContainer,
  MessageContent,
  MessageTimestamp,
  MessageChatState,
} from "./styles";

function Message({ message }) {
  return (
    <MessageContainer
      direction={message.direction === "incoming" ? "received" : "sended"}
    >
      {message.direction === "incoming" && (
        <Avatar tam={35} alt="dedaldino" online={true} />
      )}
      <div>
        <MessageTimestamp direction={message.direction}>
          {timeSince(message.timestamp)}
        </MessageTimestamp>
        {message.body && message.body !== "" && (
          <MessageContent direction={message.direction}>
            {message.body}
          </MessageContent>
        )}
        {/* {message.links &&
          message.links.map((link) => (
            <RenderChatFile fileURL={link.url} direction={message.direction} />
          ))} */}
      </div>
      {message.chatState && (
        <MessageChatState>{message.chatState}</MessageChatState>
      )}
    </MessageContainer>
  );
}

// Message.propTypes = {
//   body: string.isRequired,
//   direction: string.isRequired,
//   timestamp: string.isRequired,
// };

export default Message;
