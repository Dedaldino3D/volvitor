import styled from "styled-components";
import { FaImage } from "react-icons/fa";
import { BsPaperclip, BsMicFill } from "react-icons/bs";
import { MdSend } from "react-icons/md";

const ChatFormContainer = styled.div`
  border-top: 1px solid #36404a;

  @media (min-width: 992px) {
    padding: 1.5rem;
  }

  .form-div{
    display: flex;
    flex; 1 0 100%;
    flex-wrap: wrap;
    margin-right: 0;
    margin-left: 0;
  }

  .chat-col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    padding-right: 0;
    padding-left: 0;

    input {
      border-color: #36404a;
      background-color: #36404a;
      height: calc(1.5em + 1rem + 6px);
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      line-height: 1.5;
      border-radius: 0.4rem;
      display: block;
      width: 100%;
      color: #9aa1b9;
      background-clip: padding-box;
      border: 1px solid #36404a;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

      :focus{
        color: #9aa1b9;
        outline: 0;
        box-shadow: none;
        border-color: #36404a;
        background-color: #36404a;
      }
    }
  }

  .chat-col-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;

    @media (min-width: 768px) {
      margin-left: 0.5rem;
    }
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;
  margin: 8px;

  svg {
    font-size: 24px;
  }
`;

const ChatForm = (props) => {
  return (
    <ChatFormContainer>
      <form>
        <div className="form-div">
          <div className="chat-col">
            <input type="text" placeholder="Enter Message..." />
          </div>
          <div className="chat-col-auto">
            <Button type="button">
              <BsMicFill />
            </Button>
            <Button type="button">
              <BsPaperclip />
            </Button>
            <Button type="button">
              <FaImage />
            </Button>
            <Button type="button">
              <MdSend style={{ color: "var(--cyan)" }} />
            </Button>
          </div>
        </div>
      </form>
    </ChatFormContainer>
  );
};

export default ChatForm;
