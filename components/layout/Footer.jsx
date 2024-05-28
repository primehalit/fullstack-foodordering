import axios from "axios";
import { useEffect, useState } from "react";
import Title from "../ui/Title";

const Footer = () => {
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    const getFooter = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/footer`
        );
        setFooter(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getFooter();
  }, []);

  const getSocialMediaColor = (icon) => {
    switch (icon) {
      case "fa fa-facebook":
        return "bg-blue-700 text-white"; // Facebook için mavi renk
      case "fa fa-instagram":
        return "bg-pink-600 text-white"; // Instagram için pembe renk
      case "fa fa-twitter":
        return "bg-blue-400 text-white"; // Twitter için mavi renk
      case "fa fa-linkedin":
        return "bg-blue-500 text-white"; // LinkedIn için mavi renk
      case "fa fa-youtube":
        return "bg-red-600 text-white"; // YouTube için kırmızı renk
      case "fa fa-pinterest":
        return "bg-red-500 text-white"; // Pinterest için kırmızı renk
      case "fa fa-tiktok":
        return "bg-black text-white"; // TikTok için siyah renk
      case "fa fa-snapchat":
        return "bg-yellow-600 text-white"; // Snapchat için sarı renk
      case "fa fa-whatsapp":
        return "bg-green-600 text-white"; // WhatsApp için yeşil renk
      case "fa fa-telegram":
        return "bg-blue-200 text-white"; // Telegram için açık mavi renk
      case "fa fa-discord":
        return "bg-purple-700 text-white"; // Discord için mor renk
      case "fa fa-medium":
        return "bg-black text-white"; // Medium için siyah renk
      case "fa fa-reddit":
        return "bg-orange-500 text-white"; // Reddit için turuncu renk
      case "fa fa-tumblr":
        return "bg-blue-400 text-white"; // Tumblr için mavi renk
      case "fa fa-vimeo":
        return "bg-blue-600 text-white"; // Vimeo için mavi renk
      case "fa fa-skype":
        return "bg-blue-500 text-white"; // Skype için mavi renk
      // Diğer sosyal medya ikonları için gerekli renkleri ekleyin
      default:
        return "bg-gray-600 text-white"; // Varsayılan olarak gri renk
    }
  };

  return (
    <div className="bg-white text-black">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Bize Ulaşın</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <a href={footer?.location} target="_blank" rel="noreferrer">
                <i className="fa fa-map-marker"></i>
                <span className="inline-block ml-2">Konum</span>
              </a>
              <a href={`tel:${footer?.phoneNumber}`}>
                <i className="fa fa-phone"></i>
                <span className="inline-block ml-2">
                  Ara +90 {footer?.phoneNumber}
                </span>
              </a>
              <a href={`mailto:${footer?.email}`}>
                <i className="fa fa-envelope"></i>
                <span className="inline-block ml-2">{footer?.email}</span>
              </a>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[38px]">mizrakOFF</Title>
            <p className="mt-3">{footer?.desc}</p>
            <div className="flex items-center justify-center mt-5 gap-x-2">
              {footer?.socialMedia?.map((item) => (
                <a
                  href={item?.link}
                  className={`w-8 h-8 grid place-content-center rounded-full ${getSocialMediaColor(
                    item.icon
                  )}`}
                  key={item._id}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Açık Olduğumuz Saatler</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <span className="inline-block ml-2">
                  {footer?.openingHours?.day}
                </span>
              </div>
              <div>
                <span className="inline-block ml-2">
                  {footer?.openingHours?.hour}
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10">
          © Halit MIZRAK Tarafından Geliştirildi.
        </p>
      </div>
    </div>
  );
};

export default Footer;
