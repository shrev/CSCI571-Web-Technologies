
var superchart=null;
var ccount=0;
var sobj;
var iarr = {};
var info_obj ={};
var state={};
state.prev="default";
state.order = 0;
state.current="default";
var dir =0;


var smap = {'price':'tsp','change':'tch','symbol':'tsym','changep':'tchp','volume':'tv'}




function sortDefault()
{

  $('#dop2b').attr('disabled','disabled');
  $('#dop1').html('Default');

  if(state.prev=="default") return;
  if(state.order==0) return;
  if(state.order==1) {
    $('#'+smap[state.prev]).click();
    $('#'+smap[state.prev]).click();
    state.order=0;
  }
  else if(state.order==2) {
    $('#'+smap[state.prev]).click();
    state.order=0;
  }
  else ;

 

}

function sortSymbol()
{
  $('#dop1').html('Symbol');
  $('#dop2b').removeAttr('disabled');
  state.current="symbol";
  if($('#dop2').html()=='Ascending') sortAsc();
  else sortDesc();

}

function sortPrice()
{
  $('#dop1').html('Price');
  $('#dop2b').removeAttr('disabled');
  state.current="price";
  if($('#dop2').html()=='Ascending') sortAsc();
  else sortDesc();

}

function sortVolume()
{
  $('#dop1').html('Volume');
  $('#dop2b').removeAttr('disabled');
  state.current="volume";
  if($('#dop2').html()=='Ascending') sortAsc();
  else sortDesc();

}

function sortChange()
{
  $('#dop1').html('Change');
  $('#dop2b').removeAttr('disabled');
  state.current="change";
  if($('#dop2').html()=='Ascending') sortAsc();
  else sortDesc();

}

function sortChangeP()
{
  $('#dop1').html('Change Percentage');
  $('#dop2b').removeAttr('disabled');
  state.current="changep";
  if($('#dop2').html()=='Ascending') sortAsc();
  else sortDesc();

}


function sortAsc()
{


  $('#dop2').html('Ascending');
  if(state.prev==state.current)
  {
    if(state.order==0)
    {
      $('#'+smap[state.current]).click();
      console.log('clicked');
      state.prev=state.current;
      state.order =1;
    }
    else if(state.order==2)
    {
      $('#'+smap[state.current]).click();
      console.log('clicked');
      $('#'+smap[state.current]).click();
      console.log('clicked');
      state.prev=state.current;
      state.order =1;
    }
    else ;
  }
  else
  {
    $('#'+smap[state.current]).click();
    console.log('clicked');
      state.prev=state.current;
      state.order =1;
  }
}


function sortDesc()
{
  $('#dop2').html('Descending');
  if(state.prev==state.current)
  {
    if(state.order==1)
    {
      $('#'+smap[state.current]).click();
      console.log('clicked');
      state.prev=state.current;
      state.order =2;
    }
    else if(state.order==0)
    {
      $('#'+smap[state.current]).click();
      console.log('clicked');
      $('#'+smap[state.current]).click();
      console.log('clicked');
      state.prev=state.current;
      state.order =2;
    }
    else ;
  }
  else
  {
    $('#'+smap[state.current]).click();
    console.log('clicked');
    $('#'+smap[state.current]).click();
    console.log('clicked');
      state.prev=state.current;
      state.order =2;
  }
}



function checkTime()
{
  var startTime = '09:30:00';
  var endTime = '16:00:00';

  currentDate = new Date()   

  startDate = new Date(currentDate.getTime());
  startDate.setHours(startTime.split(":")[0]);
  startDate.setMinutes(startTime.split(":")[1]);
  startDate.setSeconds(startTime.split(":")[2]);

  console.log(startDate);


  endDate = new Date(currentDate.getTime()); 
  endDate.setHours(endTime.split(":")[0]);
  endDate.setMinutes(endTime.split(":")[1]);
  endDate.setSeconds(endTime.split(":")[2]);

  console.log(endDate);


  valid = startDate < currentDate && endDate > currentDate;

  return valid;
}

var vp,vt;

function nyTime(time)
{
   /*moment.tz.add([
    'America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0',
    'America/New_York|EST EDT|50 40|0101|1Lz50 1zb0 Op0'
]);
   var losAngeles = moment.tz(new Date(),"America/Los_Angeles");
   var ny = losAngeles.clone().tz("America/New_York");


  console.log(ny.format("YYYY-MM-DD HH:mm:ss z"));ny.format("YYYY-MM-DD HH:mm:ss z");*/
console.log("this tin is :"+time);
var date = time;
var utcDate = new Date(date.toUTCString());

  console.log(utcDate.getUTCHours()+":"+utcDate.getUTCMinutes()+":"+utcDate.getUTCSeconds());
 utcDate.setHours(utcDate.getHours()+3);
var usDate = new Date(utcDate);
console.log("conv"+usDate.getUTCHours()+":"+usDate.getUTCMinutes()+":"+usDate.getUTCSeconds());

//console.log(usDate);
   return usDate;

   
}



