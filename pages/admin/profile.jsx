import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Order from "../../components/admin/Order";
import Products from "../../components/admin/Products";
import Category from "../../components/admin/Category";
import Footer from "@/components/admin/Footer";
import Modal from "../../components/Modal"; // Modal bileşeni
import AddProduct from "../../components/admin/AddProduct";

import { toast } from "react-toastify";

const Profile = () => {
  const [tabs, setTabs] = useState(0);
  const { push } = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [isProductModal, setIsProductModal] = useState(false);


  const handleCloseModal = () => {
    setShowModal(false);
  };

  const closeAdminAccount = async () => {
    // Kullanıcıya onaylama modali göster
    setShowModal(true);
  };

  const handleConfirmClose = async () => {
    try {
      const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin`);
      if (res.status === 200) {
        push("/admin");
        toast.success("Admin Hesabı Kapatıldı!");
      }
    } catch (err) {
      console.log(err);
    }
    handleCloseModal();
  };

  return (
    <div className="flex px-10 min-h-[calc(100vh-_433)] lg:flex-row flex-col lg:mb-0 mb-10">
      <div className="flex lg:w-80 w-100 flex-shrink-0">
        <div className="relative flex flex-col items-center px-10 py-5 border border-b-0">
          <Image 
            src="/images/admin1.jpg"
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />
          <b className="text-2xl mt-1">Admin</b>
        </div>
        <ul className="text-center font-semibold">
          <li
            className={`border border-t-0 w-full p-3 cursor-pointer hover:bg-red-700
            hover:text-white transition-all ${tabs === 0 && "bg-red-950 text-white"}`}
            onClick={() => setTabs(0)}>
              <i className="fa fa-cutlery"></i>
              <button className="ml-1">Ürünler</button>
          </li>
          <li
            className={`border border-t-0 w-full p-3 cursor-pointer hover:bg-red-700 hover:text-white transition-all ${
              tabs === 1 && "bg-red-950 text-white"
            }`}
            onClick={() => setTabs(1)}
          >
            <i className="fa fa-first-order" aria-hidden="true"></i>
            <button className="ml-1">Siparişler</button>
          </li>
          <li
            className={`border border-t-0 w-full p-3 cursor-pointer hover:bg-red-700 hover:text-white transition-all ${
              tabs === 2 && "bg-red-950 text-white"
            }`}
            onClick={() => setTabs(2)}
          >
            <i className="fa fa-ellipsis-h"></i>
            <button className="ml-1">Kategoriler</button>
          </li>
          <li
            className={`border border-t-0 w-full p-3 cursor-pointer hover:bg-red-700 hover:text-white transition-all ${
              tabs === 3 && "bg-red-950 text-white"
            }`}
            onClick={() => setTabs(3)}
          >
            <i className="fa fa-window-maximize"></i>
            <button className="ml-1">Bilgi</button>
          </li>
          <li
            className={`border border-t-0 w-full p-3 cursor-pointer hover:bg-red-700 hover:text-white transition-all ${
              tabs === 4 && "bg-red-950 text-white"
            }`}
            onClick={closeAdminAccount}          
          >
            <i className="fa fa-sign-out"></i>
            <button className="ml-1">Çıkış</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && <Products />}
      {tabs === 1 && <Order />}
      {tabs === 2 && <Category />}
      {tabs === 3 && <Footer />}
      {isProductModal && <AddProduct setIsProductModal = {setIsProductModal} />}
      <button className="btn-primary !w-12 !h-12 !p-0 absolute bottom-14
      right-10 text-4xl"
      onClick={() => setIsProductModal(true)}>+</button>

      {/* Modal */}
      <Modal show={showModal} onClose={handleCloseModal}>
        <div>
          <p>Admin hesabınızı kapatmak istediğinizden emin misiniz?</p>
          <br />
          <button onClick={handleConfirmClose} className="mr-2 bg-blue-700 text-white px-3 py-1 rounded hover:bg-primary">Evet</button>
          <button onClick={handleCloseModal} className="bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-primary">İptal</button>
        </div>
      </Modal>
    </div>
  );
};

export const getServerSideProps = (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  if (myCookie.token !== process.env.ADMIN_TOKEN) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Profile;

