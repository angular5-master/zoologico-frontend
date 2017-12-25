import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
	selector: 'tienda',
	templateUrl: './tienda.component.html',
	styleUrls: ['./tienda.component.css']

})

export class TiendaComponent implements OnInit {
	public titulo;
	public nombreDelParque;
	public miParque;

	constructor(){
		this.titulo = 'Finaktiva';
	}

	ngOnInit() {
		$('#textojq').hide();
		$('#botonjq').click(function(){
			console.log('click desde jquery');
			$('#textojq').slideToggle();
		});	
	}

	mostrarNombre(){
		console.log(this.nombreDelParque);
	}

	emitirDatos(event){
		console.log(event);
		this.miParque = event;

	}
}
