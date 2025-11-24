import { Album } from './../Album';
import { Component, OnInit } from '@angular/core';

import { AlbumService } from '../album.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
  imports: [CommonModule]
})
export class AlbumListComponent implements OnInit {

  albumes: Array<Album> = [];
  constructor(private albumService: AlbumService) { }

  getAlbumes() {
    this.albumService.getAlbumes().subscribe((albumes) => {
      this.albumes = this.albumes ;}

    );
  }

  ngOnInit() {
    this.getAlbumes();
  }

}
