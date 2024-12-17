
const Landing = () => {
  return (
    <div className="px-5 py-14 container mx-auto text-[white] z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 ">
            <div className="flex flex-col gap-5 md:justify-start md:items-start justify-center items-center  md:w-[50%] md:text-start text-center">
                <h1 className="lg:text-[50px] text-[28px] font-extrabold  ">Enjoy Our Delicious Meal</h1>
                <p className="md:text-[20px] text-[16px] max-w-[700px]">Doloremque, itaque aperiam facilis rerum, commodi, temporibus 
                sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore,
                sunt repellat dolore, iste magni quos nihil ducimus libero ipsam. </p>
                <div>
                    <button  className='   hover:bg-[#ffbe33] lg:px-8 px-6 py-2 lg:text-[18px] text-[16px]  rounded-full border-none bg-[#ffbc2c] text-[white]'>Order Online</button>
                </div>
            </div>
            <img src="/hero.png" className=" md:w-[50%] animate-slow-spin"/>
        </div>
    </div>
  )
}

export default Landing
