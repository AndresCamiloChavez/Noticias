import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlines } from '../models/interfaces';
import { environment } from '../../environments/environment.prod';

const APIKEY = environment.apiKey;
const APIURL = environment.apiUrl;
const headers = new HttpHeaders({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'X-Api-KEY': APIKEY,
});
@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  headlinesPage = 0;
  categoriaActual = '';
  pageCategoriaActual = 1;
  constructor(private http: HttpClient) {}
  getTopHeadlines() {
    this.headlinesPage++;
    return this.ejecutarQuery<RespuestaTopHeadlines>(
      `/top-headlines?country=co&page=${this.headlinesPage}`
    );
  }
  getTopHeadlinesCategorioa(categoria: string) {
    if (categoria === this.categoriaActual) {
      this.pageCategoriaActual++;
    } else {
      this.pageCategoriaActual = 1;
      this.categoriaActual = categoria;
    }
    return this
      .ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=co&category=${this.categoriaActual}&page=${this.pageCategoriaActual}`);
  }
  private ejecutarQuery<T>(query: string) {
    query = APIURL + query;
    return this.http.get<T>(query, { headers });
  }
}
