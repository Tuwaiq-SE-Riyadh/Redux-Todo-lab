import { useContext } from "react";
import { UserContext } from "../App";
function Body() {
  const UserContext1 = useContext(UserContext);
  return (
    <>
      <img src={UserContext1.img}></img>
    </>
  );
}
export default Body;
