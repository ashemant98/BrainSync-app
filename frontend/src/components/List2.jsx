import React from 'react';
import ListItem from './ListItem';

const List2 = ({ content, onClose , name}) => {
  console.log("inside list 2");

  console.log(name)

  return (



    <div className="fixed inset-0 z-50 bg-zinc-700 bg-opacity-80 backdrop-blur-md flex justify-center items-center flex-col">

      


      <div className="relative w-full h-full overflow-y-auto  mt-4 font-semibold">
         <div className='name  text-4xl ml-10 pt-5 tex'>{name}'s<span className='text-orange-500'> Brain</span></div>

        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-4xl mr-4 text-orange-500 hover:text-red-500  font-bold"
        >
          &times;
        </button>

        {/* Content */}
        <div className="columns-1 sm:columns-2 xl:columns-3 gap-2 p-1 m-8 border-amber-600">
          {content.map((item, index) => (
            <div key={index} className="mb-2 break-inside-avoid-column">
              <ListItem
                title={item.title}
                type={item.cType}
                link={item.link}
                note={item.note}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List2;
