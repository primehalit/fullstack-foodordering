import { useState } from 'react';
import { useFormik } from "formik";
import Link from "next/link";
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { adminSchema } from "../../schema/admin";
import { FaEye } from "react-icons/fa";

import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Login = () => {
  const { push } = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin`,
        values
      );
      if (res.status === 200) {
        console.log(res.data);
        actions.resetForm();
        toast.success("Başarılı Admin Girişi");
        push("/admin/profile");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit,
      validationSchema: adminSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Kullanıcı Adınız",
      value: values.username,
      errorMessage: errors.username,
      touched: touched.username,
    },
    {
      id: 2,
      name: "password",
      type: showPassword ? "text" : "password",
      placeholder: "Şifreniz",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
      icon: (
        <button
          type="button"
          className="flex items-center justify-center h-full w-8"
          onClick={togglePasswordVisibility}
        >
          <FaEye />
        </button>
      ),
    },
  ];

  return (
    <div className="container mx-auto py-3">
      <form
        className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6">Admin Girişi</Title>
        <div className="flex flex-col gap-y-3 w-full">
          {inputs.map((input) => (
            <div className="relative" key={input.id}>
              <Input
                {...input}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {input.icon && (
                <div className="absolute inset-y-0 right-0 flex items-center px-2">
                  {input.icon}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full gap-y-3 mt-6">
          <button className="btn-primary">Giriş</button>
          <Link href="/">
            <span className="text-sm underline cursor-pointer text-green-800">
              Anasayfa
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export const getServerSideProps = (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  if (myCookie.token === process.env.ADMIN_TOKEN) {
    return {
      redirect: {
        destination: "/admin/profile",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Login;

