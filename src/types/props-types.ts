import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type ButtonCustProps={
    text:string,
    size:string
}

export type HIWBoxProps = {
    boxColor: string;
    icon: IconProp;
    iconColor?: string;
    scale?: boolean;
    title: string;
    text: string;
  };

  export type SectionHeadingProps = {
    heading: string;
    text: string;
    highlight: string;
  };