function parseInfo(res,ind)
{
	//console.log(res);

	obj = JSON.parse(res);

  if(obj['Error Message']||res=="error") {
    
    $('#info_error').css('display','block');
    $('#hist_error').css('display','block');
    $('#news_error').css('display','block');
    $('#indicator_error').css('display','block');

    $('#pbar3').css("display", "none");
  $('#pbar4').css("display", "none");
  $('#pbar2').css("display", "none");
  $('#pbar1').css("display", "none");
  $('#pbar6').css("display", "none");
  $('#pbar7').css("display", "none");
  $('#pbar5').css("display", "none");
  $('#pbar8').css("display", "none");
    return;

  }

   $('#info_error').css('display','none');
    $('#hist_error').css('display','none');
    $('#news_error').css('display','none');
    $('#indicator_error').css('display','none');


    $('#pbar3').css("display", "block");
  $('#pbar4').css("display", "block");
  $('#pbar2').css("display", "block");
  $('#pbar1').css("display", "block");
  $('#pbar6').css("display", "block");
  $('#pbar7').css("display", "block");
  $('#pbar5').css("display", "block");
  $('#pbar8').css("display", "block");

	var top = obj["Meta Data"];
  sobj = obj;

  console.log(top);

  
  var ld;

   info_obj.symbol = top["2. Symbol"].toUpperCase();
   ld=top['3. Last Refreshed'];

	

  var bottom = obj["Time Series (Daily)"];
  var count =1;

  for(p in bottom)
  {
    if(count == 1)
    {
     info_obj.volume = bottom[p]["5. volume"];
     info_obj.low = bottom[p]["3. low"];
     info_obj.high = bottom[p]["2. high"];
     info_obj.timestamp = p;
     info_obj.open = bottom[p]["1. open"];
     info_obj.last = bottom[p]["4. close"];
      info_obj.time = ""+ p;
   }
   if(count==2)
   {
      info_obj.pclose = bottom[p]["4. close"];
   }

   if(count==3) break;
   count++;
  }

  info_obj.change = info_obj.last - info_obj.pclose;
  info_obj.changep = info_obj.change/info_obj.pclose *100;
  info_obj.close = checkTime() ? info_obj.pclose : info_obj.last;
  info_obj.fav=0;

  window.fav = info_obj;
  
  
  display_InfoDiv(info_obj);

  if(ind=='price') chartPrice(obj,info_obj.symbol);
  //else $('#'+ind).click();

  setNews(info_obj.symbol);
  drawHistCharts(obj,info_obj);
  


  }


function handleInd(val)
{ 
   console.log(iarr);
   //alert("here");
   if(val=='price') chartPrice(sobj);
   if(val=='sma') parseSingleInd(val,iarr['sma']);
   if(val=='ema') parseSingleInd(val,iarr['ema']);
   if(val=='rsi') parseSingleInd(val,iarr['rsi']);
   if(val=='adx') parseSingleInd(val,iarr['adx']);
   if(val=='cci') parseSingleInd(val,iarr['cci']);
   if(val=='stoch') parseDoubleInd(val,iarr['stoch']);
   if(val=='bbands') parseTripleInd(val,iarr['bbands']);
   if(val=='macd') parseTripleInd(val,iarr['macd']);

}

