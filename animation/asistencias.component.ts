import { Component, OnInit } from '@angular/core';
import { ApiclasesService } from 'src/app/services/apiclases.service';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.component.html',
  styleUrls: ['./asistencias.component.scss'],
})
export class AsistenciasComponent implements OnInit {

  clases: any;

  constructor(private api: ApiclasesService) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.getClases();
  }
  
  getClases() {
    this.api.getClases().subscribe((data)=>{
      this.clases=data;
    });
  }


}
