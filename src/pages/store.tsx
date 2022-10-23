import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ShopifyClient } from "../util/shopify";

interface StoreProps {
  products: ShopifyBuy.Product[];
  store: ShopifyBuy.Shop;
}

interface ProductProps {
  product: ShopifyBuy.Product;
}

interface ProductsProps {
  products: ShopifyBuy.Product[];
}

const Store: NextPage = () => {
  return (
    <>
      <Head>
        <title>Herman's Modern Bakery | Store</title>
      </Head>

      <section className="container mx-auto p-4">
        <Products />
      </section>
    </>
  );
};

export const Products = () => {
  const [products, setProducts] = useState<ShopifyBuy.Product[]>([]);

  useEffect(() => {
    console.log("useEffect()");
    async function fetchProducts(): Promise<ShopifyBuy.Product[]> {
      console.log("fetchProducts()");

      // Fetch products from the store
      const allProducts: ShopifyBuy.Product[] =
        await ShopifyClient.product.fetchAll();
      const availableProducts: ShopifyBuy.Product[] = allProducts.filter(
        (currProduct: ShopifyBuy.Product) => currProduct.availableForSale
      );

      setProducts(JSON.parse(JSON.stringify(availableProducts)));

      return availableProducts;
    }

    fetchProducts();
  }, [products]);

  if (products.length <= 0) {
    return <p>No products found</p>;
  }

  return (
    <div className="grid  grid-cols-1 md:grid-cols-3 xl:grid-cols-4  gap-2">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export const Product = ({ product }: ProductProps) => {
  return (
    <article className="bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-row">
        <h2 className="text-xl font-semibold flex-grow">{product.title}</h2>
        <span className="">${product.variants[0].price}</span>
      </div>

      <p>{product.description || "No description."}</p>
      <div className="block h-[300px] relative rounded-full">
        <Image
          src={product.images[0].src}
          alt={product.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </article>
  );
};

/**
 * Next.js will pre-render this page on each request using the data returned by this function.
 * @param context
 * @returns
 */
// export const getServerSideProps = async (context: any) => {
//   // Fetch products from the store
//   const products: ShopifyBuy.Product[] = await ShopifyClient.product.fetchAll();
//   const availableProducts: ShopifyBuy.Product[] = products.filter(
//     (product: ShopifyBuy.Product) => product.availableForSale
//   );
//   // Fetch shop info from the store
//   const infos: ShopifyBuy.Shop = await ShopifyClient.shop.fetchInfo();

//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   return {
//     props: {
//       products: JSON.parse(JSON.stringify(availableProducts)),
//       infos: JSON.parse(JSON.stringify(infos)),
//     },
//   };
// };

export default Store;
