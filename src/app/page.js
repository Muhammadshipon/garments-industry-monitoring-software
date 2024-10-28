'use client'
import HeaderCards from "./components/dashboard/HeaderCards";
import InventorySummaryCard from "./components/dashboard/cards/InventorySummaryCard";
import ProductErrorCard from "./components/dashboard/cards/ProductErrorCard";
import ProductErrorChart from "./components/charts/ProductErrorChart";
import DeliveryAreaChart from "./components/charts/DeliveryChart";
import WarehouseProgressChart from "./components/charts/WarehouseChart";
import dynamic from 'next/dynamic';
import StackSummaryGauge from "./components/charts/StackSummaryCart";

const ProductSummaryPieChart = dynamic(() => import('./components/charts/ProductSummary'), { ssr: false });



export default function Home() {
  const totalStack = 100;
  const soldStack = 45;
  const remainingStack = 30;

  return (
    <div className="px-10">
       <h1 className="text-2xl font-bold text-center py-5">Dashboard</h1>
      <HeaderCards/>

   {/* inventory summary and product error cards  */}
     <div className="flex flex-col items-center lg:flex-row gap-10 my-10 justify-center text-center">
     <InventorySummaryCard/>
   <ProductErrorCard/>
     </div>

     {/* product error , delivery and warehouse charts  */}
   <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
   <div className=' w-[350px] lg:w-[300px] h-[300px] bg-white p-10 rounded-2xl'>
   <ProductErrorChart height={'250px'}/>
   </div>
     <div className=' w-[350px] h-[300px] bg-white p-5 rounded-2xl'>
   <DeliveryAreaChart height={250}/>
   </div>
     <div className=' w-[350px] h-[300px] bg-white p-10 rounded-2xl'>
   <WarehouseProgressChart />
   </div>
    </div>  
    
            {/* product summary and stack chart  */}
      <div className="flex gap-10 flex-col lg:flex-row justify-between items-center my-20">
      <div className='  bg-white w-[320px] lg:w-[460px]  rounded-2xl'>
   <ProductSummaryPieChart />
   </div>
   
   <div className="text-center p-10  w-[320px] lg:w-[460px]  bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">Product Stack Summary</h2>
        <StackSummaryGauge 
          totalStack={totalStack} 
          soldStack={soldStack} 
          remainingStack={remainingStack} 
        />
        <p className="mt-3 text-gray-600">Overview of Product Stock</p>
      </div>
    
        </div>      
    </div>
  );
}
