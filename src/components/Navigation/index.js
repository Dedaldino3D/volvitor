import styled from "styled-components";

const HeaderContainer = styled.nav`
  min-width: 75px;
  max-width: 75px;
  height: 100vh;
  min-height: 570px;
  background-color: #36404a;
  display: flex;
  z-index: 9;
  box-shadow: 0 2px 4px rgb(15 34 58 / 12%);

  @media (min-width: 992px) {
    margin-right: 0.25rem !important;
  }

  @media (min-width: 992px) {
    flex-direction: column !important;
  }
`;

const NavigationList = styled.ul`
  justify-content: center !important;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0;
  margin-top: 0;
  list-style: none;
  padding-left: 0;
`;

const NavigationItem = styled.li`
  margin: 7px 0;
  cursor: pointer;
`;

const Navigation = (props) => {
  return (
    <HeaderContainer>
      <NavigationList>
        <NavigationItem>{/* FaUser here */}Info</NavigationItem>
        <NavigationItem>{/* FaChat here */}Chats</NavigationItem>
        <NavigationItem>{/* FaUsers/FaGroups here */}Groups</NavigationItem>
        <NavigationItem>{/* FaContacts here */}Contacts</NavigationItem>
        <NavigationItem>
          {/* FaProfile here */}Profile
          {/* Dropdown menu */}
        </NavigationItem>
        <NavigationItem>{/* FaCog here */}Settings</NavigationItem>
      </NavigationList>
      {/* <NavigationList>
      </NavigationList> */}
    </HeaderContainer>
  );
};

export default Navigation;
