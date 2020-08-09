import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarEmpleadoComponent } from './CatEmpleado/agregar-empleado/agregar-empleado.component';
import { ListarEmpleadoComponent } from './CatEmpleado/listar-empleado/listar-empleado.component';
import { EditarEmpleadoComponent } from './CatEmpleado/editar-empleado/editar-empleado.component';


const routes: Routes = [
  {path:'EmpleadoAgregar', component:AgregarEmpleadoComponent},
  {path:'EmpleadoListar', component:ListarEmpleadoComponent},
  {path:'EmpleadoEditar', component:EditarEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
