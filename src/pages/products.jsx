import CardProduct from "../components/Fragments/CardProduct";


const ProductPage = () => {
  const products = [
    {
        id: 1,
        name: "Sepatu baru",
        image: "/images/shoes.jpg",
        description: "Lorem IPSUnbrgrg",
        price: "101003934",
    }
  ]
  return (
    <div className="flex justify-center">
    {products.map((product) => (
         <CardProduct>
         <CardProduct.Header images={product.image}/>
         <CardProduct.Body name={product.name}>
            {product.description}
         </CardProduct.Body>
         <CardProduct.Footer price={product.price}/>
      </CardProduct>
))}
    </div>
      
  );
};



export default ProductPage;
