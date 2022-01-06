import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { Products } from '../models/products';


const baseUrl ='http://10.1.40.65:8280/api/prod'
@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  baseUrl ='http://10.1.40.59:8280/api/prod';
  constructor(private http:HttpClient) { }

   addProducts(name:any,quantity:any,id:any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/add/'+id, {name,quantity});
  } 

 
  getProductsList(): Observable<any> {
    return this.http.get(baseUrl);
  }
  getProductById(id: number):Observable<any>{
    return this.http.get(this.baseUrl+'/'+id)
  }
  deleteProduct(id: any){
    return this.http.delete(this.baseUrl+'/'+id);
  }
  updateProduct(id:number,name:any,quantity:any): Observable<any> {
    return this.http.put(this.baseUrl+'/'+id, {name});
  }


}
