import { useContext } from "react";
import { UserContext } from "../App";
function Header() {
  const UserContext1 = useContext(UserContext);
  return (
    <>
      <h1>{UserContext1.lang}</h1>
    </>
  );
}
export default Header;
