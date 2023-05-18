import { Component, Input } from '@angular/core';
import { Gif } from '@domain/interfaces/gifs.interfaces';
import { of } from 'rxjs';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  @Input()
  gifs: Gif[] = [];

  trackByFn(index: number, gif: Gif): string {
    return gif.id;
  }
}
