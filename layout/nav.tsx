import { ReactNode } from "react";
import { FastForwardOutlined, MedicineBoxOutlined } from "@ant-design/icons";

export interface IMenus {
  name: string;
  type?: "ITEM" | "SUB_ITEM";
  path: string;
  icon?: ReactNode;
  sub?: IMenus[];
}

export const menus: IMenus[] = [
  {
    name: "สินค้า",
    type: "ITEM",
    path: "/",
    icon: <MedicineBoxOutlined />,
  },
  {
    name: "สินค้า1",
    type: "ITEM",
    path: "/facebook",
    icon: <MedicineBoxOutlined />,
  },
  {
    name: "สินค้า2",
    type: "SUB_ITEM",
    path: "/home",
    icon: <MedicineBoxOutlined />,
    sub: [
      { name: "sub สอนค้า", path: "/4555", icon: <FastForwardOutlined /> },
      { name: "sub สอนค้า", path: "/4555", icon: <FastForwardOutlined /> },
      { name: "sub สอนค้า", path: "/4555", icon: <FastForwardOutlined /> },
      { name: "sub สอนค้า", path: "/4555", icon: <FastForwardOutlined /> },
    ],
  },
];
