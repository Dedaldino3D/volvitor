import { PureComponent } from "react";

import Message from "./Message";
import { MessagesContainer } from "./styles";

class Messages extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate(prevProps) {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <MessagesContainer>
        {result.map((m) => (
          <Message key={m.id} message={m} />
        ))}
        <div
          style={{ float: "left", clear: "both" }}
          ref={(el) => {
            this.messagesEnd = el;
          }}
        />
      </MessagesContainer>
    );
  }
}

const result = [
  {
    id: "1312",
    body: "All is working",
    direction: "incoming",
    timestamp: "3 hours ago",
  },
  {
    id: "1434312",
    body: "All is working",
    direction: "outgoing",
    timestamp: "3 hours ago",
  },
  {
    id: "135312",
    body: "All is working",
    direction: "incoming",
    timestamp: "3 hours ago",
  },
  {
    id: "139012",
    body: "All is working",
    direction: "outgoing",
    timestamp: "3 hours ago",
  },
  {
    id: "131912",
    body: "All is working",
    direction: "outgoing",
    timestamp: "3 hours ago",
  },
  {
    id: "1353912",
    body: "All is working",
    direction: "incoming",
    timestamp: "3 hours ago",
  },
  {
    id: "7831312",
    body: "All is working",
    direction: "incoming",
    timestamp: "3 hours ago",
  },
  {
    id: "902312",
    body: "All is working",
    direction: "outgoing",
    timestamp: "3 hours ago",
  },
];
export default Messages;
