import { Typography } from "antd";
import React from "react";
import ProfileThumbnail from "../../components/ProfileThumbnail";

const { Title } = Typography;

function Profile() {
  return (
    <div>
      <Title>Profile</Title>
      <ProfileThumbnail size={80} />
    </div>
  );
}

export default Profile;
