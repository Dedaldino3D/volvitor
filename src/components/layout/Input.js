import { useRef, useCallback } from "react";
import styled from "styled-components";

const InputForm = styled.input`
  border-color: #36404a;
  background-color: #36404a;
  height: calc(1.5em + 1rem + 6px);
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.4rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  display: block;
  width: 100%;
  color: #9aa1b9;
  background-clip: padding-box;
  border: 1px solid #36404a;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  :focus {
    color: #9aa1b9;
    outline: 0;
    box-shadow: none;
    border-color: #36404a;
    background-color: #36404a;
  }
`;

const InputContainer = styled.div`
  margin-bottom: 1rem;
  border-radius: 0.4rem;
  background-color: #36404a;

  .input-group {
    position: relative;
    display: flex;
    align-items: stretch;
    width: 100%;
  }
`;

const GroupPrepend = styled.div`
  display: flex;
  margin-right: -1px;

  button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding: 0.5rem 1rem;
    line-height: 1.5;
    font-size: 0.875rem;
    border-radius: 0.4rem;
    position: relative;
    z-index: 2;
    color: #9aa1b9;
    padding-right: 0.25rem;
    font-weight: 400;

    display: inline-block;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    :not(:disabled) {
      cursor: pointer;
    }

    svg {
      vertical-align: middle;
    }
  }
`;

const Input = (props) => {
  console.log("whats props: ", props);
  const ref = useRef();

  const handleBtnClick = useCallback(() => {
    ref.current.focus();
  }, [ref]);

  return (
    <InputContainer>
      {props.icon ? (
        <GroupPrepend>
          {/* TODO: CHECK IF IS A VALID DOM ELEMENT */}
          <button type="button" onClikck={handleBtnClick}>
            {props.icon}
          </button>
          <InputForm
            ref={ref}
            placeholder={props.placeholder}
            type={props.type}
            onChange={props.onChange}
            onClick={props.onClick}
            onKeyPress={props.onKeyPress}
            required={props.required}
          />
        </GroupPrepend>
      ) : (
        <InputForm
          placeholder={props.placeholder}
          type={props.type}
          onChange={props.onChange}
          onClick={props.onClick}
          onKeyPress={props.onKeyPress}
        />
      )}
    </InputContainer>
  );
};

export default Input;
