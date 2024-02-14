import { Avatar } from "antd";
import React from "react";

function ProfileThumbnail({ size }) {
  return (
    <div>
      <Avatar size={size}>{"M D"}</Avatar>
    </div>
  );
}

export default ProfileThumbnail;
