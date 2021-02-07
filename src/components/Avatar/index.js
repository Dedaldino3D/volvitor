import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { FaPen } from "react-icons/fa";

import noPhoto from "../../images/3dimg.jpg";

const Container = styled.div`
  position: relative;
  flex: 0 0 auto;
  flex-shrink: 0 !important;
  line-height: 0;

  ${(props) =>
    props.card &&
    css`
      width: 100%;
      height: 100%;
      max-width: 100px;
      max-height: 120px;
      margin-right: 15px;
      border-radius: 8px;
      box-shadow: var(--bs-lg);
      overflow: hidden;

      & > :last-child {
        bottom: 5px;
        right: 10px;
      }
    `}
`;

export const UserStatus = styled.div`
  position: absolute;
  width: 13px;
  height: 13px;
  bottom: -2px;
  right: -2px;
  border: 2px solid var(--white);
  border-radius: 20px;
  background: var(--green);
`;

const UserEdit = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  bottom: -2px;
  right: -2px;
  box-shadow: var(--bs-ud);
  border-radius: 50%;
  padding: 10px;
  background: var(--chat-bg);

  & > svg {
    font-size: 20px;
  }
`;

const Img = styled.img`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.width}px`};
  border-radius: 50%;
  max-width: 100%;
  cursor: pointer;
  flex: 0 0 auto;

  ${(props) =>
    props.quarter &&
    css`
      border-radius: 10px;
    `}

  ${(props) =>
    props.card &&
    css`
      width: 100%;
      height: 100%;
      border-radius: 0;
    `}
`;

const Avatar = (props) => (
  <Container style={props.style} card={props.card} className={props.className}>
    <Img
      src={props.source || noPhoto}
      width={props.width || 50}
      height={props.width || 50}
      quarter={props.quarter}
      alt={`${props.alt}_image`}
      card={props.card}
    />
    {props.online && <UserStatus />}
    {!props.online && props.edit && (
      <UserEdit>
        <FaPen />
      </UserEdit>
    )}
  </Container>
);

Avatar.propTypes = {
  source: PropTypes.string,
  width: PropTypes.number,
  alt: PropTypes.string,
};

export default Avatar;
