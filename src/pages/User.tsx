import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setUser } from "../features/user/userSlice";

function User() {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.user.name);
  const changeName = () => {
    dispatch(setUser("Durian"));
  };
  return (
    <div>
      <p>User {name}</p>
      <button
        onClick={() => {
          changeName();
        }}
      >
        Change name
      </button>
    </div>
  );
}

export default User;
