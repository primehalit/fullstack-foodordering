import * as Yup from "yup";

export const footerSchema = Yup.object({
  location: Yup.string().required("Konum gerekli."),
  phoneNumber: Yup.string()
    .required("Telefon Numarası gereklidir.")
    .min(10, "Telefon numarası en az 10 karakter olmalıdır."),
  email: Yup.string().required("Email gereklidir.").email("E-posta geçersiz."),
  desc: Yup.string().required("Açıklama gerekli."),
  day: Yup.string().required("Gün gereklidir."),
  time: Yup.string().required("Zaman gereklidir."),
});