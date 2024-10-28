import Image from 'next/image';
import React from 'react';

const ProductErrorCard = () => {
  return (
    <div className="bg-white p-8 pt-4 rounded-2xl max-w-[400px] text-center ">
    <h3 className="text-xl font-semibold pb-4">Product Error</h3>
   <div className="flex gap-5 ">
    
   <div className='flex flex-col gap-4 bg-gradient-to-r from-blue-50 to-indigo-100 p-6 w-[180px] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 items-center justify-center'>
<Image src={'/Images/risk.png'} width={80} height={80} alt='logo' className='rounded-full bg-indigo-100 p-2'/>

 <p className='text-sm font-medium text-blue-500'>Product Missing</p>
 <h3 className='text-2xl font-extrabold text-indigo-800'>24</h3>

</div>
   <div className='flex flex-col gap-4 bg-gradient-to-r from-red-50 to-red-100 p-6 w-[180px] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
<Image src={'/Images/broken-box.png'} width={80} height={80} alt='logo' className='rounded-full bg-indigo-100 p-2'/>

 <p className='text-sm font-medium text-blue-500'>Product Damage</p>
 <h3 className='text-2xl font-extrabold text-indigo-800'>218</h3>

</div>
   </div>

 </div>
  );
};

export default ProductErrorCard;