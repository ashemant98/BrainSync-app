// src/components/HomeBtn.jsx

function HomeBtn({ text, onClick, className = "" }) {
   return (
      <button className={`px-4 py-2 rounded-md font-semibold transition duration-200 hover:scale-103 ${className}`}
         onClick={onClick}>
         {text}
      </button>
   );
}


export default HomeBtn;
