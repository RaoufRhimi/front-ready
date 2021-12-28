import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl ='http://10.1.40.29:8280/api/categ'
  constructor(private http: HttpClient) { }
  
  getCategoryList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  addCategory(name:string): Observable<any> {
    return this.http.post(this.baseUrl+'/add',{name});
  }
  updateCategory(id:number,name : any): Observable<any> {
    return this.http.put(this.baseUrl+'/'+id+'/update', {name});
  }
  deleteCategory(id: any){
    return this.http.delete(this.baseUrl+'/'+id);
  }
  getCategoryById(id: number):Observable<any>{
    return this.http.get(this.baseUrl+`/${id}`)
  }
}
