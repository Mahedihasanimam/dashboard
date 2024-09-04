"use client";

import React from "react";
import { Layout } from "antd";
import { PoundCircleOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import MyChart from "../MyChart";
import IncomeOverview from "../IncomeOverview";
import PurchasePackage from "../PurchesPackage";

const { Content } = Layout;

const DashboardContent = () => {
  return (
    <Content className="bg-[#404141] p-4">
      <div
        className="bg-black "
        style={{
          minHeight: 360,
          color: "white",
          padding: 20,
          borderRadius: "8px",
        }}
      >
        <div className="grid gap-4 grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 lg:space-y-0 md:space-y-4 space-y-6 my-6">
          <div className="bg-[#404141] text-white w-full mx-auto flex items-start justify-start gap-6 px-6 py-12 rounded-lg">
            <UsergroupAddOutlined
              style={{ fontSize: 50 }}
              className="bg-[#a3a4a4] p-2 rounded-full"
            />
            <div>
              <h3 className="font-bold text-gray-400">Total User</h3>
              <h1 className="text-4xl font-bold text-[#FBA51A]">15000</h1>
            </div>
          </div>
          <div className="bg-[#404141] text-white w-full mx-auto flex items-start justify-start gap-6 px-6 py-12 rounded-lg">
            <PoundCircleOutlined
              style={{ fontSize: 50 }}
              className="bg-[#a3a4a4] p-2 rounded-full"
            />
            <div>
              <h3 className="font-bold text-gray-400">Total Earning</h3>
              <h1 className="text-4xl font-bold text-[#FBA51A]">$5000</h1>
            </div>
          </div>
        </div>

        {/* Chart and Income Overview */}
        <div className="lg:flex md:flex flex-row items-center justify-between gap-6">
          <MyChart />
          <IncomeOverview />
        </div>
      </div>
      <PurchasePackage/>
    </Content>
  );
};

export default DashboardContent;
