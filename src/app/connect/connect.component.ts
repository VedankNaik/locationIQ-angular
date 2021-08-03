import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DBConnectionRequest } from '../dbconnection-request';
import { Subscription } from 'rxjs';
import { async } from '@angular/core/testing';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  connection = new DBConnectionRequest(false,'','','','');
  // connection = new DBConnectionRequest(false,'','','','');
  public response: any;
  public dbresponse: any;
  public test: any;
  public bytes: any;
  
  connect(data: any){
    this.http.get("https://localhost:5001/V3/DBConnection?Server=" + data.Server + "&Database=" + data.Database + "&UserName=" + data.Username + "&Password=" + data.Password, {responseType : 'text'})
    .subscribe(
      result => { 
      this.response = result;
      console.log("1", this.response);
      if(this.response == "Connection successful")
      {
        this.connection.Connection = true;
        this.connection.Server = data.Server;
        this.connection.Database = data.Database;
        this.connection.Username = data.Username;
        this.connection.Password = data.Password;
        // sessionStorage.setItem('dbConnection', JSON.stringify(this.connection));
        sessionStorage.setItem('dbConnection', 
         CryptoJS.AES.encrypt(JSON.stringify(this.connection), 'thisissecret').toString());  
        this.test =  CryptoJS.AES.encrypt(JSON.stringify(this.connection), 'thisissecret').toString();  
        console.log(this.test);   
        this.bytes = CryptoJS.AES.decrypt(this.test, 'thisissecret');
        console.log(JSON.parse(this.bytes.toString(CryptoJS.enc.Utf8)));
        sessionStorage.setItem('connected', 'true');     
        sessionStorage.setItem('server', data.Server);
        sessionStorage.setItem('db', data.Database);
        sessionStorage.setItem('username', data.Username);
        sessionStorage.setItem('password', data.Password);
        this.router.navigate(['/forwardgeocode'])
      }      
    },
      error=>{
        alert('Bad request'); 
        console.log(error);
      });

  }

  connected(){
    return !!sessionStorage.getItem('connected')
  }

  

}
