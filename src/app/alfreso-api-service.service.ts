import { HttpClient, HttpEvent, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentInfo } from './alfresco-work/DocumentInfo';

const baseUrl = 'http://10.1.40.65:8280/files/'

@Injectable({
  providedIn: 'root'
})

export class AlfresoApiServiceService {

  constructor(private http:HttpClient) { 

  }

  getSiteDocuments(): Observable<DocumentInfo[]> {
    return this.http.get<DocumentInfo[]>(`${baseUrl}content`);
  }

/*
  sendDownloadRequest(document: DocumentInfo):Observable<any>{

    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(document.name);
    console.log(document)
    return this.http.post<any>(baseUrl + 'download', body ,{'headers':headers , observe: 'response'});
    
  }
  */

  downloadFile(documentName:string){

    const REQUEST_PARAMS = new HttpParams().set('fileName',documentName);
    const REQUEST_URI = baseUrl + 'download_file';
   return  this.http.get(REQUEST_URI, {
      params: REQUEST_PARAMS,
      responseType: 'arraybuffer'
      
    })
    

  }
  

  createDocument(documentName:string):Observable<boolean>{

    let params = new HttpParams();

    params = params.set('docName',documentName);

    return this.http.get<boolean>(baseUrl + 'create',{params:params});
    

  }
  
  

  


}


