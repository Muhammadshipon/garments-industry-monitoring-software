import Image from 'next/image';
import React from 'react';

const HeaderCards = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-5 justify-center items-center'>
                    {/*No. of Brand  */}
      <div className='flex gap-2 bg-white hover:bg-orange-200 p-5 w-[200px] rounded-2xl'>
        <Image src={'/Images/premium_11679019.png'} width={40} height={40} alt='logo'/>
        <div className='text-center'>
          <p className='text-sm text-gray-400'>No. of Brand</p>
          <h3 className='text-xl font-bold'>955</h3>
        </div>
      </div>
                        {/*Total Warehouse  */}
      <div className='flex gap-2 bg-white hover:bg-orange-200 p-5 w-[200px] rounded-2xl'>
        <Image src={'/Images/warehouse_8970484.png'} width={40} height={40} alt='logo'/>
        <div className='text-center'>
          <p className='text-sm text-gray-400'>Total Warehouse</p>
          <h3 className='text-xl font-bold'>322</h3>
        </div>
      </div>
                          {/* No. of Category */}
      <div className='flex gap-2 bg-white hover:bg-orange-200 p-5 w-[200px] rounded-2xl'>
        <Image src={'/Images/app.png'} width={40} height={40} alt='logo'/>
        <div className='text-center'>
          <p className='text-sm text-gray-400'>No. of Category</p>
          <h3 className='text-xl font-bold'>702</h3>
        </div>
      </div>
                            {/* Total Delivery */}
      <div className='flex gap-2 bg-white hover:bg-orange-200 p-5 w-[200px] rounded-2xl'>
        <Image src={'/Images/fast-delivery.png'} width={45} height={45} alt='logo'/>
        <div className='text-center'>
          <p className='text-sm text-gray-400'>Total Delivery</p>
          <h3 className='text-xl font-bold'>5893</h3>
        </div>
      </div>
    </div>
  );
};

export default HeaderCards;