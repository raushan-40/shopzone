export const fetchProducts = async () => {
  const response = await fetch('https://dummyjson.com/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  return data.products;
};

export const fetchProductById = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product details');
  }
  const data = await response.json();
  return data;
};