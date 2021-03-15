export interface IProduct{
name: String ;
id : number ;
price: number ;
image: String ;
availablity: boolean ;
information : String;
type: Ptype ;
count ?: number ;
}

export enum Ptype{
  food ,
  bed ,
  collar,
  scratcher
}


