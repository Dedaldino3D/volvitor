import styled, { css } from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 40px 10px 20px;
  background: rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease-in-out;

  & > div:first-child {
    position: relative;
    margin: auto;
    width: 95%;
    max-width: 600px;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    flex-flow: column nowrap;
  }
`;

export const ModalContainer = styled.div`
  border-radius: 4px;
  position: absolute;
  border: 1px solid var(--border);
  z-index: 80;
  overflow: auto;
  max-width: 600px;
  margin: auto;
  background: var(--white-100);
  color: var(--text);
  
  animation: fade-in 1s 1 linear;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes fade-in {
    0% {
      animation-timing-function: cubic-bezier(0.2242, 0.7499, 0.3142, 0.8148);
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ModalHeader = styled.div`
  padding: 0.8em;
  font-size: 16px;
  width: 100%;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.text &&
    css`
      border-bottom: 1px solid var(--border);
    `}
`;

export const ModalBody = styled.div`
  padding: 10px 20px 30px;
  font-size: 13px;
  width: 100%;
`;

export const ModalFooter = styled.div`
  border-top: 1px solid var(--border);
  padding: 8px;
  width: 100%;
`;

export const CloseModal = styled.span`
  svg {
    font-size: 22px;
  }
  font-weight: bold;
  margin-left: 5px;
  cursor: pointer;
  :focus {
    color: var(--gray-60);
  }
  align-self: flex-end;
  margin: 0 0 0 auto;
`;
