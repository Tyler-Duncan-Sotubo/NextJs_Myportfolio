import React, { FC } from "react";

type Props = {
  name: string;
  description: string;
};

export const Header: FC<Props> = ({ name, description }) => {
  return (
    <div className="md:w-1/2 mx-auto w-[85%]">
      <h2 className="mb-2 md:text-xl text-center font-bold font-Inter capitalize text-skin-dark tracking-widest">
        {name}
      </h2>
      <h3 className="text-lg text-center text-skin-secondary font-Inter tracking-wide">
        {description}
      </h3>
    </div>
  );
};
