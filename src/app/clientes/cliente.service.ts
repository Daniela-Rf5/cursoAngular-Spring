import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ClienteService {
  private urlEndPoint: string = 'http://localhost:8080/api/clientes';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  
  constructor(private http: HttpClient) {}

  
  getClientes(): Observable<Cliente[]>{ 
   // return of(CLIENTES);

    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Cliente[])
    );
}
create(cliente: Cliente) : Observable<Cliente> {
  return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders} )
}

getCliente(id: any): Observable<Cliente>{
return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`)

}


}