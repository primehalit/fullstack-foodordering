import * as Yup from "yup";

export const profileSchema = Yup.object({
    fullName: Yup.string()
    .required("Tam Adınız Gerekli.")
    .min(3, "Tam ad en az 3 karakter olmalıdır."),
    phoneNumber: Yup.string()
    .required("Tam Telefon Numaranızı Giriniz.")
    .min(10, "Telefon numarası en az 10 karakter olmalıdır."),
    email: Yup.string().required("Email gereklidir.").email("E-posta geçersiz."),
    address: Yup.string().required("Adres gerekli."),
    job: Yup.string().required("İş gerekli."),
    bio: Yup.string().required("Biyografi gerekli."),
});