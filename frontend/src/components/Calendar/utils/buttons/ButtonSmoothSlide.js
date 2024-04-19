export default function ButtonSmoothSlide({text, symbol, margin, onClick}) {
  return (
  //   <a
  //   href="#_"
  //   className={`relative inline-flex  items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-md shadow-md group m-${margin}`}
  //   onClick={onClick}
  // >
  //   <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
  //     {symbol}
  //   </span>
  //   <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
  //     {text}
  //   </span>
  //   <span className="relative invisible">{text}</span>
  // </a>
    <a
    href="#_"
    className={`relative inline-flex bg-[#2cbe82] items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-purple-500 rounded-md shadow-md group m-${margin}`}
    onClick={onClick}
  >
    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
      {symbol}
    </span>
    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
      {text}
    </span>
    <span className="relative invisible">{text}</span>
  </a>
  

  );
}
