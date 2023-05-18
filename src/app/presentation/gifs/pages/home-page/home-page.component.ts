import { Component, inject, OnInit } from '@angular/core';
import { Gif } from '@domain/interfaces/gifs.interfaces';
import { GifsService } from '@gifs/services/gifs.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  private readonly gifsService = inject(GifsService);

  get gifs(): Gif[] {
    return this.gifsService.gifs;
  }

  ngOnInit(): void {
    this.gifsService.getTrendingGifs();
  }
}
