import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Image, Nav } from "react-bootstrap";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <Image className="profile" src={user.picture} roundedCircle />
        <Nav>Hi {user.name}</Nav>
      </div>
    )
  );
};

export default Profile;
