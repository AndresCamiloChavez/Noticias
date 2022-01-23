import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Article } from '../../models/interfaces';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild(IonSegment) segment: IonSegment;
  categorias =['business', 'entertainment', 'general', 'healths', 'cience', 'sports', 'technology'];
  noticias: Article[]= [];
  constructor(private noticiasService: NoticiasService) {
  }
  ngOnInit(): void {
    // console.log(this.categorias[0]);
    //! no está funcionando
      // this.segment.value = 'business';
      this.cargarNoticias(this.categorias[0]);
  }
  cambioCategoria(event){
    // console.log(event);
    this.cargarNoticias(event.detail.value);
  }
  cargarNoticias(categoria: string){
    this.noticiasService.getTopHeadlinesCategorioa(categoria).subscribe( data =>{
      this.noticias = data.articles;
    });
  }
}
