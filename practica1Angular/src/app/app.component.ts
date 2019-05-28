import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  art={
    codigo: null,
    descripcion: null,
    precio: null
  }

  articulos = [
    {codigo:1, descripcion:'Coca',precio:2.50},
    {codigo:2, descripcion:'inkaCola',precio:0.50},
    {codigo:3, descripcion:'Sublime',precio:1.50},
    {codigo:4, descripcion:'Wafer',precio:2.00},
    {codigo:5, descripcion:'Aceite de Avión',precio:0.10},
  ];

  hayRegistros(){
    return this.articulos.length>0;
  }

  borrar(art){
    for(let x=0;x<this.articulos.length;x++)
    if (this.articulos[x].codigo==art.codigo){
      this.articulos.splice(x,1);
      return;
    }
  }

  agregar(){
    for(let x=0;x<this.articulos.length;x++)
    if (this.articulos[x].codigo==this.art.codigo){
      alert('Ya existe');
      return;
    }
    this.articulos.push({
      codigo:this.art.codigo,
      descripcion:this.art.descripcion,
      precio:this.art.precio
    });

    this.art.descripcion=null;
    this.art.precio=null;

  }

    seleccionar(art){
      this.art.codigo=art.codigo;
      this.art.descripcion=art.descripcion;
      this.art.precio=art.precio;

    }

    modificar(){
      for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==this.art.codigo){
        this.articulos[x].descripcion=this.art.descripcion;
        this.articulos[x].precio=this.art.precio;
      }
      alert('No existe')
    }


    title = 'practica1Angular';
}
