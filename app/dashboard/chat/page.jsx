'use client';
import ChatComponent from "@/app/components/dashboard/message/ChatComponent";
import { useGetConversationQuery } from "@/app/redux/features/postApi";
import React from "react";

const page = () => {
  const { data, error, isLoading}=useGetConversationQuery()
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading conversations.</div>;

  const getid=data?.data?.map(item=>item._id)
console.log(data?.data?.map(item=>item._id));
  return (
    <div className="w-full ">
      <div className="bg-[#333434]  p-4 rounded-md h-[850px] overflow-x-auto mb-6">
         <ChatComponent id={getid}/>
      </div>
    </div>
  );
};

export default page;
