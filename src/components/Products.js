import React from "react";
import { useQuery } from "react-query";
import UserCard from "./Card";

export default function Products() {
  const fetchUsers = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };

  const { data, status } = useQuery("users", fetchUsers);

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>Erro</h1>;

  return (
    <div className="products">
      {data.map((user, index) => {
        return <UserCard key={index} user={user} />;
      })}
    </div>
  );
}
