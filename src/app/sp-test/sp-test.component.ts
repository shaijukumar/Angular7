import { Component, OnInit } from '@angular/core';
//import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sp-test',
  templateUrl: './sp-test.component.html',
  styleUrls: ['./sp-test.component.css']
})
export class SpTestComponent implements OnInit {

  constructor( private http : HttpClient) { }
  data:object;

  ngOnInit() {
    debugger;
    //this.data = 
    this.http.get("https://shaiju.sharepoint.com/dev1/_api/web/lists/getByTitle('TestList')/items")
    .toPromise().then(res => {this.data = res;debugger; console.log(this.data);  });
    //res => this.list = res as Employee[]
    
  }

  testFun(){
          
  }

}

export class TestList {
  title: string;
  Postion: string; 
}

