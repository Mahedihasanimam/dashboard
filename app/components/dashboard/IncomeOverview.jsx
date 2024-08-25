import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, CartesianAxis } from 'recharts';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'july', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'aug', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'sept', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'oct', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'nove', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Dec', uv: 2780, pv: 3908, amt: 2000 },
  
];

const IncomeOverview = () => {
  return (
    <div className='lg:w-1/2 w-full bg-[#404141] rounded-md'>
      <div className='lg:flex md:flex items-center justify-between'>
        <h3 className='text-2xl font-bold p-8'>Income Overview</h3>

        <div className='flex items-center justify-center gap-6 flex-wrap px-4'>
          <p className='text-sm'>Monthly Growth</p>
          <p className='text-[#00A2C1]'>35.80%</p>

          <select className='bg-transparent border rounded-md p-1'>
            <option className='bg-[#00A2C1] text-white'>2024</option>
            <option className='bg-[#00A2C1] text-white'>2023</option>
            <option className='bg-[#00A2C1] text-white'>2022</option>
          </select>
        </div>
      </div>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="uv" radius={[10,10,0,0]} barSize={15}  fill="#DD1122" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IncomeOverview;
