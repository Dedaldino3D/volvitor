import Chat from "../components/Chat";
import ChatList from "../components/ChatList";
import Profile from "../components/Profile";
import Groups from "../components/Groups";
import Settings from "../components/Settings";

export const routes = [
  {
    path: "/:userId/profile",
    main: () => <Profile />,
    second: () => <Chat />,
  },
  {
    path: "/:userId/settings",
    main: () => <Settings />,
    second: () => <Chat />,
  },
  {
    path: "/:userId/groups",
    main: () => <Groups />,
    second: () => <Chat />,
  },
  {
    path: "/:userId",
    main: () => <ChatList />,
    second: () => <Chat />,
  },
];
