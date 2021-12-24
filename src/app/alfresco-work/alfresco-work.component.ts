import { Component, OnInit } from '@angular/core';
import fileSaver from 'file-saver';
import { AlfresoApiServiceService } from '../alfreso-api-service.service';
import { DocumentInfo } from './DocumentInfo';

@Component({
  selector: 'app-alfresco-work',
  templateUrl: './alfresco-work.component.html',
  styleUrls: ['./alfresco-work.component.css']
})
export class AlfrescoWorkComponent implements OnInit {

  documents :DocumentInfo[] = [];

  docName:string = "";

  documentCreated: boolean = false;

  constructor(private alfrescoService:AlfresoApiServiceService) { }

  ngOnInit(): void {
    this.fetchsiteContent();
  }

  fetchsiteContent(){

    this.alfrescoService.getSiteDocuments().subscribe((data : DocumentInfo[]) => {
    
      this.documents = data;
      
    });
  }

  downloadDocument(document:DocumentInfo){

   console.log(document);

   this.alfrescoService.sendDownloadRequest(document).subscribe((response:any) => {

   });

  }

  createDoc(){

    console.log(this.docName);

    this.alfrescoService.createDocument(this.docName).subscribe((data :boolean) => {

      this.documentCreated = data;

    });

  

  }
  
    
  

}
