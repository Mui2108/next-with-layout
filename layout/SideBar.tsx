import { Layout, Menu } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { menus } from "./nav";

interface Props {
  collapsed: boolean;
}
const SideBar = ({ collapsed }: Props) => {
  const router = useRouter();

  return (
    <Layout.Sider collapsed={collapsed} collapsedWidth={65} width={250}>
      <Menu className="sider-custom" mode="inline">
        {menus.map((item, idx) => {
          if (item.type === "ITEM") {
            return (
              <Menu.Item
                icon={item.icon}
                key={idx}
                onClick={() => router.push({ pathname: item.path })}
              >
                {item.name}
              </Menu.Item>
            );
          } else {
            return (
              <Menu.SubMenu key={idx} icon={item.icon} title={item.name}>
                <Menu.ItemGroup>
                  {item.sub?.map((record, i) => (
                    <Menu.Item
                      key={`${record.name}${i}`}
                      onClick={() => router.push(record.path)}
                    >
                      {record.name}
                    </Menu.Item>
                  ))}
                </Menu.ItemGroup>
              </Menu.SubMenu>
            );
          }
        })}
      </Menu>
    </Layout.Sider>
  );
};

export default SideBar;
