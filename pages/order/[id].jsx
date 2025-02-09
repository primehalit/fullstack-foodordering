import React from 'react';
import Image from "next/image";
import axios from "axios";

const SingleOrder = ({ order }) => {
    const { status } = order;

    const statusClass = (index) => {
        if (status === index) return "animate-pulse";
        return "";
    };

    return (
        <div className="overflow-auto">
            <div className="min-h-[calc(100vh_-_433px)] flex justify-center items-center flex-col p-10 min-w-[1000px]">
                <div className="flex items-center flex-1 w-full max-h-28">
                    <table className="w-full text-sm text-center text-gray-500">
                        <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                            <tr>
                                <th scope="col" className="py-3 px-6">Sipariş ID</th>
                                <th scope="col" className="py-3 px-6"> Müşteri</th>
                                <th scope="col" className="py-3 px-6"> Adres</th>
                                <th scope="col" className="py-3 px-6">Tutar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="transition-all bg-blue-700 border-gray-700
                            hover:bg-primary">
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white
                                flex items-center gap-x-1 justifiy-center">{order?._id.substring(0, 5)}...</td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">{order?.customer}</td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">{order?.address}</td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">TL{order?.total}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between w-full p-10 bg-primary mt-6">
                    <div className={`relative flex flex-col ${statusClass()}`}>
                        <Image
                            src="/images/paid.png"
                            alt=""
                            width={40}
                            height={40}
                            objectFit='contain'
                        />
                        <span>Ödeme</span>
                    </div>
                    <div className={`relative flex flex-col ${statusClass(0)}`}>
                        <Image
                            src="/images/bake.png"
                            alt=""
                            width={40}
                            height={40}
                            objectFit='contain'
                        />
                        <span>Hazırlanıyor...</span>
                    </div>
                    <div className={`relative flex flex-col ${statusClass(1)}`}>
                        <Image
                            src="/images/bike.png"
                            alt=""
                            width={40}
                            height={40}
                            objectFit='contain'
                        />
                        <span>Yolda</span>
                    </div>
                    <div className={`relative flex flex-col ${statusClass(2)}`}>
                        <Image
                            src="/images/delivered.png"
                            alt=""
                            width={40}
                            height={40}
                            objectFit='contain'
                        />
                        <span>Teslim Edildi...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async ({ params }) => {
    try {
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/orders/${params.id}`
        );
        const order = res.data ? res.data : null;
        return {
            props: {
                order,
            },
        };
    } catch (error) {
        console.error("Error fetching order:", error.message);
        return {
            props: {
                order: null,
            },
        };
    }
};

export default SingleOrder;
