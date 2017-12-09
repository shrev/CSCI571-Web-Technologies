import { Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {Http, Response, Jsonp, JsonpModule} from '@angular/http';
import {MatAutocompleteModule, MatSortModule, Sort} from '@angular/material';
import {FormControl} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/distinctUntilChanged';
import { HttpClient } from '@angular/common/http';
import {DataSource} from '@angular/cdk/collections';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

    public isLeftVisible = false;
  
    stockCtrl: FormControl;
    filteredStocks: Observable<any[]>;
    public temp: any[];
    public obj : JSON;
    public id :number;

    public stocks: any[] = [
    ];

    stockTable = [];
     
    sortedData;
    
    constructor(private http: Http){

    this.stockCtrl = new FormControl();     

    this.filteredStocks = this.stockCtrl.valueChanges
        .distinctUntilChanged()
        .map(stock => stock ? this.filterStocks(stock) : [] );

        
  }

  myEvent(event) {
    if(this.isLeftVisible) this.isLeftVisible = false;
    else this.isLeftVisible=true;
    console.log("reached here");
  }

  

  
  deleteFav(event)
  {
     console.log(event.srcElement);
     console.log(event.target);
      var target = event.target || event.srcElement || event.currentTarget;
      console.log(target);
    var idAttr = target.attributes.id;
    var symbol = idAttr.nodeValue;
       this.sortedData = this.sortedData.filter(function( obj ) {
    return obj.symbol !== symbol;

});

this.stockTable = this.stockTable.filter(function( obj ) {
    return obj.symbol !== symbol;
  });

  }


   async getSymbols(symbol: string): Promise<number> {
   
    var api = "http://st-env.us-west-1.elasticbeanstalk.com/api/getSymbols?symbol="+symbol;
        
    
    const response = await this.http.get(api).toPromise();

    console.log(response);
            for(var i = 1; i < response.json().length; i++){
    
                this.stocks = this.stocks.filter(function( obj ) {
                      console.log("objsym:"+ obj.symbol);
                      console.log("respsym:"+response.json()[i]["Symbol"]);
                      return obj.Symbol !== response.json()[i]["Symbol"];
                });
                console.log(this.stocks);
                this.stocks.push(response.json()[i]);
            }

                  

        return;
  }

  
  favEvent()
  {

     var jobj = localStorage.getItem('favItem');
     this.obj= JSON.parse(jobj);
     console.log("val ang:" + this.obj['fav']);
     if(this.obj['fav']==0)
     {
     var k = this.obj['symbol'];
     var c = Number(this.obj['change']).toFixed(2);
     var cp = Number(this.obj['changep']).toFixed(2);
     var nobj = {symbol:this.obj['symbol'], price: +this.obj['last'], change : ""+c+" ("+cp+"%) ", volume: Number(this.obj['volume']).toLocaleString(), link:this.obj['link'], ind: this.obj['ind'], c:this.obj['last'], cp: this.obj['changep'], v: +this.obj['volume']};

      this.stockTable.push(nobj);

      this.sortedData = this.stockTable.slice();
      this.obj['fav']=1;
      localStorage.setItem('favItem',JSON.stringify(this.obj));

     }
     else
     {
        var symbol = this.obj['symbol'];
        
         this.sortedData = this.sortedData.filter(function( obj ) {
          return obj.symbol !== symbol;});

         this.stockTable = this.stockTable.filter(function( obj ) {
         return obj.symbol !== symbol;
         });

        this.obj['fav']=0;
      localStorage.setItem('favItem',JSON.stringify(this.obj));

     }

    
    
  }


  filterStocks (symbol: string) {

    if(symbol!=""&&symbol.length%2==1)
    this.getSymbols(symbol);
 

    return this.stocks.filter(stock =>
      stock.Symbol.toLowerCase().indexOf(symbol.toLowerCase()) === 0);
      

  }


  sortData(sort: Sort) {
     const data = this.stockTable.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'symbol': return this.compare(a.symbol, b.symbol, isAsc);
        case 'price': return this.compare(a.price, b.price, isAsc);
        case 'change': return this.compare(a.c, b.c, isAsc);
        case 'changep': return this.compare(a.cp, b.cp, isAsc);
        case 'volume': return this.compare(a.v, b.v, isAsc);
        default: return 0;
      }
    });
    
  }


  compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


autorefresh()
{
   var slide = ""+localStorage.getItem('slide');

   if(slide==""+0)
   {
      this.id = setInterval(() => { this.refresh(); }, 5000);
    console.log(this.id);
    localStorage.setItem('slide',"1");
   }
   else
   {
      clearInterval(this.id);
      localStorage.setItem('slide',"0");

   }

}

async refresh(): Promise<number>
{

    for(var i=0;i<this.sortedData.length;i++)
    {
       var symbol = this.sortedData[i].symbol;
       var api = "http://st-env.us-west-1.elasticbeanstalk.com/api/getStock?symbol="+symbol;
       const response = await this.http.get(api).toPromise();

       var obj = response.json();

       obj = obj["Time Series (Daily)"];

       console.log(obj);
       
       var count =0;
       var j,l;

       for(var k in obj)
       {
          if(count==0)
           j = obj[k];
          if(count==1) l = obj[k];  
          if(count==2) break;
          count++;
       }

       console.log(j['close']);

       let o :number = j['4. close']  - l['4. close']
       var g= "("+Number(o/l['4. close']*100).toFixed(2)+"%)";
        
       console.log(g+")");

       if(this.sortedData[i].change.includes('-') && o>0) this.sortedData[i].link = "http://cs-server.usc.edu:45678/hw/hw8/images/Up.png";
       if(this.sortedData[i].change.includes('-')==false && o<0) "http://cs-server.usc.edu:45678/hw/hw8/images/Down.png"; 
       var num = Number(o).toFixed(2);
       
   this.sortedData[i].change = num;
   this.sortedData[i].c = o;
   this.sortedData[i].cp = o/l['4. close']*100;
   this.sortedData[i].changep = g;
  this.sortedData[i].price = +j['4. close'];
  this.sortedData[i].volume=Number(j['5. volume']).toLocaleString();
  this.sortedData[i].v = +j['5. volume'];

      console.log(l);
      console.log(j);



    }

    
    for(var sd in this.sortedData)
    {
       for(var d in this.stockTable)
       {
          if(this.stockTable[d].symbol==this.sortedData[sd].symbol)
          {
            this.stockTable[d].price = this.sortedData[sd].price;
            this.stockTable[d].volume = this.sortedData[sd].volume;
            this.stockTable[d].change = this.sortedData[sd].change;
            this.stockTable[d].link = this.sortedData[sd].link;
            this.stockTable[d].c = this.sortedData[sd].c;
            this.stockTable[d].cp = this.sortedData[sd].cp;
            this.stockTable[d].v = this.sortedData[sd].v;
          }
       }
    }

    console.log(this.stockTable);

    return 0;
}

  }










