import React from "react";
import Input from "./form/Input";
import Title from "./ui/Title";
import { useFormik } from "formik";
import { reservationSchema } from "../schema/reservation";


const Reservation = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        actions.resetForm();
    };
    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            fullName: "",
            phoneNumber: "",
            email: "",
            persons: "",
            date: "",
        },
        onSubmit,
        validationSchema: reservationSchema,       
    });
    //console.log(values); // values'i doğrudan console.log ile yazdır

    const inputs = [
        {
            id: 1,
            name: "fullName",
            type: "text",
            placeholder: "Tam Isminiz",
            value: values.fullName,
            errorMessage: errors.fullName,
            touched: touched.fullName,
        },
        {
            id: 2,
            name: "phoneNumber",
            type: "number",
            placeholder: "Telefon Numaranız",
            value: values.phoneNumber,
            errorMessage: errors.phoneNumber,
            touched: touched.phoneNumber,
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "E-mail Adresiniz",
            value: values.email,
            errorsMessage: errors.email,
            touched: touched.email,

        },
        {
            id: 4,
            name: "persons",
            type: "number",
            placeholder: "Kaç Kişi ?",
            value: values.persons,
            errorMessage: errors.persons,
            touched: touched.persons,
        },
        {
            id: 5,
            name:"date",
            type: "date",
            placeholder:"",
            value: values.date,
            errorMessage: errors.date,
            touched: touched.date,
        },
    ];
  return (
    <div className="container mx-auto py-12">
        <Title addClass="text-[40px] mb-10"> Masa Rezarvasyonu</Title>
        <div className="flex justify-between flex-wrap-reverse gap-10">
            <form className="lg:flex-1 w-full"onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-3" >
                    {inputs.map((input) => (
                        <Input key={input.id} {...input} 
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                    ))}
                </div>
                <button className="btn-primary mt-4" type="submit">Şimdi Rervasyon Yap</button>
            </form>
            <div className="lg:flex-1 w-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6154.0977638089!2d40.525840113290215!3d38.88542082479964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4073cfa156fc612b%3A0x9f9dc2501d366ab3!2sKyk%20M%C3%BCrsel%20Pa%C5%9Fa%20Yurdu!5e0!3m2!1str!2str!4v1711275169863!5m2!1str!2str" 
            allowFullScreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            className="h-full w-full">
            </iframe>
            </div>
        </div>
    </div>
  )
}

export default Reservation





// Asenkron  async await
// Örneğin, bir dosyadan veri okurken veya 
// bir sunucuya istek gönderirken, işlem tamamlanana kadar 
// beklemek gerekebilir. Bu tür durumlar için asenkron işlemler 
// kullanılır.