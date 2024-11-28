import { Component } from '@angular/core';
import { TopNavComponent } from '../../components/top-nav/top-nav.component';

@Component({
  selector: 'app-home',  
  standalone: true,
  imports: [ TopNavComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
})
export class HomeComponent {

}
