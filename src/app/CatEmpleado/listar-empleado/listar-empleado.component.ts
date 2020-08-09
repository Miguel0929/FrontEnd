import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/service/servicio.service';
import { CatEmpleado } from 'src/app/Modelo/CatEmpleado';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {
 
  empleados:CatEmpleado[];
  constructor(private servicio:ServicioService, private router:Router) { }

  ngOnInit(): void {
    this.servicio.ObtenerCatEmpleado().subscribe(datos=>{this.empleados=datos;})
  }

  add(){
    this.router.navigate(["EmpleadoAgregar"]);
  }
  edit(empleado: CatEmpleado){
    localStorage.setItem("id",empleado.id.toString());
    this.router.navigate(["EmpleadoEditar"]);
  } 
  delete(empleado: CatEmpleado){
    this.servicio.EliminarCatEmpleado(empleado)
    .subscribe(datos=>{
      this.empleados=this.empleados.filter(dat=>dat!==empleado);
    })
  }
}
