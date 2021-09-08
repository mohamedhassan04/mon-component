import "./App.css";
import { ProfilePhoto } from "./Component/Profile/ProfilePhoto";
import { FullName } from "./Component/Profile/FullName";
import { Adress } from "./Component/Profile/Address";

function App() {
  return (
    <div className="profile">
      <h1> !! Welcome to my profile !! </h1>
      <ProfilePhoto />
      <FullName />
      <Adress />
    </div>
  );
}

export default App;
