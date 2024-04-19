export default function ButtonGreen({ text, margin, onClick }) {
  return (
    <a
      href="#_"
      className={`w-full py-2 m-${margin} text-xl text-center text-white transition-colors duration-300 bg-green-400 rounded-md hover:bg-green-500 ease px-6 no-underline md:w-auto`}
      onClick={onClick}
    >
      {text}
    </a>
  );
}
