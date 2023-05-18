import { Component, inject } from '@angular/core';
import { GifsService } from '@gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  private readonly gifsService = inject(GifsService);

  get searchTags(): string[] {
    return this.gifsService.searchTags;
  }

  onClickTag(tag: string): void {
    this.gifsService.searchGif(tag);
  }

  trackByFn(index: number): number {
    return index;
  }
}
