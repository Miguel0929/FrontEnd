import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatEmpleado } from '../Modelo/CatEmpleado';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/sistema/CatEmpleado'

  ObtenerCatEmpleado(){
    return this.http.get<CatEmpleado[]>(this.Url);
  }
  CrearCatEmpleado(empleado:CatEmpleado){
    return this.http.post<CatEmpleado>(this.Url,empleado);
  }
  ObtenerEmpleadoId(id:number){
    return this.http.get<CatEmpleado>(this.Url+"/"+id);
  }
  ActualizarCatEmpleado(empleado: CatEmpleado){
    return this.http.put<CatEmpleado>(this.Url+"/"+ empleado.id, empleado);
  } 
  EliminarCatEmpleado(empleado: CatEmpleado){
    return this.http.delete<CatEmpleado>(this.Url+"/"+empleado.id);
  }

}
