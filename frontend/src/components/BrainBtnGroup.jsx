import React from 'react';
import BtnBrain from './BtnBrain';

const BrainBtnGroup = ({ onAdd, onShare, onView, className = '' }) => {
   return (
      <div className={`space-x-1 items-center sm:text-md ${className}`}>
         <BtnBrain value="Add Brain" onClick={onAdd} />
         <BtnBrain value="Share Brain" onClick={onShare} />
         <BtnBrain value="View Brain" onClick={onView} />
      </div>
   );
};

export default BrainBtnGroup;
