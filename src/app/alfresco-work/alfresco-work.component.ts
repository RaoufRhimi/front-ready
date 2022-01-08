import { Component, OnInit } from '@angular/core';
import fileSaver from 'file-saver';
import { AlfresoApiServiceService } from '../alfreso-api-service.service';
import { DocumentInfo } from './DocumentInfo';

const MIME_TYPES = {
  pdf: 'application/pdf',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetxml.sheet'
}

@Component({
  selector: 'app-alfresco-work',
  templateUrl: './alfresco-work.component.html',
  styleUrls: ['./alfresco-work.component.css']
})
export class AlfrescoWorkComponent implements OnInit {

  documents :DocumentInfo[] = [];

  docName:string = "";

  documentCreated: boolean = false;

  exist: string = "";

  constructor(private alfrescoService:AlfresoApiServiceService) { }

  ngOnInit(): void {
    this.fetchsiteContent();
  }

  fetchsiteContent(){

    this.alfrescoService.getSiteDocuments().subscribe((data : DocumentInfo[]) => {
    
      this.documents = data;
      
    });
  }
/*
  downloadDocument(document:DocumentInfo){

   console.log(document);

   this.alfrescoService.sendDownloadRequest(document).subscribe((response:any) => {

   });

  }
  */

  
  downloadFile(document:DocumentInfo){
    if(document != null) {
      this.exist = document.name != null ? document.name.substring(document.name.lastIndexOf('.') + 1) : "";

      this.alfrescoService.downloadFile(document.name!)
      .subscribe(data => {
        //save it on the client machine.
        saveAs(new Blob([data], {type: 'application/pdf'}), document.name);
      })
    }
  }


  createDoc(){

    console.log(this.docName);

    this.alfrescoService.createDocument(this.docName).subscribe((data :boolean) => {

      this.documentCreated = data;

    });

  

  }
  
    
  

}
