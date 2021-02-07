import styled from "styled-components";

import Avatar from "../Avatar";

const SettingsContainer = styled.div`
  height: 100vh;
  background-color: #303841;

  @media (min-width: 992px) {
    margin-right: 0.25rem;
    min-width: 380px;
    max-width: 380px;
  }
`;

const SettingsHeader = styled.div`
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

const SettingsUserHeader = styled.div`
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

const Settings = (props) => {
  return (
    <SettingsContainer>
      <SettingsHeader>
        <h4>Settings</h4>
        <button>More</button>
      </SettingsHeader>
      <SettingsUserHeader>
        <div style={{ marginBottom: "1.5rem" }}>
          <Avatar width={100} />
        </div>
        <h5>Dedaldino Antonio</h5>
        <div>
          <p>Available</p>
        </div>
      </SettingsUserHeader>
    </SettingsContainer>
  );
};

export default Settings;
