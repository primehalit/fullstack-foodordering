import axios from "axios";

import { useState } from "react";
import { useFormik } from "formik";
import Link from "next/link";
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { registerSchema } from "../../schema/register";
import { FaEye } from "react-icons/fa";

import { toast } from "react-toastify";
import { useRouter } from "next/router";


const Register = () => {
  const { push } = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
        values
      );
      if (res.status === 200) {
        toast.success("Kullanıcı başarıyla oluşturuldu")
        push("/auth/login");
      }
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: registerSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Tam Adınız",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "E-Posta Adresiniz",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
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
    {
      id: 4,
      name: "confirmPassword",
      type: showConfirmPassword ? "text" : "password",
      placeholder: "Şifrenizi Tekrar Girin",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
      icon: (
        <button
          type="button"
          className="flex items-center justify-center h-full w-8"
          onClick={toggleConfirmPasswordVisibility}
        >
          <FaEye />
        </button>
      ),
    },
  ];

  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6">KAYIT OLMAK</Title>
        <div className="flex flex-col gap-y-3 w-full">
          {inputs.map((input) => (
            <div className="relative" key={input.id}>
              <Input {...input} onChange={handleChange} onBlur={handleBlur} />
              {input.icon && (
                <div className="absolute inset-y-0 right-0 flex items-center px-2">
                  {input.icon}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full gap-y-3 mt-6">
          <button className="btn-primary" type="submit">
            KAYıT OL
          </button>
          <Link href="/auth/login">
            <span className="text-sm underline cursor-pointer text-red-800">
              Hesabın var mı?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
