import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { IoCart } from "react-icons/io5";
import { ShopifyClient } from "../util/shopify";

interface StoreProps {
  products: ShopifyBuy.Product[];
  infos: ShopifyBuy.Shop;
}

interface ProductProps {
  product: ShopifyBuy.Product;
}

interface ProductsProps {
  products: ShopifyBuy.Product[];
}

const Store: NextPage = ({ products }: StoreProps) => {
  return (
    <>
      <Head>
        <title>Herman's Modern Bakery | Store</title>
      </Head>
      <section className="container mx-auto p-4">
        <Products products={products} />
      </section>
    </>
  );
};

export const Products = ({ products }: ProductsProps) => {
  return (
    <div className="font-custom uppercase">
      <div className="flex flex-row pt-4">
        <h1 className="text-4xl flex-grow">Bread</h1>
        <h2 className="place-self-end">
          <a href="" className="hover:text-red-600 text-lg transition-all">
            View All{" "}
          </a>
        </h2>
      </div>
      <hr className="border-red-600 mb-2 border-[1px]" />
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
      <h1 className="text-4xl pt-4">Bread</h1>
      <hr className="border-red-600 mb-2 border-[1px]" />
      <div className="grid  grid-cols-1 md:grid-cols-3 xl:grid-cols-4  gap-2">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
      <h1 className="text-4xl pt-4">Bread</h1>
      <hr className="border-red-600 mb-2 border-[1px]" />
      <div className="grid  grid-cols-1 md:grid-cols-3 xl:grid-cols-4  gap-2">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export const Product = ({ product }: ProductProps) => {
  return (
    <article className="rounded-sm shadow-md font-custom uppercase">
      <div className="h-[300px] relative transition-all ease-in-out hover:cursor-pointer hover:h-[305px]">
        <Image
          src={product.images[0].src}
          alt={product.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-2 bg-white text-black">
        <div className="flex flex-row mb-2">
          <h2 className="text-xl font-thin flex-grow">{product.title}</h2>
          <span className="">${product.variants[0].price}</span>
        </div>
        <div className="p-4 bg-red-600 text-white text-center flex justify-center gap-2 transition-all  ease-in-out hover:-translate-y-1 hover:cursor-pointer">
          Add To Cart
          <div className="text-xl pt-[2px]">
            <IoCart />
          </div>
        </div>
      </div>
    </article>
  );
};

/**
 * Next.js will pre-render this page on each request using the data returned by this function.
 * @param context
 * @returns
 */
export const getServerSideProps = async (context: any) => {
  // Fetch products from the store
  const products: ShopifyBuy.Product[] = await ShopifyClient.product.fetchAll();
  const availableProducts: ShopifyBuy.Product[] = products.filter(
    (product: ShopifyBuy.Product) => product.availableForSale
  );
  // Fetch shop info from the store
  const infos: ShopifyBuy.Shop = await ShopifyClient.shop.fetchInfo();

  return {
    props: {
      products: JSON.parse(JSON.stringify(availableProducts)),
      infos: JSON.parse(JSON.stringify(infos)),
    },
  };
};

export default Store;
