import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';
import { ApiclasesService } from './apiclases.service';

@Injectable({
  providedIn: 'root'
})
export class LeerqrService {
  code: any;
  classes: any;
  class: any ={
    id: 999,
    nombreClase: "",
    docente: "",
    cantTotalClases: "",
    diasAsistidos: "",
    horario: ""
  };
  constructor(private bcs: BarcodeScanner, private toas: ToastController, 
              private clases: ApiclasesService) { }
  scan(){
    this.bcs.scan().then(barcodeData => {
      this.code = barcodeData.text;
      this.clases.getClase(this.code).subscribe((data)=>{
        this.class = data;
        this.class.diasAsistidos = this.class.diasAsistidos + 1;
        this.clases.updateClase(this.class.id, this.class).subscribe((data)=>{});
      });
      this.presentToast();

     }).catch(err => {
         console.log('Error', err);
     });
  }
  async presentToast() {
    const toast = await this.toas.create({
      message: "Asistencia registrada :D!",
      duration: 2000
    });
    toast.present();
  }
}
