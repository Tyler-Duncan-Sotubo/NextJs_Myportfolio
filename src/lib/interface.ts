export interface IProjects {
  name: string;
  img: string;
  desc: string;
  source: string;
  web: string;
  tech: any;
  madeat: string;
  techIcons?: any;
}

export interface ISkills {
  name: string;
  img: string;
}

export interface NavData {
  name: string;
  path: string;
  icon?: any;
}

export interface IBlog {
  title: string;
  img: string;
  date: string;
  desc: string;
  link: string;
  github: string;
}
