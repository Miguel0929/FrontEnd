import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/service/servicio.service';
import { CatEmpleado } from 'src/app/Modelo/CatEmpleado';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  empleado:CatEmpleado=new CatEmpleado();
  constructor(private servicio:ServicioService, private router:Router) { }

  ngOnInit(): void {
    this.edit();
  }

  edit(){
    let id=localStorage.getItem("id");
    this.servicio.ObtenerEmpleadoId(+id)
    .subscribe(datos=>{
      this.empleado=datos;
    })

  }
  update(emp:CatEmpleado){
    this.servicio.ActualizarCatEmpleado(emp)
    .subscribe(datos=>{
      this.empleado=datos;
      this.router.navigate(["EmpleadoListar"]);
    })
  }
}
