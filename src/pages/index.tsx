import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Herman's Modern Bakery | Home</title>
      </Head>

      <section className="header-section flex justify-center min-h-[800px]">
        <div className="w-full bg-gradient-to-b from-[rgba(0,0,0,0.6)] via-[rgba(0,0,0,0.2)] to-transparent pt-[6rem] md:pt-[9rem]">
          <div className="container mx-auto flex font-custom text-6xl md:text-8xl uppercase text-white font-bold ">
            Saipan's First and Finest
          </div>
        </div>
      </section>
      <section className="container mx-auto flex justify-center bg-stone-500 min-h-[500px] mt-[50px]">
        <p>
          4PVJ+453, 500002 Tun Herman Pan Rd., Dan Dan, Saipan 96950, Northern
          Mariana Islands
        </p>
      </section>
      <section className="container mx-auto flex justify-center bg-white min-h-[500px]">
        <p>
          4PVJ+453, 500002 Tun Herman Pan Rd., Dan Dan, Saipan 96950, Northern
          Mariana Islands
        </p>
      </section>
      <section className="container mx-auto flex justify-center bg-white min-h-[500px]">
        <p>
          4PVJ+453, 500002 Tun Herman Pan Rd., Dan Dan, Saipan 96950, Northern
          Mariana Islands
        </p>
      </section>
    </>
  );
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
    </section>
  );
};

export default Home;
