import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quant',
  templateUrl: './quant.component.html',
  styleUrls: ['./quant.component.css']
})
export class QuantComponent implements OnInit {

  _targetquantgraph =0;
  _currentquantgraph =0;
  _acttargetquantgraph =0;
  _actcurrentquantgraph =0;
  _changedmargintarget = 0;

  difference = 0;
  value :string;
  differenceflag:boolean = false;
  tempdiff : any;

  @Input('currentquantgraph')set currentquantgraph(currentquantgraph : number){
    this._currentquantgraph = currentquantgraph *3 ;
    this._actcurrentquantgraph = currentquantgraph;
    console.log(this._currentquantgraph);

    if(this._acttargetquantgraph == this._actcurrentquantgraph){
      this.difference = this._acttargetquantgraph - this._actcurrentquantgraph;
      this.value = "same as";
     }

     if(this._acttargetquantgraph > this._actcurrentquantgraph){
      this.difference = this._acttargetquantgraph - this._actcurrentquantgraph;
      this.value = "lower than";
     }

     if(this._acttargetquantgraph < this._actcurrentquantgraph){
      this.difference =  this._actcurrentquantgraph - this._acttargetquantgraph;
      this.value = "higher than";
     }



     this.tempdiff = this._acttargetquantgraph - this._actcurrentquantgraph;

     if( this.tempdiff  > 0 && this.tempdiff > 5){
      console.log(this.difference);
      console.log(this.differenceflag);
        this.differenceflag= true;
     }else{
      console.log(this.difference);
      console.log(this.differenceflag);
       this.differenceflag = false;
     }

  }


  @Input('targetquantgraph')set targetquantgraph(targetquantgraph : number){
    this._targetquantgraph = targetquantgraph *3;
    this._changedmargintarget = this._targetquantgraph - this._currentquantgraph ;
    this._acttargetquantgraph = targetquantgraph;
    console.log(this._acttargetquantgraph);
    console.log(this._changedmargintarget);


    if(this._acttargetquantgraph == this._actcurrentquantgraph){
      this.difference = this._acttargetquantgraph - this._actcurrentquantgraph;
      this.value = "same as";
     }

     if(this._acttargetquantgraph > this._actcurrentquantgraph){
      this.difference = this._acttargetquantgraph - this._actcurrentquantgraph;
      this.value = "lower than";
     }

     if(this._acttargetquantgraph < this._actcurrentquantgraph){
      this.difference =  this._actcurrentquantgraph - this._acttargetquantgraph;
      this.value = "higher than";
     }

     this.tempdiff = this._acttargetquantgraph - this._actcurrentquantgraph;
  if( this.tempdiff  > 0 && this.tempdiff > 5){
    console.log(this.difference);
    console.log(this.differenceflag);
      this.differenceflag= true;
   }else{
    console.log(this.difference);
    console.log(this.differenceflag);
     this.differenceflag = false;
   }
     

  }
  
  

  constructor() { }

  ngOnInit() {

  }

}
