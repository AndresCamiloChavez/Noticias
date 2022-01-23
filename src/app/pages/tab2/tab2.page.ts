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
  categoria = 'business';
  noticias: Article[]= [];
  constructor(private noticiasService: NoticiasService) {
  }
  ngOnInit(): void {
    // console.log(this.categorias[0]);
    //! no está funcionando
      // this.segment.value = 'business';
      this.cargarNoticias(this.categoria);
  }
  cambioCategoria(event){
    this.noticias = [];
    this.categoria = event.detail.value;
    this.cargarNoticias(this.categoria);
  }
  cargarNoticias(categoria: string, event?){
    this.noticiasService.getTopHeadlinesCategorioa(categoria).subscribe( data =>{
      this.noticias.push(...data.articles);
      if (event) {
        event.target.complete();
      }
    });
  }

  loadData(event){
    this.cargarNoticias(this.categoria, event);
  }
}
