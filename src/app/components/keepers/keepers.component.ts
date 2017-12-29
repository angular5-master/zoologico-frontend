import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'keepers',
  templateUrl: './keepers.component.html',
  animations: [fadeIn]
})

export class KeepersComponent implements OnInit {
  title = 'Keepers';

  ngOnInit(){
    console.log('keepers.component cargado!!')
  }
}