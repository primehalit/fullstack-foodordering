import * as Yup from "yup";

export const registerSchema = Yup.object({
    password: Yup.string()
    .required("Şifre gereklidir.")
    .min(8, "Şifre en az 8 karakter olmalıdır.")
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Şifreniz en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir."
    ),
    confirmPassword: Yup.string()
    .required("Şifreyi onaylamanız gerekiyor.")
    .oneOf([Yup.ref("password"),null], "Şifreler aynı olmalıdır."),
});