function display_InfoDiv(info_obj)
{ 
  $('#pbar1').css("display", "none");
  $('#pbar2').css("display", "none");
  $('#stock_info_tab').css("display", "block");


  var tb = document.createElement('tbody');
  var tab = document.getElementById('stock_info_tab');
  var tb_old = document.getElementById('tbody_1');

  var row;
  row = document.createElement('tr');
  row.innerHTML = '<td><b>Stock Ticker Symbol<b></td><td>'+info_obj.symbol+'</td>';
  tb.appendChild(row);
  row = document.createElement('tr');
  row.innerHTML = '<td><b>Last Price<b></td><td>'+Number(info_obj.last).toFixed(2)+'</td>';
  tb.appendChild(row);
  row = document.createElement('tr');
  if(info_obj.change>0){
  row.innerHTML = '<td><b>Change (Change Percent)<b></td><td>'+Number(info_obj.change).toFixed(2) +' ('+Number(info_obj.changep).toFixed(2)+') <img src="http://cs-server.usc.edu:45678/hw/hw8/images/Up.png" style="height:15px;width:auto" ></td>';
    info_obj.link = "http://cs-server.usc.edu:45678/hw/hw8/images/Up.png";
  }
  else if(info_obj.change<0){
     row.innerHTML = '<td><b>Change (Change Percent)<b></td><td>'+Number(info_obj.change).toFixed(2)+' ('+Number(info_obj.changep).toFixed(2)+') <img src="http://cs-server.usc.edu:45678/hw/hw8/images/Down.png" style="height:15px;width:auto" ></td>';
     info_obj.link = "http://cs-server.usc.edu:45678/hw/hw8/images/Down.png";
  }
  else
  {
     row.innerHTML = '<td><b>Change (Change Percent)<b></td><td>'+Number(info_obj.change).toFixed(2)+' ('+Number(info_obj.changep).toFixed(2)+')</td>';
     info_obj.link = "http://cs-server.usc.edu:45678/hw/hw8/images/Up.png";
  }
  tb.appendChild(row);
  row = document.createElement('tr');
  var days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
  var time = nyTime(new Date());
  var month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var tstr;
  var valid = checkTime(time);/*  if(time.getHours()>=16&&time.getHours()<9)
  tstr = time.getUTCFullYear()+'-'+("0"+(time.getUTCMonth()+1)).slice(-2)+'-'+("0"+(time.getUTCDate())).slice(-2)+' '+("0"+(time.getUTCHours())).slice(-2)+':'+("0"+(time.getUTCMinutes())).slice(-2)+':'+("0"+(time.getUTCSeconds())).slice(-2)+' '+isDT(time);
  else
  tstr = time.getUTCFullYear()+'-'+("0"+(time.getUTCMonth()+1)).slice(-2)+'-'+("0"+(time.getDate())).slice(-2)+' 16:00:00 '+isDT(time);*/
  if(valid) tstr = time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
  else tstr = "16:00:00";
  row.innerHTML= '<td><b>Timestamp<b></td><td>'+info_obj.timestamp+' '+tstr+'EST </td>';
  tb.appendChild(row);
   row = document.createElement('tr');
  row.innerHTML= '<td><b>Open<b></td><td>'+Number(info_obj.open).toFixed(2)+'</td>';
  tb.appendChild(row);
   row = document.createElement('tr');
   var close;
  if(valid) close=Number(info_obj.pclose).toFixed(2); 
  else close = Number(info_obj.last).toFixed(2);
  row.innerHTML= '<td><b>Close<b></td><td>'+close+'</td>';
  tb.appendChild(row);
   row = document.createElement('tr');
   row.innerHTML= '<td><b>Day\'s Range<b></td><td>'+info_obj.low+'-'+info_obj.high+'</td>';
  tb.appendChild(row);
  row = document.createElement('tr');
  row.innerHTML= '<td><b>Volume<b></td><td>'+Number(info_obj.volume).toLocaleString()+'</td>';
  tb.appendChild(row);

  tb_old.innerHTML=tb.innerHTML;
  localStorage.setItem('favItem', JSON.stringify(info_obj));

   document.getElementById('fav').disabled=false;



  


}


function del(el)
{
  //console.log("val :"+info_obj.fav);
  console.log(el.id);
  if(el.id==info_obj.symbol)
  {
    if($('#fav').val()==1){
      $('#fav').val(0);
      info_obj.fav = 0;
    $('#fav_icon_show').css('display','none');
     $('#fav_icon_empty').css('display','block');
     }
    localStorage.setItem('favItem',JSON.stringify(info_obj));
  } 
}

