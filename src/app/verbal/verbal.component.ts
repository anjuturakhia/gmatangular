import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-verbal',
  templateUrl: './verbal.component.html',
  styleUrls: ['./verbal.component.css']
})
export class VerbalComponent implements OnInit {
  _targetverbalgraph =0;
  _currentverbalgraph =0;
  _acttargetverbalgraph =0;
  _actcurrentverbalgraph =0;
  _changedmargintarget = 0;
  difference =0;
  value:string;
  differenceflag :boolean =false;
  tempdiff:any;


  @Input('currentverbalgraph')set currentverbalgraph(currentverbalgraph : number){
    this._currentverbalgraph = currentverbalgraph *3 ;
    this._actcurrentverbalgraph = currentverbalgraph;
    console.log(this._currentverbalgraph);

    if(this._acttargetverbalgraph == this._actcurrentverbalgraph){
      this.difference = this._acttargetverbalgraph - this._actcurrentverbalgraph;
      this.value = "same as";
     }

     if(this._acttargetverbalgraph > this._actcurrentverbalgraph){
      this.difference = this._acttargetverbalgraph - this._actcurrentverbalgraph;
      this.value = "lower than";
     }

     if(this._acttargetverbalgraph < this._actcurrentverbalgraph){
      this.difference =  this._actcurrentverbalgraph - this._acttargetverbalgraph;
      this.value = "higher than";
     }

     this.tempdiff = this._acttargetverbalgraph - this._actcurrentverbalgraph;
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


  @Input('targetverbalgraph')set targetverbalgraph(targetverbalgraph : number){
    this._targetverbalgraph = targetverbalgraph *3;
    this._changedmargintarget = this._targetverbalgraph - this._currentverbalgraph ;
    this._acttargetverbalgraph = targetverbalgraph;
    console.log(this._acttargetverbalgraph);
    console.log(this._changedmargintarget);

    if(this._acttargetverbalgraph == this._actcurrentverbalgraph){
      this.difference = this._acttargetverbalgraph - this._actcurrentverbalgraph;
      this.value = "same as";
     }

     if(this._acttargetverbalgraph > this._actcurrentverbalgraph){
      this.difference = this._acttargetverbalgraph - this._actcurrentverbalgraph;
      this.value = "lower than";
     }

     if(this._acttargetverbalgraph < this._actcurrentverbalgraph){
      this.difference =  this._actcurrentverbalgraph - this._acttargetverbalgraph;
      this.value = "higher than";
     }


     this.tempdiff = this._acttargetverbalgraph - this._actcurrentverbalgraph;

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
