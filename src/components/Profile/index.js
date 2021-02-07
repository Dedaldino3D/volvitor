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

const Profile = (props) => {
  return (
    <ProfileContainer>
      <ProfileHeader>
        <h4>My Profile</h4>
        <button>More</button>
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
          Working as a full time software engineer is very hard, you need to
          manage your time....
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
            <p>Email</p>
            <h5>dedaldinoantonioo@gmail.com</h5>
          </AboutItem>
          <AboutItem>
            <p>Time</p>
            <h5>12 AM</h5>
          </AboutItem>
          <AboutItem>
            <p>Location</p>
            <h5>Luanda, Angola</h5>
          </AboutItem>
        </AccordionCardBody>
      </AccordionCard>
    </Accordion>
  );
};
export default Profile;
