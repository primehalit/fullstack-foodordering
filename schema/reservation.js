import * as Yup from "yup";

export const reservationSchema = Yup.object({
    fullName: Yup.string()
    .required("Tam Adınız Gerekli.")
    .min(3, "Tam ad en az 3 karakter olmalıdır."),
    phoneNumber: Yup.string()
    .required("Tam Telefon Numaranızı Giriniz.")
    .min(10, "Telefon numarası en az 10 karakter olmalıdır."),
    email: Yup.string().required("Email gereklidir.").email("E-posta geçersiz."),
    persons: Yup.string().required("Kişiler gereklidir."),
    date: Yup.string().required("Tarih gerekli."),
});


/* Yup, JavaScript'te yaygın olarak kullanılan bir 
doğrulama kütüphanesidir ve özellikle form doğrulamaları
 için popülerdir. 
 
 
 
 
 Yup.string(): Alanın bir dize olması gerektiğini belirtir.

required(): Alanın boş olmaması gerektiğini belirtir.*/