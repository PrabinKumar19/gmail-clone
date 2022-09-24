import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import {
  Apps,
  ArrowDropDown,
  Notifications,
  Search,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectedUser } from "./features/userSlice";
import "./Header.css";
import { auth } from "./Firebase";

function Header() {
  const user = useSelector(selectedUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://s3.us-east-2.amazonaws.com/zuzuwebsiteimages/images/background/gmail-card.png"
          alt=""
        />
      </div>
      <div className="header__middile">
        <Search />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDown className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar src={user?.photoUrl} onClick={signOut}></Avatar>
      </div>
    </div>
  );
}

export default Header;
