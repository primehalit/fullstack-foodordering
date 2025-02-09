import React from 'react'
import Title from '../ui/Title'

import axios from "axios";
import { useEffect, useState } from "react";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const status = ["Hazırlanıyor...","yolda...", "teslim edilmiş."];
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/orders`
        );
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, []);
  const handleStatus = async (id) => {
    const item = orders.find((order) => order._id === id);
    const currentStatus = item.status;
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`,
        {
          status: currentStatus + 1,
        }
      );
      setOrders([res.data, ...orders.filter((order) => order._id !== id)]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Ürünler</Title>
      <div className="overflow-x-auto w-full mt-5">
      <table className="w-full text-sm text-center text-gray-500 xl:min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                ÜRÜN ID
              </th>
              <th scope="col" className="py-3 px-6">
                MÜŞTERI
              </th>
              <th scope="col" className="py-3 px-6">
                TUTAR
              </th>
              <th scope="col" className="py-3 px-6">
                ÖDEME
              </th>
              <th scope="col" className="py-3 px-6">
                DURUM
              </th>
              <th scope="col" className="py-3 px-6">
                ...
              </th>
            </tr>
          </thead>
          <tbody>
          {orders.length > 0 &&
              orders
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((order) => (
                  <tr
                    className="transition-all bg-secondary border-gray-700 hover:bg-primary"
                    key={order?._id}
                  >
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white gap-x-1 ">
                      {order?._id.substring(0, 6)}...
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                      {order?.customer}
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                      $ {order?.total}
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                      {order?.method === 0 ? "Peşin" : "Banka Kartı"}
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                      {status[order?.status]}
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                      <button
                        className="btn-primary !bg-success"
                        onClick={() => handleStatus(order?._id)}
                        disabled={order?.status > 1}
                      >
                        Sonraki aşama
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;