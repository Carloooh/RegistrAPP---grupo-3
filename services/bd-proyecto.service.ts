import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { IRegistros } from '../interfaces/iregistros';

@Injectable({
  providedIn: 'root'
})
export class BdProyectoService {

  registro: IRegistros[]=[];
  private _storage: Storage | null = null;

  constructor(private storage: Storage, public toastController:ToastController) {
    this.init();
    this.cargarUsuarios()
  }
  async cargarUsuarios() {
    const miRegistro= await this.storage.get('registro');
    if (miRegistro) {
      this.registro=miRegistro;
    }
  }

  registrarUsuario(usuario:string,ctr:string){
    //LAMBDA
    const existe=this.registro.find(u=>u.strUsuario===usuario);
    if (!existe) {
      this.registro.unshift({strUsuario:usuario, strContraseña:ctr});
      this._storage.set('registro',this.registro);
      this.presentToast("Usuario registrado!")
    } else {
      this.presentToast("ERROR: Usuario existente!")
    }
  }

  validarCredenciales(usuario: string, ctr: string){
    const existeUsuario=this.registro.find(u=>u.strUsuario===usuario);
    const existePass=this.registro.find(c=>c.strContraseña===ctr);
    if (existeUsuario && existePass) {
      return true;
    } else {
      return false;
    }
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async presentToast(mensaje:string) {

    const toast = await this.toastController.create({
      message: mensaje,
      translucent:true,
      color:'medium',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
}