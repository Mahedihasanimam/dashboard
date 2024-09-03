'use client'

import Image from 'next/image';
import React from 'react';
import photo from "../../../../public/images/mehedi.png"
import Search from 'antd/es/input/Search';
import { useGetConversationQuery } from '@/app/redux/features/postApi';

const ChatSidebar = () => {
    const { data, error, isLoading}=useGetConversationQuery()
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading conversations.</div>;

    data?.data?.map(item=>console.log(item._id))
    return (
        <div className='max-w-7xl min-w-[500px] bg-[#333434] p-4 space-y-3 rounded-md h-[850px] overflow-x-auto custom-scrollbar'>

            <div>
        <Search size='large'  placeholder='search to chat'/>
            </div>


            {
                data?.data?.map(item=> <div className='flex items-start justify-start gap-4 bg-[#003944] p-4 rounded-md w-full cursor-pointer  '>
                    <div className='border-4 border-[#92A2AE]    rounded-full'>
                        <Image width={60} height={100}  src={item.participants.profile_image}/>
                    </div>
                    <div className='w-full text-[#F4F5F7]'>
                        <div className='flex items-center justify-between w-full'>
                        <h3 className='text-lg'>{item.participants.name}</h3>
                        <p className='text-xs text-[#C3C4C6]'>3.00PM</p>
                        </div>
                        <p className='text-xs'>Hello..Doc?</p>
                    </div>
                </div>)
            }
           
        
        
            
       
           
        </div>
    );
};

export default ChatSidebar;