import { HttpClient, HttpEvent, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentInfo } from './alfresco-work/DocumentInfo';

const baseUrl = 'http://localhost:8082/files/'

@Injectable({
  providedIn: 'root'
})

export class AlfresoApiServiceService {

  constructor(private http:HttpClient) { 

  }

  getSiteDocuments(): Observable<DocumentInfo[]> {
    return this.http.get<DocumentInfo[]>(`${baseUrl}/content`);
  }


  sendDownloadRequest(document: DocumentInfo):Observable<any>{

    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(document.name);
    console.log(document)
    return this.http.post<any>(baseUrl + 'download', body ,{'headers':headers , observe: 'response'});
    
  }

  createDocument(documentName:string):Observable<boolean>{

    let params = new HttpParams();

    params = params.set('docName',documentName);

    return this.http.get<boolean>(baseUrl + 'create',{params:params});
    

  }
  
  

  


}


