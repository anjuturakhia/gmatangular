import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from './data.service';
import { QuantComponent } from './quant/quant.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private dataservice: DataService) { }

  ngOnInit(){
    document.getElementById("display").style.display = "none";
  }

  title = 'stackedbargraph';
  currentquantgraph =0;
  targetquantgraph=0;
  currentverbalgraph =0;
  targetverbalgraph=0;
  logoWidth=5;

  allarray: any=[];
  errormessage : string = "";
  errorflag : boolean = false;
  errorcurrentquant: boolean=false;
  errortargetquant: boolean=false;
  errorcurrentverbal: boolean=false;
  errortargetverbal: boolean=false;
  nullcheck: boolean = false;


  addHero(currentquant,targetquant,currentverbal,targetverbal){
    this.allarray = [];
    this.errormessage = "";
    this.errorcurrentquant=false;
    this.errortargetquant=false;
    this.errorcurrentverbal=false;
    this.errortargetverbal=false;
    this.nullcheck = false;

    console.log(currentquant,targetquant,currentverbal,targetverbal);

    if(currentquant == "" || targetquant == "" || currentverbal == "" || targetverbal == ""){
    document.getElementById("display").style.display = "none";
    this.nullcheck = true;
    return false;
    }
    if(currentquant > 60 ){
      this.errormessage += "Current quant, ";
      this.errorflag =true;
      this.errorcurrentquant = true;
      document.getElementById("display").style.display = "none";
    }

    if(targetquant > 60 ){
      this.errormessage += "Target quant, ";
      this.errorflag =true;
      this.errortargetquant =true
      document.getElementById("display").style.display = "none";
    }

    if(currentverbal > 60 ){
      this.errormessage += "Current verbal, ";
      this.errorflag =true;
      this.errorcurrentverbal = true;
      document.getElementById("display").style.display = "none";
    }

    if(targetverbal > 60 ){
      this.errormessage += "Target verbal, ";
      this.errorflag = true;
      this.errortargetverbal = true;
      document.getElementById("display").style.display = "none";
      
    }

    if(currentquant <= 60 && targetquant <= 60 && currentverbal <= 60  && targetverbal <= 60){
      this.currentquantgraph = currentquant;
      this.targetquantgraph = targetquant;
      this.currentverbalgraph = currentverbal;
      this.targetverbalgraph = targetverbal;
      this.logoWidth = targetquant; 
      document.getElementById("display").style.display = "block";
      this.allarray.push(currentquant,targetquant,currentverbal,targetverbal);
      this.dataservice.setData(this.allarray);
      this.errorflag = false;
  
    }
   

  }
}
