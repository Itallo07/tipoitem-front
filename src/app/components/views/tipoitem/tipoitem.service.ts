import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tipoitem } from './tipoitem.model';

@Injectable({
  providedIn: 'root'
})
export class tipoitenservice {

  baseUrl: String = environment.baseUrl; 

  constructor(private http: HttpClient, private _snack : MatSnackBar) { }

  findAll():Observable<tipoitem[]> {
    const url = `${this.baseUrl}/tipoitens`
    return this.http.get<tipoitem[]>(url)
  }

  findById(id : String): Observable<tipoitem>{
    const url = `${this.baseUrl}/tipoitens/${id}`
    return this.http.get<tipoitem>(url)
  }

  create(tipoitem : tipoitem):Observable<tipoitem>{
    const url = `${this.baseUrl}/tipoitens`
    return this.http.post<tipoitem>(url, tipoitem);
                    
  }

  delete(id : String): Observable<void>{
    const url = `${this.baseUrl}/tipoitens/${id}`
    return this.http.delete<void>(url) 
  }

  update(cat : tipoitem): Observable<void>{
    const url = `${this.baseUrl}/tipoitens/${cat.id}`
    return this.http.put<void>(url, cat)
  }
  mensagem(str : String): void{
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 10000
    })
  }
}
