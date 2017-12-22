import { Component } from '@angular/core';

@Component({
	selector: 'tienda',
	templateUrl: './tienda.component.html',

	styleUrls: ['./tienda.component.css']

})

export class TiendaComponent {
	public titulo;
	public nombreDelParque;
	public attrParque;

	constructor(){
		this.titulo = 'Don Alfredo';
	}

	mostrarNombre(){
		console.log(this.nombreDelParque);
	}

	emitirDatos(event){
		console.log(event);
		this.attrParque = event;

	}
}