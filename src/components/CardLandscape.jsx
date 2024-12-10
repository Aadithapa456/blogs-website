import React from "react";

const Cardlandscape = (props) => {
  return (
    <div className="box flex h-32 w-96 items-center justify-center border-2 border-black bg-slate-800 text-2xl font-bold text-white rounded-[10px]">
        {props.title}
      </div>
  );
};

export default Cardlandscape;
