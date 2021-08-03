import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-reversegeocode',
  templateUrl: './reversegeocode.component.html',
  styleUrls: ['./reversegeocode.component.css']
})
export class ReversegeocodeComponent implements OnInit {

  constructor(private http:HttpClient) { }

  public connectionString: any;
  public bytes: any;

  ngOnInit(): void {
    var getConnection = sessionStorage.getItem('dbConnection') as string; 
    console.log(getConnection);   
    this.bytes = CryptoJS.AES.decrypt(getConnection, 'thisissecret');
    this.connectionString = JSON.parse(this.bytes.toString(CryptoJS.enc.Utf8));
    console.log(this.connectionString);
  }

  public response: any;
  public validateResponse: any;
  public columns: any;
  public totalRecords : any;
  public page : any = 1;

  query = "";
  selecttable = "";
  inserttable = "";
  
  reversegeocode(data: any, event: any){
    if(event == "fetch")
    { 
      console.log('fetch');
      console.log(sessionStorage.getItem('connected'));
      this.validateResponse = "";
      this.http.get("https://localhost:5001/V3/Query?Server=" + this.connectionString.Server + "&Database=" + this.connectionString.Database + 
      "&UserName=" + this.connectionString.Username + "&Password=" + this.connectionString.Password + "&query=" + data.query)
      .subscribe(result => { 
        this.response = result;
        this.columns = Object.keys(this.response[0])
        this.totalRecords = this.response.length;
        console.log("Query", data.query);
        console.log("Columns", Object.keys(this.response[0]));
        console.log("Response", this.response);
        console.log("Records:", this.totalRecords);
          
    });
    }
    else if(event == "validate")
    { 
      console.log('validate');
      console.log(data.inserttable)
      this.http.get("https://localhost:5001/V3/ReverseGeocodeValidation?Server=" + this.connectionString.Server + "&Database=" + this.connectionString.Database + 
      "&UserName=" + this.connectionString.Username + "&Password=" + this.connectionString.Password + "&query=" + data.query + "&insertTable=" + data.inserttable, {responseType : 'text'})
      .subscribe(result => { 
        this.validateResponse = result;
        console.log("Response", this.validateResponse);  
    });

    }
  }

  disconnect(): void {
    sessionStorage.clear();
  }

}
