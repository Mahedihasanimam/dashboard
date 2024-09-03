"use client";

import React from "react";
import { Layout, Input, Badge, Space } from "antd";
import { BellOutlined } from "@ant-design/icons";
import Image from "next/image";
import profile from "../../../../public/images/Ellipse 86.png";
import { Flex } from "antd";

const { Header } = Layout;

const DashboardHeader = () => {
  return (
    <Header className="py-4 mb-4 bg-[#404141]">
      <Flex justify="space-between" align="center">
        <Input
          style={{
            color: "white",
            "--placeholder-color": "white",
            visibility: "hidden",
          }}
          placeholder="search"
          size="large"
          className="border border-gray-500 placeholder:text-white max-w-sm"
        />
        <Space>
          <Flex
            justify="space-between"
            align="center"
            className="px-4"
            gap={20}
          >
            <Badge size="small" count={1}>
              <BellOutlined
                className="cursor-pointer bg-gray-400 p-3 rounded-full"
                style={{ color: "white", fontSize: 25 }}
              />
            </Badge>
            <Space>
              <Image
                className="border rounded-full cursor-pointer"
                src={profile}
                alt="Profile"
              />
              <p className="text-xl font-bold text-white pl-2">Admin Camille</p>
            </Space>
          </Flex>
        </Space>
      </Flex>
    </Header>
  );
};

export default DashboardHeader;
