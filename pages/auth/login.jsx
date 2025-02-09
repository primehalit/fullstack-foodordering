import { useFormik } from "formik";
import Link from "next/link";
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { loginSchema } from "../../schema/login";
import { FaEye } from "react-icons/fa";

import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import axios from "axios";
import { useEffect, useState } from "react";

const Login = () => {
  const { data: session } = useSession();


  const { push } = useRouter();
  const [currentUser, setCurrentUser] = useState();


  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (values, actions) => {
    const { email, password } = values;
    let options = { redirect: false, email, password };
    try {
      const res = await signIn("credentials", options);
      actions.resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
        setCurrentUser(
          res.data?.find((user) => user.email === session?.user?.email)
        );
        session && push("/profile/" + currentUser?._id);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [session, push, currentUser]);


  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "E-posta adresiniz",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 2,
      name: "password",
      type: showPassword ? "text" : "password",
      placeholder: "Şifreniz",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];
  
  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6">Giriş</Title>
        <div className="flex flex-col gap-y-2 w-full">
          {inputs.map((input) => (
            <div className="relative" key={input.id}>
              <Input
                {...input}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {input.name === 'password' && (
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-2 -mt-6"
                  onClick={togglePasswordVisibility}
                >
                  <FaEye />
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between w-full mt-3">
          <button className="btn-primary">Giriş</button>
          <button 
          className="btn-primary !bg-secondary"
          type="button"
          onClick={() => signIn("github")}
          >
            <i className="fa fa-github mr-2 text-lg"></i>
            GITHUB
          </button> 
        </div>
        <div className="flex flex-col w-full gap-y-3 mt-6">
          <Link href="/auth/register">
            <span className="text-sm underline cursor-pointer text-red-800">
              Hesabınız yok mu?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};


export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  const user = res.data?.find((user) => user.email === session?.user.email);
  if (session && user) {
    return {
      redirect: {
        destination: "/profile/" + user._id,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default Login;