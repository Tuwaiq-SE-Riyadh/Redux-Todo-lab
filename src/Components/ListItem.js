import { useState } from "react";
function ListItem({ id, title }) {
  return (
    <>
      <p>ID: {id}</p>
      <p>Title: {title}</p>
    </>
  );
}
export default ListItem;
