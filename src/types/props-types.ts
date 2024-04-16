import { Dispatch, SetStateAction } from "react";

export type movieCardProp = {
  data: {
    adult?: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  },

};
export type CarouselItemProps = {
  data: {
    adult?: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  },
  isActive: boolean
}
export type MovieProps = {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number

};

export type SectionProps = {
  sectionName: string,
  route: string,

}

export interface ProviderTypes {
  display_priority: number,
  logo_path: string,
  provider_id: number,
  provider_name: string

}


export interface UserType {
  _id?: any
  firstName: string,
  lastName: string,
  email: string,
  isAdmin: boolean,
  token: string


}

export type UserContextType = {
  user: UserType | null,
  setCurrentUser: Dispatch<SetStateAction<UserType | null>>
  errors: string | null,
  Register: (firstName: string, lastName: string, email: string, password: string) => Promise<any>,
  Login: (email: string, password: string) => Promise<any>,
  Logout: () => void

}