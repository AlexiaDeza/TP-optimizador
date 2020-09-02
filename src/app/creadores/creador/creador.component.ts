import { Component, OnInit } from '@angular/core';
import { CreadorService } from 'src/app/compartido/creador.service';

@Component({
  selector: 'app-creador',
  templateUrl: './creador.component.html',
  styleUrls: ['./creador.component.css']
})
export class CreadorComponent implements OnInit {

  constructor(public service: CreadorService) { }

  ngOnInit(): void {
  }

}
