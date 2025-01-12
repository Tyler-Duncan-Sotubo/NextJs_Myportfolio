import React, { FC } from "react";

type Props = {
  name: string;
};

const SkillsButton: FC<Props> = ({ name }) => {
  return (
    <button className="bg-skin-herobackground  text-skin-accent px-2 py-1 rounded-lg text-lg">
      {name}
    </button>
  );
};

export default SkillsButton;
