
const Button = ({label, iconUrl}) => {
  return (
    <div className='center-center'>

      <button className='center-center text-white text-md font-semibold border  tracking-wide bg-gradient-to-br from-[#0a2540] to-blue-800 border-[#0a2540]  rounded-full py-2 px-6 cursor-pointer transition-all ease-in duration-150 hover:opacity-75 gap-3'>
   
          <p>{label}</p>
          <div>{iconUrl}</div>
        
      </button>



    </div>
  );
};

export default Button;