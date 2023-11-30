import { Pipe, PipeTransform } from '@angular/core';

import { Movie } from '../interfaces/movies.interface';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {

  transform(movie: Movie): string {

    // Entonces vamos a mejorar el pipe de imagen ya que como no tenemos una imagen asociada nos aparece
    // que la imágen esta rota
    if( !movie.movieId && !movie.imageUrl ) {
      return `assets/no-image.png`;
    }
    else if( movie.imageUrl ) {
      return movie.imageUrl;
    }
    else {
      return `assets/images/${ movie.movieId }.png`;
    }

  }

}
