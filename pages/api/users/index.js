import User from "../../../models/User";
import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
    await dbConnect();
    const { method } = req;
8
    if (method === "GET") {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            console.log(err);
        }
    }

    if (method === "POST") {
        try {
            const newUser =  await User.create(req.body);
            res.status(200).json(newUser);
        } catch (err) {
            console.log(err);
        }
    }
};

export default handler;










/* const handler = async (req, res) => { ... };: 
Bu satır, bir API rotası için bir işlev tanımlar. 
Bu işlev, HTTP isteği (req) ve HTTP yanıtı (res) parametrelerini alır ve bir asenkron işlev olarak işaretlenir (async). 
İsteği işlemek için kullanılır ve sonunda bir yanıt döndürür. */