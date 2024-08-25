"use client";

import React from "react";

import logo from "../../public/images/image.png";
import profile from "../../public/images/Ellipse 86.png";

import {
  BellOutlined,
  CalendarOutlined,
  ClusterOutlined,
  ContactsOutlined,
  FileDoneOutlined,
  HomeOutlined,
  LoginOutlined,
  MessageOutlined,
  NotificationFilled,
  PoundCircleOutlined,
  CommentOutlined,
  BarChartOutlined,
 
  UploadOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {
  Badge,
  ConfigProvider,
  Flex,

  Input,
  Layout,
  Menu,
  Space,
  theme,
} from "antd";
import { Progress } from "antd";
import Search from "antd/es/transfer/search";

// import Acvity from "@/components/Acvity";
import Link from "next/link";
import MyChart from "../components/dashboard/MyChart";
import PiChart from "../components/dashboard/PiChart";
import Image from "next/image";
import IncomeOverview from "../components/dashboard/IncomeOverview";
import PurchesPackage from "../components/dashboard/PurchesPackage";
const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const Dashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div >
      <Layout
        className="h-full bg-[#404141]"
      >
        <Sider
        style={{background:'#404141'}}
          breakpoint="lg"
          collapsedWidth="0"
         className="mx-4"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />

          <div className="ml-8 my-12 cursor-pointer">
          <Image style={{width:100}}  src={logo}/>
          </div>
          <Menu
           style={{background:'#404141'}}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            className=" mt-8 text-lg space-y-8    capitalize mymenu "
            items={[
             
              {
                label: "dashboard",
                icon: <BarChartOutlined style={{fontSize:'30px'}} />,
                key: "/dashboard",
              },
              {
                label: "User Details",
                icon: <UserAddOutlined style={{fontSize:'30px'}}/>,
                key: "/userdetails",
              },
              {
                label: "Schedul Record",
                icon: <FileDoneOutlined style={{fontSize:'30px'}} />,
                key: "/schedulrec",
              },
              {
                label: "Addprogram",
                icon: <ContactsOutlined style={{fontSize:'30px'}} />,
                key: "/addprogram",
              },
              {
                label: "Trasining Arctis",
                icon: <ClusterOutlined style={{fontSize:'30px'}} />,
                key: "/trasining Arctis",
            },
              
              {
                label: "message",
                icon: <CommentOutlined  style={{fontSize:'30px'}} />,
                key: "/message",
              },
              {
                label: "makeAdmin",
                icon: <UserAddOutlined style={{fontSize:'30px'}} />,
                key: "/makeadmin",
              },
              {
                label: "Log out",
                icon: <LoginOutlined style={{fontSize:'30px'}} />,
                key: "/logout",
              },
            ]}
          />
        </Sider>
        <Layout>
          <div className="bg-[#404141]">
            <Header className="py-4 bg-[#404141]">
              <Flex justify="space-between" align="center">
                <Input
                
                  style={{
                   
                    color: "white",
                    "--placeholder-color": "white",
                    visibility:'hidden'
                  }}
                  placeholder="search"
                  size="large"
                  className="border border-gray-500   placeholder:text-white max-w-sm"
                  

                />

                <Space>
                  <Flex
                    justify="space-between"
                    align="center"
                    className="px-4 "
                    gap={20}
                  >
                    <Badge size="small" className=""  count={1}>
                      <BellOutlined className="cursor-pointer bg-gray-400 p-3 rounded-full " style={{ color: "white", fontSize: 25 }} />
                    </Badge>
                    <Space>
                    <Image className="border rounded-full cursor-pointer" height={45}  src={profile}/>
                        <p className="text-xl font-bold text-white pl-2">Admin Camille</p>
                    </Space>
                  </Flex>
                </Space>
              </Flex>
            </Header>
          </div>
          <Content
            className="bg-[#404141] "
          >
            <div
           className="bg-black mt-2   "
              style={{
                
                minHeight: 360,
                color: "white",
                padding: 20,
                borderRadius: borderRadiusLG,
              }}
            >

              <div className="grid gap-4 grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 lg:space-y-0 md:space-y-4 space-y-6 my-6  ">
                <div className="bg-[#404141] text-white  w-full mx-auto  flex items-start justify-start gap-6 px-6 py-12 rounded-lg ">
                  <div>
                    <UsergroupAddOutlined
                      style={{ fontSize: 50 }}
                      className="bg-[#a3a4a4] p-2 rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className=" font-bold text-gray-400">Total User</h3>
                    <h1 className="text-4xl font-bold text-[#FBA51A]">1500</h1>
                    
                  </div>
                </div>
                <div className="bg-[#404141] text-white  w-full mx-auto  flex items-start justify-start gap-6 px-6 py-12 rounded-lg ">
                  <div>
                    <PoundCircleOutlined 
                      style={{ fontSize: 50 }}
                      className="bg-[#a3a4a4] p-2 rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className=" font-bold text-gray-400 ">Total Earning</h3>
                    <h1 className="text-4xl font-bold text-[#FBA51A]">$50000</h1>
                    
                  </div>
                </div>
               </div>

              

              <div className="lg:flex md:flex flex-row items-center justify-between gap-6 ">
                <MyChart />
                
                <IncomeOverview/>
                
              </div>
            </div>
          </Content>
         <PurchesPackage/>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
