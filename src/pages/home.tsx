import React, { useEffect, useState } from "react";
import { useTheme } from "../context/themeContext";
import ClothingImage1 from "../assets/clothingImage1.png";
import ClothingImage from "../assets/clothingImage3.png";

const Home: React.FC = () => {
  const { theme } = useTheme();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to fetch products");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // displaying loader
  const renderLoader = () => (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="loader" />
    </div>
  );

  // displaying error message from api call
  const renderError = () => (
    <div className="h-screen w-full flex justify-center items-center">
      <p>{error}</p>
    </div>
  );

  // card for the products
  const renderProductCard = (product: any) => (
    <div
      key={product.id}
      className="card rounded-lg shadow-md overflow-hidden w-64 p-4"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 rounded-md"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-md">${product.price}</p>
      </div>
    </div>
  );

  const renderProductGrid = () => (
    <div className="product-grid">{products.map(renderProductCard)}</div>
  );

  // banner based on theme
  const renderThemeBanner = () => {
    if (theme === "theme1") {
      return (
        <div
          className="w-full bg-cover bg-center md:h-80 flex flex-col items-center justify-center text-white"
          style={{ backgroundImage: `url(${ClothingImage})` }}
        >
          <div className="inset-0 bg-black opacity-40" />
          <h1 className="z-10 text-4xl md:text-5xl font-bold mb-2 text-center drop-shadow-lg">
            MULTI STORE
          </h1>
          <p className="z-10 text-lg md:text-xl text-center">CLOTHING CO.</p>
        </div>
      );
    }

    if (theme === "theme3") {
      return (
        <div
          className="w-full bg-cover bg-center md:h-80 flex flex-col items-center justify-center text-white"
          style={{ backgroundImage: `url(${ClothingImage1})` }}
        >
          <div className="inset-0 bg-black opacity-40" />
          <h1 className="z-10 text-4xl md:text-5xl font-bold mb-2 text-center drop-shadow-lg">
            MULTI STORE
          </h1>
          <p className="z-10 text-lg md:text-xl text-center">
            ELEGANT CITY COUTURE
          </p>
        </div>
      );
    }

    return null;
  };

  const renderTheme2Layout = () => (
    <div className="flex">
      <div className="flex-1 p-6">{renderProductGrid()}</div>
    </div>
  );

  const renderDefaultLayout = () => (
    <div className="p-4">{renderProductGrid()}</div>
  );

  let content;
  if (error) {
    content = renderError();
  } else if (loading) {
    content = renderLoader();
  } else if (theme === "theme2") {
    content = renderTheme2Layout();
  } else {
    content = renderDefaultLayout();
  }

  return (
    <main className={`page ${theme}`}>
      {renderThemeBanner()}
      {content}
    </main>
  );
};

export default Home;
