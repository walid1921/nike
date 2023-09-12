
const Button = ({ label, iconUrl, backgroundColor, borderColor, textColor }) => {
  return (
    <div className='center-center'>

      <button className={`center-center text-md font-semibold border tracking-wide text-md rounded-full py-2 px-6 cursor-pointer transition-all ease-in duration-150 hover:opacity-75 gap-3 w-full
      ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-gradient-to-br from-[#0a2540] to-blue-800 border-[#0a2540] text-white'}
      `}>

        <p>{label}</p>
        {iconUrl && <div>{iconUrl}</div>}

      </button>



    </div>
  );
};

export default Button;