function chartPrice(res)
{


   

  var obj=res;
  var sym = obj["Meta Data"]["2. Symbol"];


   obj = obj["Time Series (Daily)"];
     
     var count=0;
     var arr=[];
     var x = [];
     var dates=[];
     var f=0;
     var newd ;
     var x2=[];
     var arr2 =[];
     var dates2=[];
     var d=0;
     var lastd=0;
      for(var p in obj)
     {
          if(count==0)
          {
              f=new Date(p);
              f.setMonth(f.getUTCMonth()-6);
              newd = new Date(p);
             // alert(f.getUTCMonth());
          }
           d = new Date(p);
          console.log(typeof(Number(obj[p]['4. close']).toFixed(2)));
          dates2.push(""+d.getUTCFullYear(),""+ d.getUTCMonth(),""+ d.getUTCDate());
          if(count%5==0){
            dates.push(count);
           }
          arr.push([ ""+("0"+(d.getUTCMonth()+1)%12).slice(-2)+"/"+("0" + d.getUTCDate()).slice(-2), parseFloat(obj[p]['4. close'])]); 
          x.push([""+("0"+(d.getUTCMonth()+1)%12).slice(-2)+"/"+("0" + d.getUTCDate()).slice(-2), parseInt(obj[p]['5. volume'])]); 
           count++;
          if(f.getUTCMonth()==d.getUTCMonth() ){
             
             lastd = ""+("0"+(d.getUTCMonth()+1)%12).slice(-2)+"/"+("0" + d.getUTCDate()).slice(-2);
              break;
            }

     }
     for(var i=0;i<x.length;i++)
       {
          x2[i] = x[x.length-i-1];
          arr2[i] = arr[x.length-i-1];
       }
 
     var d2=[];
     console.log(dates.length);
     for(var i=0;i<dates.length;i++)
     {
        dates[i] = count-1 - dates[i];
        console.log(dates[i]);
     }
   
  var h=d;
  // alert(Date.UTC(f));
   var d = new Date(newd);
   var c = '(' +  ("0"+(d.getUTCMonth()+1)%12).slice(-2) +'/'+ ("0" + d.getUTCDate()).slice(-2)+ '/' +d.getUTCFullYear() +')';
   var g =("0"+(d.getUTCMonth()+1)%12).slice(-2) +'/'+ ("0" + d.getUTCDate()).slice(-2);
//chart code
  //alert(h.getUTCFullYear()+" "+ h.getUTCMonth()+" "+ h.getUTCDate());
  

chart1 =  Highcharts.chart('indicator_1', {
        chart: {
            zoomType: 'x',
            alignTicks: true,
            height : 300
        },
        title: {
            text: sym.toUpperCase() + ' Stock Price and Volume'
        },
        subtitle: {
            useHTML: true,
            text: "<a href='https://www.alphavantage.co/' target='_blank' style='text-decoration:none'>Source : Alpha Vantage</a>"
        },
        xAxis: {
            type: 'category',
        },
        yAxis: [
          {        
            tickInterval : 50,
            min:0,
            title: {
                text: 'Stock Price',  
            },
            },
          {
               title: {
               text: 'Volume',  
            },
            opposite: true,
            endOnTick: false,
        }],
        legend: {
            enabled: true,
              align: 'center',
        verticalAlign: 'bottom',
        },
        plotOptions: {
            area: {
                fillColor: '#E6E6FF',
                marker: {
                    radius: 0
                },
                lineWidth: 1,
                lineColor: 'blue',
                threshold: null,
                },
            column: {
              connectNulls: true,
              pointWidth: 4,
              borderColor:'white',
              borderWidth:1
        },
        series: {
           pointWidth: 5,
        },
        },
       series: [ 
           {
            type: 'area',
            name:  'Price',
            data: arr2,
            color: 'blue',
            yAxis: 0,
            marker: {
                fillColor: 'blue'
            },
           tooltip: {

                borderColor: 'blue',
                borderRadius: 4,
                pointFormatter: function() {
                return '<br><span style="color:blue">\u25CF</span> ' + this.series.name +': <b>' + Number(this.y).toFixed(2)+'</b><br/>';
                }
        }
         },
        {
          type: 'column',
          name: 'Volume',
          data: x2,
          yAxis: 1,
          pointWidth: 4,
          color: '#E7351C'
        }],
        exporting: {
        enabled: true,
        url: 'http://export.highcharts.com/'
    }
    });

  superchart = chart1;
  ccount++;

  $('#pbar7').css("display", "none");
  $('#pbar8').css("display", "none");
  $('#indicator_1').css("display", "block");
  document.getElementById('fb').disabled=false;
  document.getElementById('indicator').style.border="0.5px solid #E6E9EC";

  info_obj.ind = "price";
  localStorage.setItem('favItem', JSON.stringify(info_obj));

//highstock code
}


