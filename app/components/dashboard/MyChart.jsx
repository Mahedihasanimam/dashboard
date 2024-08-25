import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, defs, linearGradient, stop } from 'recharts';

const data = [
  {
    month: 'Jan',
    uv: 2400,
    pv: 2400,
    amt: 2400,
  },
  {
    month: 'Feb',
    uv: 1500,
    pv: 1398,
    amt: 2210,
  },
  {
    month: 'March',
    uv: 2500,
    pv: 1398,
    amt: 2210,
  },
  {
    month: 'April',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    month: 'May',
    uv: 2480,
    pv: 3908,
    amt: 2000,
  },
  {
    month: 'June',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    month: 'July',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    month: 'August',
    uv: 1490,
    pv: 4300,
    amt: 2100,
  },

];

const MyChart = () => {
  return (
    <div className='lg:w-1/2 w-full bg-[#404141] rounded-md'>
      <div className='lg:flex md:flex items-center justify-between'>
        <h3 className='text-2xl font-bold p-8'>User Overview</h3>
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
          <AreaChart
          className='px-4'
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00D6FF" stopOpacity={90}/>
                <stop offset="95%" stopColor="#00D6FF" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <XAxis dataKey={'month'} />
            <YAxis />
           
            <Tooltip />
            <Area type="monotone" dataKey="uv"  fill="url(#colorUv)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MyChart;
