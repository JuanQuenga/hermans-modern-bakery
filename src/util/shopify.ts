import Client from 'shopify-buy';

export const ShopifyClient = Client.buildClient({
	storefrontAccessToken: process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN as string,
	domain: process.env.SHOPIFY_STORE_DOMAIN as string,
});

