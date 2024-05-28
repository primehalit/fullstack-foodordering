// components/customers/CustomersItem.jsx


import React from 'react';
import Image from 'next/image';

const CustomerItem = ({ customer }) => {
    const { name, quote, imgSrc } = customer;
  
    return (
      <div className="mt-5 mx-4">
        <div className="p-6 bg-black text-white">
          <p>{quote}</p>
          <div className="flex flex-col mt-4 rounded-[5px]">
            <span className="text-lg font-semibold">{name}</span>
          </div>
        </div>
        <div className="relative w-28 h-28 border-4 border-purple-600">
          <Image src={imgSrc} alt="" layout="fill" objectFit="contain" className="rounded-full" />
        </div>
      </div>
    );
  };
export default CustomerItem;
