import { MdMoreVert } from "react-icons/md";
import { BsGeoAlt, BsClockFill } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";

import {
  ProfileContainer,
  ProfileHeader,
  ProfileUserHeader,
  ProfileDescription,
  Accordion,
  AccordionCard,
  AccordionCardHeader,
  AccordionCardBody,
  AboutItem,
  UserStatus,
} from "./styles";
import Avatar, { UserStatus as UserStatusAvatar } from "../Avatar";
import Dropdown, { DropdownItem } from "../Dropdown";

const Profile = (props) => {
  return (
    <ProfileContainer>
      <ProfileHeader>
        <h4>My Profile</h4>
        <Dropdown trigger={MdMoreVert}>
          <DropdownItem>Edit Profile</DropdownItem>
          <DropdownItem>Change username</DropdownItem>
          <DropdownItem>Change email</DropdownItem>
          <DropdownItem>List blocked users</DropdownItem>
        </Dropdown>
      </ProfileHeader>
      <ProfileUserHeader>
        <div style={{ marginBottom: "1.5rem" }}>
          <Avatar width={100} />
        </div>
        <h5>Dedaldino Antonio</h5>
        <UserStatus>
          <UserStatusAvatar className="user-status" /> <span>Active</span>
        </UserStatus>
      </ProfileUserHeader>
      <ProfileDescription>
        <p>
          If several languages coalesce, the grammar of the resulting language
          is more simple and regular than that of the individual.
        </p>
        <ProfileAccordion />
      </ProfileDescription>
    </ProfileContainer>
  );
};

const ProfileAccordion = (props) => {
  return (
    <Accordion>
      <AccordionCard>
        <AccordionCardHeader>
          {/* FaUser here */}
          <h5>About</h5>
          {/* FaCaret here */}
        </AccordionCardHeader>
        {/* conditinal render below */}
        <AccordionCardBody>
          <AboutItem>
            <FaRegEnvelope />
            <div>
              <p>Email</p>
              <h5>dedaldinoantonioo@gmail.com</h5>
            </div>
          </AboutItem>
          <AboutItem>
            <BsClockFill />
            <div>
              <p>Time</p>
              <h5>12 AM</h5>
            </div>
          </AboutItem>
          <AboutItem>
            <BsGeoAlt />
            <div>
              <p>Location</p>
              <h5>Luanda, Angola</h5>
            </div>
          </AboutItem>
        </AccordionCardBody>
      </AccordionCard>
    </Accordion>
  );
};
export default Profile;
