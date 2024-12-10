import React from "react";

const Cardlandscape = (props) => {
  return (
    <div className="box flex items-center justify-center rounded-[10px] border-2 border-black bg-slate-800 py-10 text-xl font-bold text-white md:text-2xl">
      {props.title}
    </div>
  );
};

export default Cardlandscape;
