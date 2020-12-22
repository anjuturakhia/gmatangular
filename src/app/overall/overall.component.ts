import { Component, Input,OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-overall',
  templateUrl: './overall.component.html',
  styleUrls: ['./overall.component.css']
})
export class OverallComponent implements OnInit {
  _targetquantgraph =0;
  _currentquantgraph =0;
  _acttargetquantgraph =0;
  _actcurrentquantgraph =0;
  _changedmargintarget = 0;
  _targetverbalgraph =0;
  _currentverbalgraph =0;
  _acttargetverbalgraph =0;
  _actcurrentverbalgraph =0;

  totalcurrentscore=0;
  totaltargetscore=0;

  difference = 0;
  value :string;
  differenceflag:boolean = false;

  // @Input('currentverbalgraph')set currentverbalgraph(currentverbalgraph : number){
  //   this._currentverbalgraph = currentverbalgraph *3 ;
  //   this._actcurrentverbalgraph = currentverbalgraph;
  //   console.log(this._currentverbalgraph);
  // }

  // @Input('currentquantgraph')set currentquantgraph(currentquantgraph : number){
  //   this._currentquantgraph = currentquantgraph *3 ;
  //   this._actcurrentquantgraph = currentquantgraph;
  //   console.log(this._currentquantgraph);

  //   this.totalcurrentscore = 200 + (Number(this._actcurrentverbalgraph) + Number(this._actcurrentquantgraph)) * 5;
  //   console.log(this.totalcurrentscore);
  // }



  // @Input('targetverbalgraph')set targetverbalgraph(targetverbalgraph : number){
  //   this._targetverbalgraph = targetverbalgraph *3;
  //   this._changedmargintarget = this._targetverbalgraph - this._currentverbalgraph ;
  //   this._acttargetverbalgraph = targetverbalgraph;
  //   console.log(this._acttargetverbalgraph);
  //   console.log(this._changedmargintarget);
  // }
  

  // @Input('targetquantgraph')set targetquantgraph(targetquantgraph : number){
  //   this._targetquantgraph = targetquantgraph *3;
  //   this._changedmargintarget = this._targetquantgraph - this._currentquantgraph ;
  //   this._acttargetquantgraph = targetquantgraph;
  //   console.log(this._acttargetquantgraph);

  //   this.totaltargetscore = 200 + (Number(this._acttargetverbalgraph) + Number(this._acttargetquantgraph)) * 5;
  //   console.log(this.totaltargetscore);
  // }
  
  constructor(public dataservice :DataService) { }
  sharedData: any = [];
  ngOnInit() {

        this.dataservice.sharedData$.subscribe((data:any)=>{
          // console.log(data.home['products']);
           console.log(data[0]);

           this._actcurrentverbalgraph = data[2];
           this._actcurrentquantgraph = data[0];
           this._acttargetverbalgraph = data[3];
           this._acttargetquantgraph = data[1];

           this.totaltargetscore = 200 + (Number(this._acttargetverbalgraph) + Number(this._acttargetquantgraph)) * 5;
           console.log(this.totaltargetscore);


      this.totalcurrentscore = 200 + (Number(this._actcurrentverbalgraph) + Number(this._actcurrentquantgraph)) * 5;
       console.log(this.totalcurrentscore);

       if(this.totaltargetscore == this.totalcurrentscore){
        this.difference = this.totaltargetscore - this.totalcurrentscore;
        this.value = "same as";
       }

       if(this.totaltargetscore > this.totalcurrentscore){
        this.difference = this.totaltargetscore - this.totalcurrentscore;
        this.value = "lower than";
       }

       if(this.totaltargetscore < this.totalcurrentscore){
        this.difference =  this.totalcurrentscore - this.totaltargetscore;
        this.value = "higher than";
       }

       var tempdiff = this.totaltargetscore - this.totalcurrentscore;
       if( tempdiff  > 0 && tempdiff > 15){
        console.log(this.difference);
        console.log(this.differenceflag);
          this.differenceflag= true;
       }else{
        console.log(this.difference);
        console.log(this.differenceflag);
         this.differenceflag = false;
       }


     
         });

  }

}
