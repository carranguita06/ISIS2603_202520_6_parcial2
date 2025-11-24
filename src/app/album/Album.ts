export class Album{
   id: number;
   spotify_id: string; 
   image: string; 

   constructor(
    id: number,
   spotify_id: string, 
   image: string
   ){
    this.id=id;
    this.spotify_id= spotify_id;
    this.image= image
   }
}