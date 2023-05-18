import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardListComponent } from '@gifs/components/gifs-card-list/card-list.component';
import { CardComponent } from '@gifs/components/gifs-card/card.component';
import { SearchBoxComponent } from '@gifs/components/search-box/search-box.component';
import { HomePageComponent } from '@gifs/pages/home-page/home-page.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
