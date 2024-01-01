import React from "react";
import ProductCategoryRow from "./ProCateRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products, filterText, inStockOnly }) {
  let lastCategory = null;

  const filteredProducts = products.filter((product) => (
      product.name.toLowerCase().includes(filterText.toLowerCase()) &&
      (!inStockOnly || (inStockOnly && product.stocked))
    ));

  const rows = filteredProducts.map((product) => {
    const elements = [];

    if (product.category !== lastCategory) {
      elements.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }

    elements.push(
      <ProductRow
        product={product}
        key={product.name}
      />
    );

    lastCategory = product.category;

    return elements;
  });

  return (
    <div>
    <table >
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
    </div>
  );
}
