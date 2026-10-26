import { useState, useEffect } from "react";
import axios from "axios";
import UserProfile from "./UserProfile";
import UserPosts from "./Posts";

const UserPage = ({ userId }) => {

  return (
    <div className="user-profile">
     <UserProfile  userId = {userId}/>
     <UserPosts userId = {userId}/>
    </div>
  );
};

export default UserProfile;