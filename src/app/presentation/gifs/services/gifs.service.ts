import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Gif, GifsReponse } from '@domain/interfaces/gifs.interfaces';
import { env } from '@env/environment.development';

const { apiKey, apiUrl } = env;
@Injectable({ providedIn: 'root' })
export class GifsService {
  private _searchTags: string[] = [];
  private readonly http = inject(HttpClient);
  private _gifs: Gif[] = [];

  constructor() {
    this.getLocalStorage();
  }

  get searchTags() {
    return [...this._searchTags];
  }

  get gifs() {
    return this._gifs;
  }

  searchGif(searchTag: string): void {
    if (!searchTag.trim()) return;
    this.organizeSearchTags(searchTag);

    const params = new HttpParams()
      .set('api_key', apiKey)
      .set('q', searchTag)
      .set('limit', '10');

    this.http
      .get<GifsReponse>(`${apiUrl}/search`, { params })
      .subscribe((response) => {
        this._gifs = response.data;
      });
  }

  getTrendingGifs(): void {
    const params = new HttpParams().set('api_key', apiKey).set('limit', '10');
    this.http
      .get<GifsReponse>(`${apiUrl}/trending`, { params })
      .subscribe((response) => {
        this._gifs = response.data;
      });
  }

  private organizeSearchTags(tag: string) {
    const tagToLowerCase = tag.toLowerCase();

    if (this._searchTags.includes(tagToLowerCase)) {
      this._searchTags = this._searchTags.filter(
        (oldTag) => oldTag !== tagToLowerCase
      );
    }

    this._searchTags.unshift(tagToLowerCase);
    this._searchTags = this._searchTags.slice(0, 15);

    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('searchTags', JSON.stringify(this._searchTags));
  }

  private getLocalStorage(): void {
    if (!localStorage.getItem('searchTags')) return;
    this._searchTags = JSON.parse(localStorage.getItem('searchTags')!);

    if (this._searchTags.length === 0) return;
    this.searchGif(this._searchTags[0]);
  }
}
