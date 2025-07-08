import React, { useContext } from 'react';
import ListItem from './ListItem';
import { ContentContext } from '../context/contentContext';

const List = () => {
   const { content , refreshContent , isContent} = useContext(ContentContext);

   console.log(content)
   console.log(isContent)


   return (

            isContent?<>{<div className="relative grid grid-cols-1 md:ml-44 lg:mr-[230px] sm:grid-cols-2 xl:grid-cols-3 w-full p-2 gap-2 ">
         
  
         
         {content.map((item ) => (
            
            <ListItem
               key={item._id}
               id={item._id}
               title={item.title}
               type={item.cType}
               link={item.link}
               note={item.note}
            />
         ))}
       
      </div>}</>:<div className='noContentToShow flex items-center justify-center text-black text-3xl'>Add contents first</div>
      


      // <div className="relative md:ml-45 lg:mr-[234px] w-full">
      //    {content && content.length > 0 ? (
      //       content.map((item, index) => (
      //          <ListItem
      //             key={index}
      //             title={item.title}
      //             type={item.cType}
      //             link={item.link}
      //             note={item.note}
      //          />
      //       ))
      //    ) : (
      //       <div className="col-span-full text-center text-white mt-8">
      //          No content found.
      //       </div>
      //    )}
      // </div>
   );
};

export default List;