function drawHistCharts(res,info_obj){

    var sym = info_obj.symbol;
     $('#pbar3').css("display", "none");
  $('#pbar4').css("display", "none");
  $('#his_text_1').css("display", "block");

    //document.getElementById('indicator').style.border="0.5px solid #E6E9EC";

    var obj=res;
    obj = obj["Time Series (Daily)"];


   var count=0;
     var arr=[];
     var x = [];
     var dates=[];
     var f=0;
     var newd ;
     var x2=[];
     var arr2 =[];
     var dates2=[];
     var d=0;
     var lastd=0;


   for(var p in obj)
     {
          if(count==0)
          {
              f=new Date(p);
              f.setMonth(f.getUTCMonth()-6);
              newd = new Date(p);
             // alert(f.getUTCMonth());
          }
           d = new Date(p);
          console.log(typeof(Number(obj[p]['4. close']).toFixed(2)));
          dates2.push(""+d.getUTCFullYear(),""+ d.getUTCMonth(),""+ d.getUTCDate());
          if(count%5==0){
            dates.push(count);
           }
          arr.push([Date.UTC(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()), parseFloat(obj[p]['4. close'])]); 
         // x.push([""+("0"+(d.getUTCMonth()+1)%12).slice(-2)+"/"+("0" + d.getUTCDate()).slice(-2), parseInt(obj[p]['5. volume'])]); 
           count++;
          if(count==1000){
             
             lastd = ""+("0"+(d.getUTCMonth()+1)%12).slice(-2)+"/"+("0" + d.getUTCDate()).slice(-2);
              break;
            }

     }
     for(var i=0;i<arr.length;i++)
       {
          //x2[i] = x[x.length-i-1];
          arr2[i] = arr[arr.length-i-1];
       }
 
     var d2=[];
     console.log(arr);
     /*for(var i=0;i<dates.length;i++)
     {
        dates[i] = count-1 - dates[i];
        //console.log(dates[i]);
     }*/
   
  var h=d;
  // alert(Date.UTC(f));
   var d = new Date(newd);
   var c = '(' +  ("0"+(d.getUTCMonth()+1)%12).slice(-2) +'/'+ ("0" + d.getUTCDate()).slice(-2)+ '/' +d.getUTCFullYear() +')';
   var g =("0"+(d.getUTCMonth()+1)%12).slice(-2) +'/'+ ("0" + d.getUTCDate()).slice(-2);



   var chart2 = Highcharts.stockChart('his_text_1', {


        title: {
            text: sym+' Stock Value'
        },

         subtitle: {
            useHTML: true,
            text: "<a href='https://www.alphavantage.co/' target='_blank' style='text-decoration:none'>Source : Alpha Vantage</a>"
        },

        xAxis: {
            gapGridLineWidth: 0,
            type: 'datetime'

        },
        yAxis: {
          min:0,
          tickInterval :50
        },
        rangeSelector: {
            buttons: [
              {
               type: 'week',
               count: 1,
               text: '1w'
             },
             {
              type: 'month',
              count: 1,
              text: '1m'
             },
             {
                type: 'month',
                count: 3,
                text: '3m'
              },    {
                type: 'month',
                count: 6,
                text: '6m'
              },
              {
                type: 'ytd',
                text: 'YTD'
              }, {
                type: 'year',
                count: 1,
                text: '1y'
              },
              {
                type: 'all',
                count: 1,
                text: 'All'
            }],
            selected: 0,
            enabled: true,
            allButtonsEnabled: true,
        },
        tooltip :{
          split :false,
        },
           navigator: {
        xAxis: {
            dateTimeLabelFormats: {
                day: "Jul '%y",
                week: "Jul '%y",
                month: "Jul '%y",
                year: "Jul '%y"
            }
        }
    },
        series: [{
            name: sym,
            type: 'area',
            data: arr2,
            gapSize: 5,
            tooltip: {
                valueDecimals: 2
            },
            fillColor: '#AED6F1',
            threshold: null
        }],
         responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    chart: {
                        height: 300
                    },
                    subtitle: {
                        text: null
                    },
                    navigator: {
                        enabled: false
                    }
                }
            }]
        }
    });

   ccount++;
}


