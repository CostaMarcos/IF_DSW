import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  public get(url: string){
    return this.http.get<any>(this.baseUrl + url + '/');
  }

  public post(url: string, data: any){
    return this.http.post(this.baseUrl + url + '/', data);
  }

  public put(url: string, data: any){
    return this.http.put(this.baseUrl + url + '/', data);
  }

  public patch(url: string, data: any){
    return this.http.patch(this.baseUrl + url + '/', data);
  }

  public delete(url: string, id: number){
    return this.http.delete(this.baseUrl + url + '/' + id + '/');
  }
}
