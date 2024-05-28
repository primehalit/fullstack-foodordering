import { useEffect, useState } from "react";
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { useFormik } from "formik";
import { footerSchema } from "../../schema/footer";
import axios from "axios";
import { toast } from "react-toastify";

const Footer = () => {
  const [iconName, setIconName] = useState("fa fa-");
  const [linkAddress, setLinkAddress] = useState("https://");
  const [footerData, setFooterData] = useState({});
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);

  useEffect(() => {
    const getFooterData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/footer`
        );
        setFooterData(res.data[0]);
        if (res.data[0]?.socialMedia) {
          setSocialMediaLinks(res.data[0].socialMedia);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getFooterData();
  }, []);

  const onSubmit = async (values, actions) => {
    try {
      let res;
      if (footerData) {
        res = await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/footer/${footerData._id}`,
          {
            location: values.location,
            email: values.email,
            phoneNumber: values.phoneNumber,
            desc: values.desc,
            openingHours: {
              day: values.day,
              hour: values.time,
            },
            socialMedia: socialMediaLinks,
          }
        );
        if (res.status === 200) {
          toast.success("Altbilgi başarıyla güncellendi");
        }
      } else {
        res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/footer`,
          {
            location: values.location,
            email: values.email,
            phoneNumber: values.phoneNumber,
            desc: values.desc,
            openingHours: {
              day: values.day,
              hour: values.time,
            },
            socialMedia: socialMediaLinks,
          }
        );
        if (res.status === 201) {
          toast.success("Altbilgi başarıyla oluşturuldu");
        }
      }
      // Sayfayı yenile
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        location: footerData?.location,
        email: footerData?.email,
        phoneNumber: footerData?.phoneNumber,
        desc: footerData?.desc,
        day: footerData?.openingHours?.day,
        time: footerData?.openingHours?.hour,
      },
      onSubmit,
      validationSchema: footerSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "location",
      type: "text",
      placeholder: "Konumunuz",
      value: values.location,
      errorMessage: errors.location,
      touched: touched.location,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "E-mail",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "number",
      placeholder: "Telefon Numaranız",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 4,
      name: "desc",
      type: "text",
      placeholder: "Site Hakkında Açıklamanız",
      value: values.desc,
      errorMessage: errors.desc,
      touched: touched.desc,
    },
    {
      id: 5,
      name: "day",
      type: "text",
      placeholder: "Çalışma Günleriniz",
      value: values.day,
      errorMessage: errors.day,
      touched: touched.day,
    },
    {
      id: 6,
      name: "time",
      type: "text",
      placeholder: "Çalışma Saatleri",
      value: values.time,
      errorMessage: errors.time,
      touched: touched.time,
    },
  ];

  const handleCreate = () => {
    const socialMediaColors = {
      facebook: "#3b5998",
      instagram: "#bc2a8d",
      twitter: "#1da1f2",
      linkedin: "#0077b5",
    };

    const newLink = {
      icon: iconName,
      link: linkAddress,
      color: socialMediaColors[iconName] || "#000000",
    };

    const existingLinkIndex = socialMediaLinks.findIndex(
      (link) => link.icon === iconName
    );
    if (existingLinkIndex !== -1) {
      const updatedLinks = [...socialMediaLinks];
      updatedLinks[existingLinkIndex] = newLink;
      setSocialMediaLinks(updatedLinks);
    } else {
      setSocialMediaLinks([...socialMediaLinks, newLink]);
    }

    setLinkAddress("https://");
    setIconName("fa fa-");
  };

  const handleDelete = async (index) => {
    const updatedLinks = [...socialMediaLinks];
    updatedLinks.splice(index, 1);
    setSocialMediaLinks(updatedLinks);
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/footer/${footerData._id}`,
        {
          socialMedia: updatedLinks,
        }
      );
      if (res.status === 200) {
        toast.success("Sosyal medya bağlantısı başarıyla silindi");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="lg:p-8 flex-1 lg:mt-0 mt-5" onSubmit={handleSubmit}>
      <Title addClass="text-[40px]">Footer Ayarları</Title>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-between md:items-center md:flex-row flex-col gap-4">
        <div className="flex items-center gap-4">
          <Input
            placeholder="Link Addresi"
            onChange={(e) => setLinkAddress(e.target.value)}
            value={linkAddress}
          />
          <Input
            placeholder="Ikon Ismi"
            onChange={(e) => setIconName(e.target.value)}
            value={iconName}
          />
          <button className="btn-primary" type="button" onClick={handleCreate}>
            Ekle
          </button>
        </div>
        <ul className="flex items-center gap-6">
          {socialMediaLinks?.map((item, index) => (
            <li key={index} className="flex items-center">
                            <i
                className={`${item.icon} text-2xl`}
                style={{ color: item.color }}
              ></i>
              <button
                className="text-danger"
                onClick={() => handleDelete(index)} // Silme işlemi burada gerçekleşecek
                type="button"
              >
                <i className="fa fa-trash text-xl ml-2"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button className="btn-primary mt-4" type="submit">
        Güncelle
      </button>
    </form>
  );
};

export default Footer;




