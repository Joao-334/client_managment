import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  selectAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url);
  }

  registerClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.url, client);
  }

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(this.url, client);
  }

  deleteClient(id: number): Observable<Client> {
    const url = `${this.url}/${id}`;
    return this.http.delete<Client>(url);
  } 
}
