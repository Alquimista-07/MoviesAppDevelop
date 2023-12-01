import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movies.interface';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html'
})
export class YoutubePlayerComponent implements AfterContentInit {
  
  @Input() movie!: Movie;
  
  videoUrl: string[] = [];
  videoId: string = '';
  
  ngAfterContentInit(): void {
    this.videoUrl = this.movie.trailerLink.split('=');
    this.videoId = this.videoUrl[1].toString().trim();
  }
  

}
