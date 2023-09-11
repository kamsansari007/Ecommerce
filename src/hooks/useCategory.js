import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategory() {
  const [categories, setCategories] = useState([]);
  // get categories
  const getCategories = async () => {
    try {
      const { data } = await axios.get("https://mern-backend-bu3c.onrender.com/api/v1/category/all-categories");
      setCategories(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return categories;
}
