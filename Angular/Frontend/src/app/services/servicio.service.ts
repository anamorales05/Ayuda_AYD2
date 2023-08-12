import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  url= 'http://localhost:5000/micro2'
  constructor(private http: HttpClient) {  }

  GetPrincesas() {
    return this.http.get(this.url + '/princesas')
  }
}