function setNews(symbol)
{

  var nobj; 

  $.ajax({url: "http://st-env.us-west-1.elasticbeanstalk.com/getNews?symbol="+symbol, success: function(result){
        nobj=result;
        console.log(nobj);
        var ih="";
        nobj =nobj['rss']['channel'][0]['item'];
        var days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
        var month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

        console.log(nobj[0]['title']);
        console.log(nobj[0]['title'][0]);
        //consol.log(nobj)
        //("0"+(d.getUTCMonth()+1)%12).slice(-2)
        var count =0;
        for( var p=0;p<nobj.length;p++)
        {
          var title=nobj[p]['title'][0];
          var link =nobj[p]['link'][0];
          var author = nobj[p]['sa:author_name'][0];
          var time = new Date(nobj[p]['pubDate'][0]);

          console.log(time);

          if(link.search('news'))
          {
             ih=ih+"<div class='news col-sm-12'><a target='_blank' style='font-size:15px' href='"+link+"'>"+title+'</a><br><br><br><b>Author : '+author+'<br><br> Date: ' + days[time.getDay()]+', '+ time.getUTCDate()+' '+month[time.getUTCMonth()]+' '+time.getUTCFullYear()+' '+("0"+(time.getUTCHours())).slice(-2)+':'+("0"+(time.getUTCMinutes())).slice(-2)+':'+("0"+(time.getUTCSeconds())).slice(-2)+' '+isDT(time)+'</b></div><br>';
             count++;
         }
         if(count==5)break;
        }

          $('#pbar5').css("display", "none");
          $('#pbar6').css("display", "none");
          $('#news_text_1').css("display", "block");

        document.getElementById('news_text_1').innerHTML=ih;
        if(result=="error") {//parseInfo(stockinfo);  console.log("error here");
        }}, error : function(xhr,status,error){
        console.log(status);
    }});
     
    /*parser = new DOMParser();
    xmlDoc = parser.parseFromString(text,"text/xml");

    x = xmlDoc.getElementsByTagName("channel");
    x = x[0].getElementsByTagName('item');

    for(var i=0; i<x.length;i++)
    {
       var title =  x[i].childNodes[0].nodeValue;
       var link = x[i].childNodes[1].nodeValue;
       var 
    }*/

   
    /*   {
          str=str+"<tr><td id='ntd'><a href='"+jobj[p]['link']+"' style='text-decoration:none;margin-right:15px;' target='_blank'>"+jobj[p]['title']+"</a>Publicated Time : "+jobj[p]['pub']+"</td></tr>";
       }
       str=str+"</table>";
       document.getElementById('news_table').innerHTML =str;
    };
    if (typeof error!= 'function') error = function () {
       alert("Error: something went wrong");
   };
    req.onreadystatechange = function(){
        if(req.readyState == 4) {
            return req.status === 200 ? 
                success(req.responseText) : error(req.status);
        }
    }*/

}


function isDT(date)
{
    // console.log(moment().tz(date,'America/New_York').format());

    return moment([date.getUTCFullYear(),date.getUTCMonth(), date.getUTCDate()]).isDST() ? 'EDT' : 'EST' ;
}



function parseSingleInd(val,obj)
{

  Document
  obj = JSON.parse(obj);
  console.log(obj);
  var ind = val.toUpperCase();
  var arr=[];
   var dates=[];
   count=0;
   var f=0;
   var newd=0;
   var gtitle = obj['Meta Data']['2: Indicator'];
   obj = obj['Technical Analysis: '+ind];

   for(var p in obj)
   {
       if(count==0)
          {
              f=new Date(p);
              f.setMonth(f.getUTCMonth()-6);
              
              newd = new Date(p);
             // alert(f.getUTCMonth());
          }
      
      var d=new Date(p);
      if(count%5==0)
            dates.push(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
      arr.push([Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()), parseFloat(obj[p][ind])]);
      if(f.getUTCMonth()==d.getUTCMonth()) break;
      count++;
   }

    console.log(arr.length);
  
     var charts2 =  Highcharts.chart('indicator_1', {
        chart: {
            zoomType: 'x',
        },
        title: {
            text: gtitle,
        },
        subtitle: {
            useHTML: true,
            text: "<a href='https://www.alphavantage.co/' target='_blank' style='text-decoration:none'>Source : Alpha Vantage</a>"
        },
        plotOptions:{
            line:{
                marker: {
                    enabled :false,
                    radius: 2
                },
                lineWidth: 0.5,
                lineColor: '#E7351C'
               }
        },
        xAxis: { 
           type:'datetime',
            tickInterval: 3600*1000*24*7,
            tickPositions : dates,
           labels: {
            formatter: function() {
                return Highcharts.dateFormat('%m/%d', this.value);
            }   
            },
        },
        yAxis: {           
           title:
            {
              text : ind
            }
},
        tooltip: {
                borderColor: '#E7351C',
                borderRadius: 4,
                xDateFormat: '%m/%d',
                
                 formatter: function() {
                return  Highcharts.dateFormat('%m/%d', this.point.x) +'<br><span style="color:#E7351C">\u25CF</span> ' + this.series.name +': <b>' + this.point.y+'</b><br/>';
            }
            },
           legend: {
            enabled: true,
             align: 'center',
             verticalAlign: 'bottom',
        },
        series: [{
            type: 'line',
            name: ind,
            data: arr,
            color: '#E7351C',
            marker: {
                fillColor: '#E7351C'
             }
            }]
        });
//if sma   
    superchart =charts2;
    ccount++;

     $('#pbar7').css("display", "none");
  $('#pbar8').css("display", "none");
  $('#indicator_1').css("display", "block");

     info_obj.ind = ind;
  localStorage.setItem('favItem', JSON.stringify(info_obj));
   document.getElementById('fb').disabled=false;
}

