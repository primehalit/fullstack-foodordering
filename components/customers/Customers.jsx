// components/customers/Customers.jsx

import React from "react";
import Title from "../ui/Title";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CustomerItem from "./CustomerItem";

const Customers = () => {
  const customersData = [
    {
      name: "Mahzuni Şerif",
      quote: "Yiğit Muhtaç Olmuş Kuru Soğana...",
      imgSrc: "/images/Mahzuni.jpeg", // Örnek resim yolunu belirtin
    },
    {
      name: "Isim...",
      quote: "Yorum...",
      imgSrc: "/images/", // Örnek resim yolunu belirtin
    },
    {
      name: "Isim...",
      quote: "Yorum...",
      imgSrc: "/images/", // Örnek resim yolunu belirtin
    },
    {
      name: "Isim...",
      quote: "Yorum...",
      imgSrc: "/images/", // Örnek resim yolunu belirtin
    },
    {
      name: "Isim...",
      quote: "Yorum...",
      imgSrc: "/images/", // Örnek resim yolunu belirtin
    },
    // Diğer müşterilerin bilgileri buraya eklenebilir
  ];

  function NextBtn({ onClick }) {
    return (
      <button className="absolute bg-blue-500" onClick={onClick}>
        <IoIosArrowForward />
      </button>
    );
  }

  function PrevBtn({ onClick }) {
    return (
      <button className="absolute bg-primary" onClick={onClick}>
        <IoIosArrowBack />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mb-20 mt-20">
      <Title addClass="text-[40px] text-center">
        Müşterilerimizin Görüşleri
      </Title>
      <Slider {...settings}>
        {customersData.map((customer, index) => (
          <CustomerItem key={index} customer={customer} />
        ))}
      </Slider>
    </div>
  );
};

export default Customers;
