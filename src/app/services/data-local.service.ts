import { Injectable } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Article } from '../models/interfaces';
@Injectable({
  providedIn: 'root',
})
export class DataLocalService {
  noticias: Article[] = [];
  constructor(private nativeStorage: NativeStorage) {}
  guardarNoticia(noticia: Article) {
    this.noticias.unshift(noticia);
    console.log('Noticias favoritas', this.noticias);
    try {
      this.nativeStorage.setItem('favoritos', this.noticias).then(() =>{
        console.log('Se guardo la noticia');
      });
    } catch (error) {
      console.log('Ocurrió un error');
    }
  }
  cargarNoticiasFavoritos() {}
}