function parseDoubleInd(val,obj)
{

  obj = JSON.parse(obj);
  console.log(obj);
  var ind = val.toUpperCase();
	
    var count=0;
   var arr=[];
   var arr2=[];
   var keys=[];
   var dates=[];
   var f=0;
   var newd=0;

   var gtitle = obj['Meta Data']['2: Indicator'];
   obj = obj['Technical Analysis: '+ind];

   for(var p in obj)
   {
       if(count==0)
          {
              f=new Date(p);
              f.setMonth(f.getUTCMonth()-6);
              newd = new Date(p);
            // alert(newd);
              for(var k in obj[p])
              {
                  keys.push(k);             
              }
          }
    
      var d=new Date(p);
      if(count%5==0)
            dates.push(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
      arr.push([Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()), parseFloat(obj[p][keys[0]])]);
      arr2.push([Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()), parseFloat(obj[p][keys[1]])]);
      count++;
      if(f.getUTCMonth()==d.getUTCMonth()) break;
   }
  
     var charts2 =  Highcharts.chart('indicator_1', {
        chart: {
            zoomType: 'x',
        },
        title: {
            text: gtitle
        },
        subtitle: {
            useHTML: true,
            text: "<a href='https://www.alphavantage.co/' target='_blank' style='text-decoration:none'>Source : Alpha Vantage</a>"
        },
        plotOptions:{
            line:{
                marker: {
                    enabled :false,
                },
                lineWidth: 0.5,
                
               },
        },
        xAxis: { 
           type:'datetime',
            tickInterval: 3600*1000*24*7,
            tickPositions: dates,
           labels: {
            formatter: function() {
                return Highcharts.dateFormat('%m/%d', this.value);
            }   
            },
        },
        yAxis: {           
           title:
            {
              text : ind
            }
},
        tooltip: {
                borderRadius: 4,
                xDateFormat: '%m/%d',
                
                 formatter: function() {
                return  Highcharts.dateFormat('%m/%d', this.point.x) +'<br><span style="color:'+this.series.color+'">\u25CF</span> ' + this.series.name +': <b>' + this.point.y+'</b><br/>';
            }
            },
           legend: {
            enabled: true,
             align: 'center',
             verticalAlign: 'bottom',
        },
        series: [{
            type: 'line',
            name: ind + " " +keys[0],
            data: arr,
 //           color: '#E7351C',
            },
            {
            type: 'line',
            name: ind +" "+keys[1],
            data: arr2,
           
            }]
        });

   supercharts=charts2;
   ccount++;

    $('#pbar7').css("display", "none");
  $('#pbar8').css("display", "none");
  $('#indicator_1').css("display", "block");

   info_obj.ind = ind;
  localStorage.setItem('favItem', JSON.stringify(info_obj));
   document.getElementById('fb').disabled=false;

}

function parseTripleInd(val,obj)
{


   obj = JSON.parse(obj);
  //console.log(obj);
  var ind = val.toUpperCase();
  
   var gtitle = obj['Meta Data']['2: Indicator'];
   obj = obj['Technical Analysis: '+ind];

  var count=0;
   var arr=[];
   var arr2=[];
   var arr3=[];
   var keys=[];
   var dates=[];
   var f=0;
   var newd=0;
   for(var p in obj)
   {
       if(count==0)
          {
              f=new Date(p);
              f.setMonth(f.getUTCMonth()-6);
              newd = new Date(p);
            // alert(newd);
              for(var k in obj[p])
              {
                  keys.push(k);             
              }
          }
      
      var d=new Date(p);
      if(count%5==0)
            dates.push(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
      arr.push([Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()), parseFloat(obj[p][keys[0]])]);
      arr2.push([Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()), parseFloat(obj[p][keys[1]])]);
       arr3.push([Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()), parseFloat(obj[p][keys[2]])]);
      if(f.getUTCMonth()==d.getUTCMonth()) break;
      count++;
   }
  
     var charts2 =  Highcharts.chart('indicator_1', {
        chart: {
            zoomType: 'x',
        },
        title: {
            text: gtitle
        },
        subtitle: {
            useHTML: true,
            text: "<a href='https://www.alphavantage.co/' target='_blank' style='text-decoration:none'>Source : Alpha Vantage</a>"
        },
        plotOptions:{
            line:{
                marker: {
                    enabled :false,
                },
                lineWidth: 0.5,
                
               },
        },
        xAxis: { 
           type:'datetime',
            tickInterval: 3600*1000*24*7,
            tickPositions: dates,
           labels: {
            formatter: function() {
                return Highcharts.dateFormat('%m/%d', this.value);
            }   
            },
        },
        yAxis: {           
           title:
            {
              text : ind
            }
},
        tooltip: {
                borderRadius: 4,
                xDateFormat: '%m/%d',
                
                 formatter: function() {
                return  Highcharts.dateFormat('%m/%d', this.point.x) +'<br><span style="color:'+this.series.color+'">\u25CF</span> ' + this.series.name +': <b>' + this.point.y+'</b><br/>';
            }
            },
           legend: {
            enabled: true,
             align: 'center',
             verticalAlign: 'bottom',
              },
        series: [{
            type: 'line',
            name: ind + " " +keys[0],
            data: arr,
 //           color: '#E7351C',
            },
            {
            type: 'line',
            name: ind +" "+keys[1],
            data: arr2,
           
            },
            {
            type: 'line',
            name: ind +" "+keys[2],
            data: arr3,
           
            }]
        });

     superchart = charts2;
     ccount++;

      $('#pbar7').css("display", "none");
  $('#pbar8').css("display", "none");
  $('#indicator_1').css("display", "block");
     info_obj.ind = ind;
  localStorage.setItem('favItem', JSON.stringify(info_obj));
   document.getElementById('fb').disabled=false;

}

