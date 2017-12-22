import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
	selector: 'parques',
	templateUrl: './parques.component.html',
	styleUrls: ['./parques.component.css']

})

export class ParquesComponent implements OnChanges, OnInit, DoCheck, OnDestroy{
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

  // Este metodo se ejecuta cada que cambia un valor en las propieedades.
	ngOnChanges(changes: SimpleChanges){
	  //console.log(changes);
	  console.log("Existen Cambios en las propiesdades");
  }

  // Este metodo se Ejecuta una sola vez cuando se carga el Componente.
  ngOnInit(){
	  console.log("Metodo OnInit Lanzado");

	}
	
	// Se ejecuta cada que se hace algun cambio en el componente
  ngDoCheck(){
    console.log("El DoCheck se ha ejecutando");
	}
	
	// Se ejecuta antes antes de eliminar el componente
	ngOnDestroy(){
		console.log("Se va a eliminar el componente");
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
