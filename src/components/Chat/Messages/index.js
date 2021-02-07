import { PureComponent } from "react";

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
        {/* render messages here */}
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

export default Messages;