function donothing(tab)
{
}


function favLink(el)
{ 

  $('#submit_button').removeAttr('disabled');
 
  
  var ind= el.name.toLowerCase();
  var sym = el.innerHTML;
  document.getElementById('ticker').innerHTML = sym.toUpperCase();
  console.log(ind);

  $('#ticker').val(sym.toUpperCase());

   var symbol = sym
     var stockinfo, indicator;
      
        reset();

        $.ajax({url: "http://st-env.us-west-1.elasticbeanstalk.com/api/getStock?symbol="+symbol, success: function(result){
        stockinfo=result;
        if(result!=="error") {
          parseInfo(stockinfo,ind);
          if($('#fav').val()==0){
    $('#fav').val(1);
    console.log("ls : "+JSON.parse(localStorage.getItem('favItem'))['fav']);
    info_obj.fav=1;
    console.log("fav val is :"+info_obj.fav);
    localStorage.setItem('favItem', JSON.stringify(info_obj));
    $('#fav_icon_show').css('display','block');
     $('#fav_icon_empty').css('display','none');
      console.log("ls : "+JSON.parse(localStorage.getItem('favItem'))['fav']);
  }

        }
        else console.log("error here");
    }, error : function(xhr,status,error){
      console.log(status);
    }});

   
    $("#dir1").removeAttr('disabled');
     $('#dir1').click();
     dir=1;

    var arr = ['sma','ema','stoch', 'rsi', 'adx', 'cci', 'bbands','macd'];
    //var fun = [parseSingleInd,parseSingleInd];
    $.each( arr, function( val ) {
        $.ajax({url: "http://st-env.us-west-1.elasticbeanstalk.com/api/getIndicators?symbol="+symbol+"&function="+arr[val], success: function(result){
        indicator=result;
        console.log(val);
        if(result!=="error") {

           iarr[arr[val]]= result;
           console.log("this"+arr[val]);
           if(arr[val]==ind) {

            $('#'+ind).click();
          }
           }//parseInfo(stockinfo,val); 
        else console.log("error here");
        }, error : function(xhr,status,error){
        console.log(status);
    }});
  });



    
}

function clear()
{
  $('#submit_button').attr('disabled','disabled');
  $('#dir1').attr('disabled','disabled');
  $('#ticker').val('');
  reset();
}

function share()
{

   var obj = {};

 

  obj.options = JSON.stringify($('#indicator_1').highcharts().options);
    obj.type = 'image/png';
    obj.async = true;

    var dat = JSON.stringify(obj);
    console.log(ccount);
    //console.log(obj);
   // console.log(dat);
 //alert(Highcharts.charts[0].options.exporting.url);
 console.log($('#indicator_1').highcharts().options);

 var ur = Highcharts.charts[ccount-1].options.exporting.url;
 $.ajax({
        type: "POST",
        url: "http://st-env.us-west-1.elasticbeanstalk.com/share",
        data: dat,
        contentType: "application/json; charset=utf-8",
        success: function (data) {
        	console.log(data);
              FB.ui({	
						app_id:	'148360069227241',	
						method:	'feed',	
						picture: 'http://export.highcharts.com/'+data,
				},	(response)	=>	{	
						if	(response	&&	!response.error_message)	{	
										alert('Shared on Facebook sucessfully');
						}	else	{	
										alert("Not Posted");
						}	
				});	

        },
        function (error) {
        	 console.log(error);
}
    });


//alert('here');*/

}