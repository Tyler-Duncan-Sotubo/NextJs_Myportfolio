import React, { FC } from "react";
import { ReactElement } from "react";

type Props = {
  name: string;
  color: string;
  icon: ReactElement;
};

const Button: FC<Props> = ({ name, color, icon }) => {
  return (
    <button
      className={`flex gap-2 items-center text-sm text-white px-8 py-4 rounded-full font-bold uppercase ${color}`}>
      {icon}
      {name}
    </button>
  );
};

export default Button;
