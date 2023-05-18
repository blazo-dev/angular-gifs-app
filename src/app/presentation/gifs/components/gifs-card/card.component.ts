import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '@domain/interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif is required');
  }
}
