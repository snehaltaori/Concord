export default function ButtonBlue ({text, margin, onClick}) {
    return (
<a
  href="#_"
  className={`inline-flex m-${margin} overflow-hidden no-underline text-white text-sm bg-gray-800 rounded-md group transition duration-300 ease-out `}
  onClick={onClick}
>
  <span className="px-3 py-1.5 text-white bg-green-500 group-hover:bg-green-600 flex items-center justify-center transition duration-300 ease-out">
    +
  </span>
  <span className="pl-3 pr-5 py-1.5">{text}</span>
</a>
    );
  }
  