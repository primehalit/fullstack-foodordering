import * as Yup from "yup";

export const adminSchema = Yup.object({
  username: Yup.string()
    .required("Kullanıcı adı gerekli.")
    .min(3, "Kullanıcı adı en az 3 karakterden oluşmalıdır."),
  password: Yup.string()
    .required("Şifre Gereklidir.")
    .min(5, "Şifre en az 5 karakter olmalıdır.")
});