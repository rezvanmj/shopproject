export interface IProduct{
name: String ;
id : number ;
price: number ;
image: String ;
availablity: boolean ;
information : String;
type: Ptype ;
}

export enum Ptype{
  food ,
  bed ,
  collar,
  scratcher
}


