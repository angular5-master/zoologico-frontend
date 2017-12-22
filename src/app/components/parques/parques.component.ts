import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'parques',
	templateUrl: './parques.component.html',
	styleUrls: ['./parques.component.css']

})
export class ParquesComponent {
	@Input() nombre: string;
	public metros: number;
	public vegetacion: string;
	public abierto: boolean;

	@Output() pasameLosDatos = new EventEmitter();

	constructor(){
		this.nombre = 'Parque el bosque';
		this.metros = 450;
		this.vegetacion = 'Alta';
		this.abierto = true;
	}	

	emitirDatos(){
		this.pasameLosDatos.emit({
			'nombre': this.nombre,
			'metros': this.metros,
			'vegetacion': this.vegetacion,
			'abierto': this.abierto
			});
	}
}