import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Layout from "../components/Layout";
import { CartProvider } from "../context/CartContext";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// let stripePromise = getStripe();

// Created outside of the component to avoid it being recreated every time the component renders.

fetchProducts();

const MyApp: AppType = ({ Component, pageProps }) => {
  const options = {
    clientSecret: process.env.NEXT_PUBLIC_STRIPE_CLIENT_KEY,
  };

  return (
    // <Elements stripe={stripePromise} options={options}>
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
    // </Elements>
  );
};

// function getStripe() {
// 	if (!stripePromise) {
// 		stripePromise = loadStripe(
// 			process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
// 		);
// 	}

// 	return stripePromise;
// }

async function fetchProducts() {
  // const stripe = Stripe(
  //   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
  // );
  // console.log("fetching products");
  // const products = await stripePromise. .products.list({
  //   limit: 3,
  // });
}

export default MyApp;
