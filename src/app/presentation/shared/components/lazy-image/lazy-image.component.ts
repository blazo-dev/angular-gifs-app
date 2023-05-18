import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input() src = '';
  @Input() alt = '';

  hasLoaded = false;

  ngOnInit(): void {
    if (!this.src) throw new Error('Url is required');
  }

  onLoad(): void {
    this.hasLoaded = true;
  }
}
