import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media (min-width: 576px) {
    margin-top: 3rem;
  }
`;

export const RegisterHeader = styled.div`
  text-align: center;
  margin-top: 1.5rem;

  & > h4 {
    color: #e1e9f1;
    font-weight: 600;
    font-size: 1.40625rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  & > p {
    color: #9aa1b9;
    margin-bottom: 1.5rem;
    margin-top: 0;
    text-align: center;
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #262e35;
  background-clip: border-box;
  border: 0 solid #36404a;
  border-radius: 0.25rem;
  padding: 1.5rem;
`;

export const CardBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`;

export const Button = styled.button`
  position: relative;
  display: inline-block;
  overflow: hidden;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  width: 100%;
  background-color: #7269ef;
  border-color: #7269ef;

  // btn
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  color: #a6b0cf;
  border: 1px solid transparent;
  padding: 0.47rem 0.75rem;
  font-size: 0.9375rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
`;
