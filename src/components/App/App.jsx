import Player from "../Player/Player";
import UserMenu from "../UserMenu/UserMenu";

import "./App.css";

export default function App() {
  return (
    <>
      <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
      <UserMenu />
    </>
  );
}
