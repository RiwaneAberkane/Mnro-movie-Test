import { CategoryType } from "./CategoryType";

export interface MovieType{
 id:number;
 name:string;
 overview:string;
 backdrop_path:string;
 vote_average:number;
 origin_country :string[];
 poster_path:string;
 genre: CategoryType;
}
