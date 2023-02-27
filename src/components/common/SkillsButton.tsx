import React, { FC } from "react";

type Props = {
  name: string;
};

const SkillsButton: FC<Props> = ({ name }) => {
  return (
    <button className=" bg-primary text-white px-2 py-1 rounded-lg text-xs">
      {name}
    </button>
  );
};

export default SkillsButton;
