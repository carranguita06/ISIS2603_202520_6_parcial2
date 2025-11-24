import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './Album';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = environment.baseUrl + 'reflexiones';

constructor(private http: HttpClient) { }

  getAlbumes(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }

  
  getAlbum(id: string): Observable<Album> {
    return this.http.get<Album>(this.apiUrl + '/' + id);
  }



}
