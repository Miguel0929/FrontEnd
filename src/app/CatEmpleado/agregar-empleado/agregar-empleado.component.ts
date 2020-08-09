import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/service/servicio.service';
import { CatEmpleado } from 'src/app/Modelo/CatEmpleado';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

  constructor(private servicio:ServicioService, private router:Router) { }

  ngOnInit(): void {
  }

  empleado:CatEmpleado=new CatEmpleado();
  save(){
    this.servicio.CrearCatEmpleado(this.empleado)
    .subscribe(datos=>{
      this.router.navigate(["EmpleadoListar"]);
    })
  }
}
