import { useState } from "react";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const All = [
    { image: "/f1.png", title: "Delicious Pizza", category: "Pizza", prise: "20$" },
    { image: "/f2.png", title: "Delicious Burger", category: "Burger", prise: "15$" },
    { image: "/f3.png", title: "Delicious Pizza", category: "Pizza", prise: "17$" },
    { image: "/f4.png", title: "Delicious Pasta", category: "Pasta", prise: "18$" },
    { image: "/f5.png", title: "French Fries", category: "Fries", prise: "10$" },
    { image: "/f6.png", title: "Delicious Pizza", category: "Pizza", prise: "15$" },
    { image: "/f7.png", title: "Tasty Burger", category: "Burger", prise: "14$" },
    { image: "/f8.png", title: "Tasty Burger", category: "Burger", prise: "20$" },
    { image: "/f9.png", title: "Delicious Pasta", category: "Pasta", prise: "10$" },
  ];

  const filteredItems = activeTab === "All" ? All : All.filter((item) => item.category === activeTab);

  return (
    <div className="container mx-auto px-5 py-14 flex flex-col justify-center items-center gap-6">
      <div>
        <h1 className="text-[26px]">Our Menu</h1>
      </div>
      <div className="flex justify-center items-center gap-3">
        {["All", "Burger", "Pizza", "Pasta", "Fries"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`md:px-6 px-4 py-2 focus:outline-none focus:border-none rounded-full border-[#976821] ${
              activeTab === tab
                ? "bg-[#976821] text-white"
                : "hover:bg-[#976821] hover:text-white text-[#976821]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredItems.map((el, index) => (
          <div key={index} className="flex flex-col font-medium   gap-3 p-4 shadow-md rounded-xl bg-gradient-custom">
            <div className="place-items-center rounded-xl p-12  ">
            <img src={el.image} className=" xl:w-[80%] max-h-[145px] transition-all duration-[0.2s] hover:scale-110 rounded-md relative flex justify-center items-center" />
            </div>
            <div className="  text-[white]   rounded-xl gap-4 flex flex-col">
            <h2 className="text-lg font-bold ">{el.title}</h2>
            <p className="">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque            </p>
            <div className="flex justify-between items-center gap-6 ">
                <span className="text-[18px]">{el.prise}</span>
                <a className="bg-[#ffbe33] rounded-full p-2 cursor-pointer"><PiShoppingCartSimpleFill className="w-5 h-5" /></a>
            </div>
            </div>
          </div>
        ))}
      </div>
      <boutton className='bg-[#ffbe33] px-10 py-2 text-[white] rounded-full text-[20px] mt-6 cursor-pointer'>view More</boutton>
    </div>
  );
};

export default Menu;
