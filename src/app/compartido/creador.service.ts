import { Injectable } from '@angular/core';
import { Creador } from './creador.model';

@Injectable({
  providedIn: 'root'
})
export class CreadorService {
formData : Creador;

  constructor() { }
}
