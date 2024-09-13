import React from "react";
import { useSingleProduct } from "../hooks";
import { useParams } from "react-router";
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer";
import { Spinner } from "@chakra-ui/react";

export const Item = () => {
  const { id } = useParams();
  const { product, loading } = useSingleProduct({ id });
  return loading ? (
    <Spinner></Spinner>
  ) : (
    <ItemDetailContainer product={product}></ItemDetailContainer>
  );
};
