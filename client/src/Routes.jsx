import RegisterAndLoginForm from "./RegisterandLoginForm.jsx";
import {useContext} from "react";
import {UserContext} from "./UserContext.jsx";
import Chat from "./Chat";

export default function Routes() {
  // eslint-disable-next-line no-unused-vars
  const {username, id} = useContext(UserContext);

  if (username) {
    return <Chat />;
  }

  return (
    <RegisterAndLoginForm />
  );
}