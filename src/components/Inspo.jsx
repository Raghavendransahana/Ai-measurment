import React from 'react';

const Inspo = ({ url, alt }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
      <img src={url} alt={alt} className="w-full h-[300px] object-cover rounded-md" />
    </div>
  );
};

export default Inspo;
