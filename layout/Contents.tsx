import React, { ReactNode } from "react";
import { Layout } from "antd";

interface Props {
  children: ReactNode;
  collapsed: boolean;
}

const Contents = ({ children, collapsed }: Props) => {
  return (
    <Layout.Content
      style={{
        padding: 24,
        marginLeft: collapsed ? 65 : 250,
        marginTop: 65,
        minHeight: "calc(100vh - 65px)",
      }}
    >
      {children}
    </Layout.Content>
  );
};

export default Contents;
