import { Album } from './../album/Album';
import { Cancion } from '../cancion/Cancion';

export class AlbumDetail extends Album {
  canciones: Array<Cancion> = [];

  constructor(id: number, canciones: Array<Cancion>) {
    super(id);
    this.canciones = canciones;
  }

}
