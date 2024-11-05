import React from 'react';
import Heading from '../components/Heading';

const Dashboard = () => {
    return (
        <div>
        <Heading 
    title='Dashboard' 
    subtitle={`Explore the latest gadgets that will take your experience to the next level.\nFrom smart devices to the coolest accessories, we have it all!`}
>
    <div>
        <button className='w-[170px] h-[52px] border rounded-[32px]  border-white text-white  mr-4 mt-6'>Card</button>
        <button className='w-[170px] h-[52px] border  text-white rounded-[32px]'>WishList</button>
    </div>
</Heading>

          
        </div>
    );
};

export default Dashboard;