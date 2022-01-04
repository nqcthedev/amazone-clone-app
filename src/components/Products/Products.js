import ProductItem from "./ProductItem";
import React from "react";
import bikini from "../../assets/images/bannerfamily.jpg";

function Products({ products }) {
  return (
    <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products
        ?.slice(0, 4)
        .map(({ id, title, description, price, category, image }) => (
          <ProductItem
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
      <img className="md:col-span-full" src={bikini} alt="" />

      <div className="md:col-span-2">
        {products
          ?.slice(4, 5)
          .map(({ id, title, description, price, category, image }) => (
            <ProductItem
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
      {products
        ?.slice(5)
        .map(({ id, title, description, price, category, image }) => (
          <ProductItem
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
      {products
        ?.slice(14, 17)
        .map(({ id, title, description, price, category, image }) => (
          <ProductItem
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
    </div>
  );
}

export default Products;
