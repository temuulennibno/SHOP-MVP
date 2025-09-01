const ProductDetailPage = async ({ params }) => {
  const { id } = await params;
  const response = await fetch("https://dummyjson.com/products/" + id);
  const data = await response.json();

  return <>Hi {data.title}</>;
};

export default ProductDetailPage;
