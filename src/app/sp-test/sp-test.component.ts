import { Component, OnInit } from '@angular/core';
//import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';
//import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
//import { IWebPartContext } from "@microsoft/sp-webpart-base";

//import { IListItem } from "../models/IListItem";

@Component({
  selector: 'app-sp-test',
  templateUrl: './sp-test.component.html',
  styleUrls: ['./sp-test.component.css']
})
export class SpTestComponent implements OnInit {

  constructor(private http: HttpClient ) { }
  data:object;
  test : string;
  //TestListItems: IListItem[];
  TestListItems: any = null

  ngOnInit() {

    let items: IListItem[];

    this.http.get("https://shaiju.sharepoint.com/dev1/_api/web/lists/getByTitle('TestList')/items")
    .toPromise().then( (json: { value: IListItem[] }) => {
      debugger;
      console.log(JSON.stringify(json.value));
      this.TestListItems = json.value
      /*
      items = json.value.map((v,i)=>(
        {
            // key: v.id,
            id: v.Id,
            title: v.Title,
            created: v.Created,
            createdby: v.Author.Title,
            modified: v.Modified,
            modifiedby: v.Editor.Title
        }));
        console.log("-------------------------------------");
        console.log(items);
        console.log("-------------------------------------");
      */
    });

    /*
    debugger;
    var myItems: any = null;
    this.getListItems()
    .then((items: any[]) => {
      debugger;
      var myItems: any = null;
      myItems = items as IListItem[];
      debugger;
    });
    */

    //let items: IListItem[];
    //items = testFun();

    /*
    debugger;
    //this.data = 
    this.http.get("https://shaiju.sharepoint.com/dev1/_api/web/lists/getByTitle('TestList')/items")
    .toPromise().then(res => 
      {
        //this.data =
        this.test = res.value[0].Title;
        debugger; 
        //console.log(this.data);  

       
      });
    //res => this.list = res as Employee[]
    */

   
    
  }

  
  getListItems(){

    /*
    let items: IListItem[];

    return this.requester.get("https://shaiju.sharepoint.com/dev1/_api/web/lists/getByTitle('TestList')/items?$select=Title,Id,Modified,Created,Author/Title,Editor/Title&$expand=Author,Editor",
      SPHttpClient.configurations.v1,
      {
          headers: {
              "Accept": "application/json;odata=nometadata",
              "odata-version": ""
          }
      })
      .then((response: SPHttpClientResponse): Promise<{ value: IListItem[] }> => {
        return response.json();
      })
      .then((json: { value: IListItem[] }) => {
          console.log(JSON.stringify(json.value));
          return items=json.value.map((v,i)=>(
              {
                  // key: v.id,
                  id: v.Id,
                  title: v.Title,
                  created: v.Created,
                  createdby: v.Author.Title,
                  modified: v.Modified,
                  modifiedby: v.Editor.Title
              }
          ));
      });  
      */ 
  }

}

export  class IListItem {
  [key: string]: any;
  id: string;
  title: string;
  modified: Date;
  created: Date;
  modifiedby: string;
  createdby: string;
}

