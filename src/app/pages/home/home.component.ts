import { Component } from '@angular/core';
import { TopNavComponent } from '../../components/top-nav/top-nav.component';
import { SongCardComponent } from '../../components/song-card/song-card.component';

@Component({
  selector: 'app-home',  
  standalone: true,
  imports: [ TopNavComponent, SongCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
})
export class HomeComponent {

}
