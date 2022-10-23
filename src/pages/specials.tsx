import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FaAppStoreIos } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import { IconType } from "react-icons";
import Divider from "../components/Divider";

interface DailySpecialProps {
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  foodItems: string[];
}

const DailySpecial = (props: DailySpecialProps) => {
  return (
    <div className="md:text-left text-center">
      <h2 className="md:text-4xl text-lg font-bold text-red-600 font-custom">
        {props.day}
      </h2>
      <hr />
      <ul>
        {props.foodItems.map((foodItem, index) => {
          return (
            <li key={index} className="md:text-xl">
              {foodItem}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const SpecialsInfo = () => {
  return (
    <div className="text-center md:text-left flex flex-row">
      <div className="flex-1">
        <h2 className="md:text-5xl text-xl font-bold">Daily Specials</h2>
        <br />
        <i>Includes Rice, Soup, Salad, and Bottle Water</i>
      </div>
      <div className="text-right">
        <span className="text-lg font-bold">September 5th - September 9th</span>
        <br />
        <span>$12/Plate</span>
      </div>
    </div>
  );
};

const Specials: NextPage = () => {
  return (
    <>
      <Head>
        <title>Herman's Modern Bakery | Lunch Specials</title>
      </Head>

      <div className="container mx-auto">
        <div className="flex items-baseline">
          <h1 className="flex-grow md:text-5xl lg:text-7xl text-2xl font-bold text-red-600 font-custom uppercase">
            Tan Marikita Café
          </h1>
          <div className="flex flex-col lg:flex-row text-white font-bold text-sm md:text-xl text-right whitespace-nowrap">
            <span>Monday - Friday, </span>
            <span>11:00am - 2:00pm</span>
          </div>
        </div>
      </div>

      <section className="flex flex-col container mx-auto bg-stone-100 p-12 min-h-screen">
        <SpecialsInfo />

        <Divider />

        <div className="flex-1 grid gap-4 lg:grid-cols-5 grid-cols-2 rounded-2xl">
          <DailySpecial
            day="Monday"
            foodItems={[
              "Fried Chicken",
              "Papaya Salad",
              "Minestrone Soup",
              "Egg Drop Soup",
            ]}
          />
          <DailySpecial
            day="Tuesday"
            foodItems={[
              "Pork Pot Roast",
              "Chicken Adobo",
              "Cucumber Salad",
              "",
              "",
            ]}
          />
          <DailySpecial
            day="Wednesday"
            foodItems={[
              "Italian SausageRigatoni",
              "Turkey Pot Pie",
              "Ceasar's Salad",
              "Cream of Mushroom Soup",
            ]}
          />
          <DailySpecial
            day="Thursday"
            foodItems={[
              "Beef w/ Onions",
              "Lechon Kawali",
              "Napa Kimichi Salad",
              "Egg Drop Soup",
            ]}
          />
          <DailySpecial
            day="Friday"
            foodItems={[
              "Red Rice",
              "Baked Ham",
              "BBQ Chicken Teriyaki",
              "Macaroni Salad",
              "Charakilis Soup",
            ]}
          />
        </div>

        <Divider />

        <div className="text-center">
          <h3 className="md:text-3xl text-xl font-bold text-stone-700">
            Want your food delivered to you?
          </h3>
          <p className="max-w-xl mx-auto">
            We&apos;ve partnered with Conqure The Hunger for you to have a
            seamless way of ordering food and having it delivered straight to
            your door step!
          </p>

          <a
            href="https://eatseasy.conquerthehunger.com"
            target="_blank"
            rel="noreferrer"
            className="href"
          >
            <img
              src="https://conquerthehunger.com/wp-content/uploads/2021/01/logo.png"
              width={300}
              height={300}
              alt="EatsEasy, Food Delivery Service"
              className="mx-auto mt-10"
            />
          </a>
          <div
            className="mx-auto p-4 flex items-center justify-center gap-2"
            id="delivery"
          >
            <AppStoreLink
              href={"https://apps.apple.com/us/app/eatseasy/id1540000000"}
              store="apple"
            />
            <AppStoreLink
              href={"https://apps.apple.com/us/app/eatseasy/id1540000000"}
              store="google"
            />
          </div>
        </div>
      </section>
    </>
  );
};

type AppStoreLinkProps = {
  href: string;
  store: "apple" | "google";
};
const AppStoreLink = ({ href, store }: AppStoreLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center text-xl bg-red-600 p-1 rounded-md text-white"
    >
      {store === "apple" ? (
        <>
          <FaAppStoreIos size={30} className="mr-2" /> App Store
        </>
      ) : (
        <>
          <AiFillAndroid size={30} className="mr-2" /> Play Store
        </>
      )}
    </a>
  );
};

export default Specials;
