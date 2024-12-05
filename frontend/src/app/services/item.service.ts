import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  ApiUrl = environment.UrlApi

  constructor( private http: HttpClient) { }

  GetAllItems(): Observable<Response<Item[]>> {
    return this.http.get<Response<Item[]>>(this.ApiUrl);
  }

  DeletarItem(id:number | undefined) : Observable<Response<Item[]>>{
    return this.http.delete<Response<Item[]>>(`${this.ApiUrl}?id=${id}`);
  }
}
