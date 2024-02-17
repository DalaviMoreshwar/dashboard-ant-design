import { Row, Col, Typography } from "antd";
import React from "react";
import ProfileThumbnail from "../../components/ProfileThumbnail";

const { Title, Text, Paragraph } = Typography;

function Profile() {
  return (
    <div>
      <ProfileThumbnail size={90} />
      <Title level={2}>Moreshwar Dalavi</Title>
      <Paragraph type="secondary">moreshwar@gmail.com</Paragraph>
      <Paragraph type="secondary">+91 394-3049-304</Paragraph>
      <Row>
        <Col xs={24} sm={12} md={12} lg={6}></Col>
        <Col xs={24} sm={12} md={12} lg={6}></Col>
      </Row>

      <div>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quo at
          cumque dolorem tenetur nihil ipsum perferendis id enim magni
          consectetur, quam neque iure obcaecati fugiat? Deserunt sapiente velit
          minus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
          laboriosam ut rerum labore quam beatae ullam nam impedit! Harum
          necessitatibus laborum porro quam?
        </Text>
      </div>
    </div>
  );
}

export default Profile;
