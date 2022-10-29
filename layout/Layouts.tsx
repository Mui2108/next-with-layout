import React, { ReactNode, useState } from "react";
import Contents from "./Contents";
import SideBar from "./SideBar";
import Headers from "./Headers";
import { Layout } from "antd";
interface Props {
  children?: ReactNode;
}

const Layouts: React.FunctionComponent<Props> = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <SideBar collapsed={collapsed} />
      <Layout>
        <Headers
          onClick={() => setCollapsed(!collapsed)}
          collapsed={collapsed}
        />
        <Contents children={children} collapsed={collapsed} />
      </Layout>
    </Layout>
  );
};

export default Layouts;
