import { useEffect, useState } from "react";
import Title from "../ui/Title";
import { useSession } from "next-auth/react";
import axios from "axios";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const { data: session } = useSession();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
        const user = res.data.find((user) => user.email === session.user.email);
        setCurrentUser(user);
      } catch (err) {
        console.log(err);
      }
    };
    if(session) getUsers();
  }, [session]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        if (!currentUser) return; // currentUser null ise işlem yapma
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/orders`
        );
        const userOrders = res.data.filter((order) => order.customer === currentUser.fullName);
        setOrders(userOrders.reverse()); // Yeni olan siparişler en başta gösterilsin
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, [currentUser]); // currentUser değiştiğinde getOrders çağır

  const getStatusText = (status) => {
    switch (status) {
      case 0:
        return "Sipariş Hazırlanıyor";
      case 1:
        return "Yolda";
      case 2:
        return "Sipariş Teslim Edildi";
      default:
        return "Durum Bulunamadı";
    }
  };

  const currentDate = new Date(); // Güncel tarih ve saat bilgisini alır

  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Siparişlerim</Title>
      <div className="overflow-x-auto w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 xl:min-w-[1000px] min-w100%">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                ADRES
              </th>
              <th scope="col" className="py-3 px-6">
                TARIH
              </th>
              <th scope="col" className="py-3 px-6">
                TUTAR
              </th>
              <th scope="col" className="py-3 px-6">
                DURUM
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary " key={order?._id}>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                  <span>{order?._id}</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {order?.address}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {currentDate.toLocaleDateString()}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {order?.total}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {getStatusText(order?.status)}
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



