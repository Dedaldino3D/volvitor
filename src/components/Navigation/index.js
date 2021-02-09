import styled from "styled-components";
import { FaRegUser, FaRegAddressBook, FaRegBell } from "react-icons/fa";
import { BsGear, BsChatDots, BsPeople } from "react-icons/bs";

import Logo from "../layout/Logo";
import Avatar from "../Avatar";

const HeaderContainer = styled.nav`
  min-width: 75px;
  max-width: 75px;
  height: 100vh;
  min-height: 570px;
  background-color: #36404a;
  display: flex;
  justify-content: space-between;
  z-index: 9;
  box-shadow: 0 2px 4px rgb(15 34 58 / 12%);

  @media (max-width: 991px) {
    flex-direction: row;
    position: fixed;
    bottom: 0;
  }

  @media (min-width: 992px) {
    margin-right: 0.25rem !important;
  }

  @media (min-width: 992px) {
    flex-direction: column !important;
  }
`;

const NavigationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 0;
  margin-top: 0;
  list-style: none;
  padding-left: 0;
  justify-content: space-around;

  .active {
    background-color: #3e4a56;
  }
`;

const NavigationItem = styled.li`
  margin: 7px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e1e9f1;
  border-radius: 8px;
  width: 56px;
  height: 56px;
  line-height: 56px;

  & > svg {
    font-size: 20px;
    vertical-align: middle;
  }
`;

const Navigation = (props) => {
  return (
    <HeaderContainer>
      <NavigationList>
        <NavigationItem>
          <Logo />
        </NavigationItem>
      </NavigationList>
      <NavigationList>
        <NavigationItem>
          <FaRegUser />
        </NavigationItem>
        <NavigationItem className="active">
          <BsChatDots />
        </NavigationItem>
        <NavigationItem>
          <BsPeople />
        </NavigationItem>
        <NavigationItem>
          <FaRegAddressBook />
        </NavigationItem>
        <NavigationItem>
          <FaRegBell />
        </NavigationItem>
        <NavigationItem>
          <BsGear />
        </NavigationItem>
      </NavigationList>
      <NavigationList>
        <NavigationItem>
          <Avatar width={35} />
        </NavigationItem>
      </NavigationList>
    </HeaderContainer>
  );
};

export default Navigation;
