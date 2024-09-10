import React from "react";
import { getCategories } from "../services/products";

export const useCategory = () => {
  const [category, setCategory] = React.useState([]);

  React.useEffect(() => {
    getCategories()
      .then((response) => {
        setCategory(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { category };
};
