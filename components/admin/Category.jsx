import Input from "../form/Input";
import Title from "../ui/Title";
import { Toast } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


const Category = () => {
  const [inputText, setInputText] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/categories`
        );
        setCategories(res?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);

  const handleCreate = async (e) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`,
        { title: inputText }
      );
      setCategories([...categories, res.data]);
      setInputText("");
      toast.success(`${res.data.title} Kategorilere Eklendi`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      if (confirm("Bu kategoriyi silmek istediğinizden emin misiniz?")) {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`

        );
        setCategories(categories.filter((cat) => cat._id !== id));
        toast.success(`kategori başarıyla silindi.`);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="lg:p- flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Kategori</Title>
      <div className="mt-5">
        <div className="flex gap-4 flex--1 items-center">
          <Input
            placeholder="Yeni Kategoriler ekleyin..."
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
          <button className="btn-primary" onClick={handleCreate}>
            Ekle
          </button>
        </div>
        <div className="mt-10  max-h-[250px] overflow-auto pb-4">
          {categories.map((category) => (
            <div className="flex justify-between mt-4" key={category._id}>
              <b className="text-xl">{category.title}</b>
              <button
                className="btn-primary !bg-danger"
                onClick={(e) => handleDelete(e, category._id)}
              >
                Sil
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
