import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LazyImageComponent, SidebarComponent } from './components';

@NgModule({
  declarations: [SidebarComponent, LazyImageComponent],
  imports: [CommonModule],
  exports: [SidebarComponent, LazyImageComponent],
})
export class SharedModule {}
