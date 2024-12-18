import { Input , Select } from 'antd';
import { motion } from 'framer-motion';
import MapComponent from './MapComponent';
import { DatePicker } from 'antd';

const Book = () => {
    const onOk = (value) => {
        console.log('onOk: ', value);
      };
    
  return (
    <motion.div
      className="  text-white font-bold text-2xl"
      initial={{ opacity: 0, y: 100 }}      
      whileInView={{ opacity: 1, y: 0 }}   
      transition={{ duration: 1 }}         
      viewport={{ once: true }}        
    >
    <div className=" px-5 py-20  container mx-auto flex flex-col md:flex-row justify-center gap-6 items-center  ">

        <div className='flex flex-col gap-8 w-full justify-center items-center md:items-start'>
        <h1 className='text-[40px] z-10 text-[#FEA116]'>Book A Table </h1>
            <Input placeholder='Your Name'  />
            <Input placeholder='Phone Number'  />
            <Input placeholder='Your Email'  />
            <Select
    showSearch
    placeholder="How many Person"
    optionFilterProp="label"
    style={{width : '100%'}}
    options={[
      {
        value: '2',
        label: '2',
      },
      {
        value: '3',
        label: '3',
      },
      {
        value: '4',
        label: '4',
      },
      {
        value: '5',
        label: '5',
      },
    ]}
  />
    <DatePicker
      showTime
      style={{width : '100%'}}
      onChange={(value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      }}
      onOk={onOk}
    />
    <button  className='  w-fit hover:bg-[#FEA116] lg:px-8 px-6 py-2 lg:text-[18px] text-[16px]  rounded-full border-none bg-[#ffbc2c] text-[white]'>Book Now </button>

        </div>
        <MapComponent />

  </div>


    </motion.div>
    
  )
}

export default Book
