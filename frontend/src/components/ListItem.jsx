import React, { useEffect , useContext} from 'react';
import axios from 'axios';


import { ContentContext } from '../context/contentContext';
 







const ListItem = ({ title, type, link, note , id}) => {
   const {  refreshContent } = useContext(ContentContext);

   
   const deleteContent = async (id) => {


   await axios.delete('http://localhost:3000/api/v1/content/deleteContent',
          {
            headers: {
                "Authorization": localStorage.getItem("token") // Including the token from localStorage for authentication
            },
             params:
                { 'id': id }
          })
         
          
       refreshContent();
    }












   const convertToEmbedUrl = (url) => {
      if (!url) return "";
      const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&]+)/);
      return match ? `https://www.youtube.com/embed/${match[1]}` : "";
   };

   const getTypeIcon = (type) => {
      if (type === "youTube") {
         return <i className="fa-brands fa-youtube text-red-600 mr-2 text-xl"></i>;
      } else if (type === "Twitter") {
         return <i className="fa-brands fa-x-twitter text-zinc-800 bg-white rounded-full p-0.5 mr-2"></i>;
      } else if (type === "Notes") {
         return <i className="fa-solid fa-note-sticky text-lime-600 mr-2"></i>;
      } else {
         return <i className="fa-solid fa-link text-gray-600 mr-2"></i>;
      }
   };

   const getBorderColor = (type) => {
      if (type === "youTube") return "border-red-600";
      if (type === "X" || type === "Twitter") return "border-black";
      if (type === "Notes") return "border-lime-600";
      return "border-gray-600";
   };

   // 🔁 Twitter embed script reload
   useEffect(() => {
      if (window.twttr && window.twttr.widgets) {
         window.twttr.widgets.load();
      }
   }, [link]);

   return (
      <div className={`bg-zinc-800 rounded-xl w-full text-white border-b-4 ${getBorderColor(type)} p-1.5 h-fit`}>
         <h2 className="text-lg font-bold flex items-center mb-2 pb-1 border-b-1">
            {getTypeIcon(type)}
            {title}
            <i  onClick={()=>deleteContent(id)} className="fa-solid fa-trash text-red-400 hover:text-red-500 active:text-red-600 ml-auto cursor-pointer"></i>
         </h2>

         {type === 'youTube' && (
            <div className="aspect-video mb-2">
               <iframe
                  className="w-full h-full rounded-xl "
                  src={convertToEmbedUrl(link)}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
               ></iframe>
            </div>
         )}

         {type === 'Twitter' && (
            <div className='aspect-video mb-2'>
               <blockquote className="twitter-tweet w-full h-full rounded-xl">
                  <a href={link.replace("x.com", "twitter.com")}></a>
               </blockquote>
            </div>
         )}

         {type === 'Notes' && (
            <p className="p-1 text-base text-justify">
               {note}
            </p>
         )}
      </div>
   );
};

export default ListItem;
