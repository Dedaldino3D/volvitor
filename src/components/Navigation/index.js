import styled from "styled-components";
import { NavLink } from "react-router-dom";
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
  overflow: hidden;

  @media (max-width: 991px) {
    flex: row nowrap;;
    position: fixed;
    bottom: 0;
    min-height: 60px;
    max-height: 60px;
    height: 60px;
    width: 100vw;
    min-width: 100vw;
    
    .nav-logo, .nav-profile, .nav-settings{
      display: none;
    }
  }

  @media (min-width: 992px) {
    margin-right: 0.25rem !important;
    flex-direction: column !important;
  }
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

  .active-navigation {
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
      <NavigationList className="nav-logo">
        <NavigationItem>
          <Logo />
        </NavigationItem>
      </NavigationList>
      <NavigationList>
        <NavLink
          to="/profile"
          className="nav-profile"
          activeClassName="active-navigation"
        >
          <NavigationItem>
            <FaRegUser />
          </NavigationItem>
        </NavLink>
        <NavLink exact to="/" activeClassName="active-navigation">
          <NavigationItem>
            <BsChatDots />
          </NavigationItem>
        </NavLink>
        <NavLink to="/groups" activeClassName="active-navigation">
          <NavigationItem>
            <BsPeople />
          </NavigationItem>
        </NavLink>
        <NavLink to="/contacts" activeClassName="active-navigation">
          <NavigationItem>
            <FaRegAddressBook />
          </NavigationItem>
        </NavLink>
        <NavLink to="/notifications" activeClassName="active-navigation">
          <NavigationItem>
            <FaRegBell />
          </NavigationItem>
        </NavLink>
        <NavLink to="/settings" activeClassName="active-navigation">
          <NavigationItem>
            <BsGear />
          </NavigationItem>
        </NavLink>
      </NavigationList>
      <NavigationList>
        <NavLink to="/info" activeClassName="active-navigation">
          <NavigationItem>
            <Avatar width={30} />
          </NavigationItem>
        </NavLink>
      </NavigationList>
    </HeaderContainer>
  );
};

export default Navigation;
