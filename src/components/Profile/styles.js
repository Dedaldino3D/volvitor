import styled from "styled-components";

export const ProfileContainer = styled.div`
  height: 100vh;
  background-color: #303841;

  @media (min-width: 992px) {
    margin-right: 0.25rem;
    min-width: 380px;
    max-width: 380px;
  }
`;

export const ProfileHeader = styled.div`
  padding: 1.5rem 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  & > h4 {
    color: #e1e9f1;
    font-weight: 600;
    font-size: 1.40625rem;
    line-height: 1.2;
  }

  & > button {

  }
`;

export const ProfileUserHeader = styled.div`
  text-align: center;
  padding: 1.5rem;
  border-bottom: 1px solid #36404a;

  & > h5 {
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 0.25rem;
    color: #e1e9f1;
    font-weight: 600;
  }

  & > div {
    color: #9aa1b9;
    margin-bottom: 0.25rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const ProfileDescription = styled.div`
  padding: 1.5rem;
  height: calc(100vh - 300px);
  color: #9aa1b9;

  & > p {
    margin-bottom: 1.5rem;
  }
`;

export const Accordion = styled.div``;

export const AccordionCard = styled.div`
  margin-bottom: 0.5rem;
  border: 1px solid #36404a;
  position: relative;
  dispay: flex;
  flex-direction: column;
  min-width: 0;
  background-color: #262e35;
  background-clip: border-box;
  border-radius: 0.25rem;
`;

export const AccordionCardHeader = styled.div`
  color: #bcc9de;
  border-radius: 0.25rem 0.25rem 0 0;
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: #36404a;
  border-bottom: 1px solid #36404a;
`;

export const AccordionCardBody = styled.div`
  flex: 1 1 auto;
  min-height: 2px;
  padding: 1.25rem;
`;

export const AboutItem = styled.div`
  margin-top: 1.5rem;

  & > p {
    color: #9aa1b9;
    margin-bottom: 0.25rem;
  }

  & > h5 {
    font-size: 14px;
    font-weight: 600;
    color: #e1e9f1;
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }
`;

export const UserStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #9aa1b9;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .user-status {
    bottom: 0;
    right: 0;
    position: relative;
    margin-right: 0.534rem;
  }
`;
