import { LogoutOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";
import CSS from "csstype";

interface Props {
  onClick?: () => void;
  collapsed: boolean;
}
const Headers = ({ onClick, collapsed }: Props) => {
  const headerActive: CSS.Properties = {
    position: "fixed",
    zIndex: 2,
    width: "calc(100vw - 250px)",
    left: "250px",
    transition: "all 0.2s",
  };

  const header: CSS.Properties = {
    position: "fixed",
    zIndex: 2,
    width: "calc(100vw - 65px)",
    left: "65px",
    transition: "all 0.2s",
  };

  return (
    <div className="header-layout" style={collapsed ? header : headerActive}>
      <div className="title">
        <Row gutter={12} align="middle">
          <Col>
            <MenuFoldOutlined onClick={() => onClick && onClick()} />
          </Col>
          <Col>
            <h1 style={{ margin: 0, color: "white" }}>Store</h1>
          </Col>
        </Row>
      </div>

      <div className="empoyee">
        <Row gutter={12}>
          <Col>
            <h1>Panupong Intaring</h1>
          </Col>
          <Col>
            <Button icon={<LogoutOutlined />} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Headers;
