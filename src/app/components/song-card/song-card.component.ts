import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-card',
  standalone: true,
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.scss'
})
export class SongCardComponent implements OnInit{
  playlistCover!: string;
  title!: string;
  description!: string;

  constructor() {}

  ngOnInit(): void {
    
  }
}
