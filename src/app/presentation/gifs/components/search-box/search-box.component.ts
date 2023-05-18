import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { GifsService } from '@gifs/services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: 'search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('searchInput')
  searchInput!: ElementRef<HTMLInputElement>;

  private readonly gifsService = inject(GifsService);

  onSearch(): void {
    const searchValue = this.searchInput.nativeElement.value;
    this.gifsService.searchGif(searchValue);
    this.searchInput.nativeElement.value = '';
  }
}
