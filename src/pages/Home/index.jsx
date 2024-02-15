import { Button, Card, Col, Row, Statistic, Typography } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import React from "react";

const { Paragraph } = Typography;

function Home() {
  return (
    <div>
      <Paragraph>Ecommers Page</Paragraph>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card bordered={true}>
            <Statistic
              title="Active Users"
              value={112893}
              precision={2}
              valueStyle={{
                color: "#3f8600",
              }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card bordered={true}>
            <Statistic
              title="Account Balance (CNY)"
              value={112893}
              precision={2}
              valueStyle={{
                color: "#3f8600",
              }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card bordered={true}>
            <Statistic
              title="Account Balance (CNY)"
              value={112893}
              precision={2}
              valueStyle={{
                color: "#3f8600",
              }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card bordered={true}>
            <Statistic
              title="Account Balance (CNY)"
              value={112893}
              precision={2}
              valueStyle={{
                color: "#3f8600",
              }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card bordered={true}>
            <Statistic
              title="Account Balance (CNY)"
              value={112893}
              precision={2}
              valueStyle={{
                color: "#3f8600",
              }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
      <Paragraph>
        This page will display widgets, analytics, a map and some graphs.
      </Paragraph>
      <Button type="default">Primary</Button>
      <Button type="primary">Primary</Button>
      <Button type="text">Primary</Button>
      <Button type="dashed">Primary</Button>
    </div>
  );
}

export default Home;
