import Chat from "../components/Chat";
import ChatList from "../components/ChatList";
import Profile from "../components/Profile";
import Groups from "../components/Groups";
import Settings from "../components/Settings";

export const routes = [
  {
    path: "/",
    exact: true,
    main: () => <ChatList />,
    second: () => <Chat />,
  },
  {
    path: "/profile",
    main: () => <Profile />,
    second: () => <Chat />,
  },
  {
    path: "/settings",
    main: () => <Settings />,
    second: () => <Chat />,
  },
  {
    path: "/groups",
    main: () => <Groups />,
    second: () => <Chat />,
  },
];

export default routes;
