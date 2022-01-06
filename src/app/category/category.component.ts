import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import jsPDF from 'jspdf';
import { UploadFilService } from '../services/upload-file.service';


import { FormsModule } from '@angular/forms';

 
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import 'jspdf-autotable';

import autoTable from 'jspdf-autotable';

import * as XLSX from 'xlsx'; 
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { TokenStorageService } from '../services/token-storage.service';
import { Token } from '@angular/compiler';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';

  fileInfos?: Observable<any>;


category: Category[]=[];
catName:string = "";
id_cat:any
fileName= 'ExcelSheet.xlsx'; 
 @ViewChild('content',{static: false}) el!: ElementRef;
  data: any;
  
  constructor(tokenService:TokenStorageService,private categoryService: CategoryService, private router: Router,private router2:ActivatedRoute,private uploadService:UploadFilService) { }

  ngOnInit(): void {
  
    //this.fileInfos = this.uploadService.getFiles();
    this.id_cat = this.router2.snapshot.params.id_cat ; 
    this.categoryService.getCategoryList().subscribe((data : Category[])=>
    {
      this.category=data;
    },
    error => {
      console.error(error);
     });  
  }

  selectFile(event:any) {
    this.selectedFiles = event.target.files;
  }


  
  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.upload(this.currentFile).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.uploadService.getFiles();
            }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          });

      }

      this.selectedFiles = undefined;
    }
  }


  goToProduct(id:any){
    this.router.navigate(['/products/'+id]);
  }
  logout(){
  window.sessionStorage.clear();
  window.localStorage.clear();
  this.router.navigate(['/']);
  }

addCategory(){
  this.categoryService.addCategory(this.catName).subscribe();
 window.location.reload();
}

deleteCategory(id : any){
  this.categoryService.deleteCategory(id).subscribe();
  window.location.reload();
}
makePdf(){

  const doc = new jsPDF()
  autoTable(doc, { html: '#category' })
  doc.save('categories.pdf');

}


open(id:any){
  this.router.navigate(['/edit/'+id])
}

exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('category'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }
}