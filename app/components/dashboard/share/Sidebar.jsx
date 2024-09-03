"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout, Menu } from "antd";
import {
  BarChartOutlined,
  UserAddOutlined,
  FileDoneOutlined,
  ContactsOutlined,
  ClusterOutlined,
  CommentOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import logo from "../../../../public/images/image.png";

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider
      style={{ background: "#404141"}}
      breakpoint="lg"
      collapsedWidth="0"
      className=" h-full w-80"
    >
      <div className=" mx-8 cursor-pointer w-80  ">
        <Image  src={logo} alt="Logo" />
      </div>
      <Menu
        style={{ background: "#404141" }}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="mt-8 text-lg space-y-8 capitalize  mymenu "
        items={[
          {
            label: <Link href={"/dashboard"}>dashboard</Link>,
            icon: <BarChartOutlined style={{ fontSize: "30px" }} />,
            key: "/dashboard",
          },
          {
            label: "User Details",
            icon: <UserAddOutlined style={{ fontSize: "30px" }} />,
            key: "/userdetails",
          },
          {
            label: "Schedul Record",
            icon: <FileDoneOutlined style={{ fontSize: "30px" }} />,
            key: "/schedulrec",
          },
          {
            label: "Add Program",
            icon: <ContactsOutlined style={{ fontSize: "30px" }} />,
            key: "/addprogram",
          },
          {
            label: "Training Arctis",
            icon: <ClusterOutlined style={{ fontSize: "30px" }} />,
            key: "/trasining-arctis",
          },
          {
            label: <Link href={"/dashboard/chat"}>Chat</Link>,
            icon: <CommentOutlined style={{ fontSize: "30px" }} />,
            key: "/chat",
          },
          {
            label: "Make Admin",
            icon: <UserAddOutlined style={{ fontSize: "30px" }} />,
            key: "/makeadmin",
          },
          {
            label: "Log out",
            icon: <LoginOutlined style={{ fontSize: "30px" }} />,
            key: "/logout",
          },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
