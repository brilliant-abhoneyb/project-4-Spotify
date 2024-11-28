import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './pages/search/search.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
    declarations: [ 
        SearchComponent,
        PlaylistComponent,
        SignupComponent,
        LoginComponent,
        ButtonComponent
    ],
    imports: [ BrowserModule, AppRoutingModule ],
})
export class AppModule { }