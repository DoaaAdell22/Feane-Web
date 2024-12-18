
const We = () => {
  return (
    <div className="bg-[#21213d]">
        <div className="container mx-auto px-5 py-20 flex flex-col-reverse md:flex-row items-center justify-center sm:gap-6 gap-12">
                <img src='/about-img.png'  className="w-[50%] md:w-80 animate-ani-image   mt-10 sm:mt-0" />
                <div className=" md:w-[50%] w-auto text-[white] flex flex-col gap-6 text-center md:text-start justify-center items-center md:items-start">
                    <h1 className="text-[30px]  font-semibold">We Are Feane</h1>
                    <p className="md:text-[20px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there  anything embarrassing hidden in the middle of text. All </p>
                    <boutton className='bg-[#FEA116] w-fit md:px-10 p-6 py-2 text-[white] rounded-full md:text-[20px] mt-6 cursor-pointer'>Read More</boutton>
                </div>
        </div>
      
    </div>
  )
}

export default We
