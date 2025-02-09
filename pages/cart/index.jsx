import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";

import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../redux/cartSlice";

import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";


const Cart = ({ userList }) => {
  const { data: session } = useSession();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const user = userList?.find((user) => user.email === session?.user?.email);
  const router = useRouter();

  const newOrder = {
    customer: user?.fullName,
    address: user?.address ? user?.address : "Address yok",
    total: cart.total,
    method: 0,
  };

  const createOrder = async () => {
    try {
      if (session) {
        if (confirm("Sipariş vereceğinden emin misin?")) {
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/orders`,
            newOrder
          );

          if (res.status === 201) {
            router.push(`/order/${res.data._id}`);
            dispatch(reset());
            toast.success("Sipariş Oluşturuldu.",{
              autoClose: 1000,
            });
          }
        }
      } else {
        toast.error("Lütfen ilk önce giriş yapın.",{
          autoClose:1000,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" min-h-[calc(100vh_-_433px)]">
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="md:min-h-[calc(100vh_-_433px)] flex items-center flex-1 p-10 overflow-x-auto w-full">
        <div className="max-h-52 overflow-auto w-full">
            {cart?.products?.length > 0 ? (
              <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
                <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      ÜRÜN
                    </th>
                    <th scope="col" className="py-3 px-6">
                      EKSTRALAR
                    </th>
                    <th scope="col" className="py-3 px-6">
                      TUTAR
                    </th>
                    <th scope="col" className="py-3 px-6">
                      MİKTAR
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.products.map((product, index) => (
                    <tr
                      className="transition-all bg-secondary border-gray-700 hover:bg-primary"
                      key={index}
                    >
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                        <Image
                          src={product?.img}
                          alt=""
                          width={50}
                          height={50}
                        />
                        <span>{product.name}</span>
                      </td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                        {product.extras?.length > 0
                          ? product.extras.map((item) => (
                              <span key={item.id}>{item.text}, </span>
                            ))
                          : "Boş"}
                      </td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                        TL {product.price}
                      </td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                        {product.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center font-semibold">Hiç Ürün Yok..</p>
            )}
          </div>
        </div>
        <div
          className="bg-secondary min-h-[calc(100vh_-_433px)] flex
            flex-col justify-center text-white p-12 md:w-auto w-full md:text-start !text-center"
        >
          <Title addClass="text-[40px]">Sepette Toplam</Title>
          <div className="mt-6">
            <b>Ara toplam: </b>{cart.total} TL <br />
            <b className="inline-block my-1">Indirim: </b>0.00TL <br />
            <b>Tutar: </b>{cart.total} TL
          </div>
          <button 
          className="btn-primary mt-4 md:w-auto w-52"
          onClick={createOrder}
          >
            Onayla
            
            </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async() => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);

  return {
    props: {
      userList: res.data ? res.data : [],
    },
  };
};

export default Cart;
