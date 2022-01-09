import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Socials from "../components/Socials";

const Home: NextPage = () => {
  return (
    <div className="">
      <Header pageName="Home" />
      <div
        className="bg-gray-900 w-100 h-screen
        flex flex-col justify-center items-center
        text-white font-mono"
      >
        <h1 className="font-bold text-4xl">Adam Zanon</h1>
        <Socials></Socials>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
