export interface IEducationItemProps {
  data: {
    YEAR: string;
    DEGREE: string;
    INSTITUTION: string;
    LOGO: string;
    DESCRIPTION: string;
    LINK: string;
  };
}

export interface IExperienceItem {
  data: {
    year: string;
    title: string;
    company: string;
    logo: string;
    description: string;
    link: string;
  };
  index: number;
}
