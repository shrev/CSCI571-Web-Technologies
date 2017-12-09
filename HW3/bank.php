
<html>
<head>
<title>Stocks</title>

<script src="https://code.highcharts.com/highcharts.src.js"></script>
</head>
<?php 
header('Access-Control-Allow-Origin: *');
ini_set("allow_url_include", "1");
header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");
?>
<style>


#search_box
{
 margin-top:30px;
 padding-top : 10px;
 padding-left:5px;
 padding-right:5px;
 height:170px;
 width :450px;
 background-color: #F5F5F5;
 border: 0.5px solid #E6E9EC;
}
#search_title
{
  font-family : "Times New Roman", serif;
  font-weight: bold;
  font-style: italic;
  font-size: 30px;
}
#search_box_inner
{
 text-align:left !important;
 margin-left:5px;
}
#mandatory
{
  font-style:italic;
}
#left
{
 background-color:#F2F2F2;
 width : 300px;
 padding-left : 5px;
 font-weight : bold; 
 
}
#right
{
  text-align : center;
  background-color : #FAFAFA;
  width :600px;
}
.right
{
  text-align : center;
  background-color : #FAFAFA;
  width :600px;
}
#stock_info
{
  
  border-collapse: collapse;
}
#stock_info td {
   border: 0.5px solid #E6E9EC;
   
}
#graph
{

margin-top:10px;

}
#ntd
{ 
   padding-left : 5px;
   background-color : #FAFAFA;
   width:900px;
}
</style>
<script>




function test()
{
    var el = document.createElement('div'); 
       el.id = "temp_news";
       el.style.display='none';
       el.innerHTML="xdff";
       document.getElementById('result').appendChild(el);
}






function loadIndicator(ind, api=0)
{

   var sym = document.getElementById('symbol').innerHTML; 
   //document.getElementById('news').style.display="block";
  
   if(!document.getElementById('graph'))
   {
       var el = document.createElement('div'); 
       el.id = "graph";
       el.style.width="900px";
       el.style.height="400px";
       el.style.padding="5px";
       document.getElementById('result').appendChild(el);
   }
   if(!document.getElementById('news'))
   {
     var el = document.createElement('a');

     el.href ="javascript:handleNews();";
     el.id = "news";
     el.style.marginTop = "15px";
     el.style.textDecoration = "none";
     el.style.color="color:#BEBEBE";
     
     document.getElementById('result').appendChild(el);
     
     el = document.createElement('div');
     el.style.marginTop = "15px";
     el.id = "news_toggle";
     el.style.width = "900px";
     el.style.color = "#BEBEBE";
     document.getElementById('news').appendChild(el);

     el = document.createElement('span');
     el.id = "ntext";
     el.style.color = "#BEBEBE";
     el.innerHTML = "click to show stock news";
     document.getElementById('news_toggle').appendChild(el);
     
     el = document.createElement('br');
   
     document.getElementById('news_toggle').appendChild(el);
  
     el = document.createElement('br');
     document.getElementById('news_toggle').appendChild(el);
     
      el = document.createElement('img');
     el.id = "arrow";
     el.value=0;
     el.style.width = "37px";
     el.style.height = "13px";
     el.src="http://cs-server.usc.edu:45678/hw/hw6/images/Gray_Arrow_Down.png";
     document.getElementById('news_toggle').appendChild(el);

     var el = document.createElement('div');
     el.id = "news_table";
     el.style.width="900px";
     el.style.marginTop = "10px";
     document.getElementById('result').appendChild(el);
   }
   document.getElementById('graph').style.border="0.5px solid #E6E9EC";
   //document.getElementById('graph').style.display="none";
  if(ind =='Price')
  {
     
     var obj = document.getElementById('data').innerHTML;
     //console.log(obj);
     obj = JSON.parse(obj);
     
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
  
chart1 =  Highcharts.chart('graph', {
        chart: {
            zoomType: 'x',
            marginRight: 190,
            alignTicks :true,
        },
        title: {
            text: 'Stock Prices '+c
        },
        subtitle: {
            useHTML: true,
            text: "<a href='https://www.alphavantage.co/' target='_blank' style='text-decoration:none'>Source : Alpha Vantage</a>"
        },
        xAxis: {
            type: 'category',
            tickPositions: dates,
            tickmarkPlacement: 'on'
        },
        yAxis: [
          {        
            tickAmount:8,
            title: {
                text: 'Stock Price',  
            },
            },
          {
            tickAmount:8,
            tickInterval: 50000000,
            title: {
               text: 'Volume',  
            },
            opposite: true,
            endOnTick: false,
        }],
        legend: {
            enabled: true,
             align: 'right',
             verticalAlign: 'middle',
             layout: 'vertical',
        },
        plotOptions: {
            area: {
                fillColor: '#F1928F',
                marker: {
                    radius: 0
                },
                lineWidth: 1,
                lineColor: '#E7351C',
                threshold: null,
                },
            column: {
              connectNulls: true,
              pointWidth: 4,
              borderColor:'#E7351C',
              borderWidth:1
        },
        series: {
           pointWidth: 5,
        },
        },
       series: [ 
           {
            type: 'area',
            name: sym,
            data: arr2,
            color: '#E7351C',
            yAxis: 0,
            marker: {
                fillColor: '#E7351C'
            },
           tooltip: {

                borderColor: '#E7351C',
                borderRadius: 4,
                pointFormatter: function() {
                return '<br><span style="color:#E7351C">\u25CF</span> ' + this.series.name +': <b>' + Number(this.y).toFixed(2)+'</b><br/>';
                }
        }
         },
        {
          type: 'column',
          name: sym+' Volume',
          data: x2,
          yAxis: 1,
          pointWidth: 4,
          color: '#ffffff'
        }]
    });
  
   chart1.yAxis[0].setExtremes(chart1.yAxis[0].min-5, chart1.yAxis[0].max);
   //chart1.xAxis[0].setTickInterval(3600*1000*24*7);
}
  else
{
  var sym = document.getElementById('symbol').innerHTML;
  //alert(sym + " " +ind)
  var url = "https://www.alphavantage.co/query?function="+ind+"&symbol="+sym+"&interval=daily&time_period=10&series_type=close&apikey=LLM792ZBPXIAQZOI&outputsize=full";
  var xmlhttp = new XMLHttpRequest();
   xmlhttp.open("GET", url, false);
   xmlhttp.send(null);
   var doc=xmlhttp.responseText;
   var obj = JSON.parse(doc); 
  // alert(""+doc);
   document.getElementById('graph').innerHTML="";
 
   var gtitle = obj['Meta Data']['2: Indicator'];
   obj = obj['Technical Analysis: '+ind]

   if(ind=='SMA'||ind=='EMA'||ind=='RSI'||ind=='ADX'||ind=='CCI')
  {
   
   var arr=[];
   var dates=[];
   count=0;
   var f=0;
   var newd=0;
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
  
     var charts2 =  Highcharts.chart('graph', {
        chart: {
            zoomType: 'x',
            marginRight: 120,
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
                    enabled :true,
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
             align: 'right',
             verticalAlign: 'middle',
             layout: 'vertical',
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
    }
    else if(ind == 'STOCH' )
    {
  var count=0;
   var arr=[];
   var arr2=[];
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
      count++;
      if(f.getUTCMonth()==d.getUTCMonth()) break;
   }
  
     var charts2 =  Highcharts.chart('graph', {
        chart: {
            zoomType: 'x',
            marginRight: 130,
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
                    enabled :true,
                    radius: 2
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
             align: 'right',
             verticalAlign: 'middle',
             layout: 'vertical',
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
    
    }     
  else if(ind == 'BBANDS' || ind=='MACD')
    {
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
  
     var charts2 =  Highcharts.chart('graph', {
        chart: {
            zoomType: 'x',
            marginRight: 170,
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
                    enabled :true,
                    radius: 2
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
             align: 'right',
             verticalAlign: 'middle',
             layout: 'vertical',
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
    
    }   
    else 
 {
    alert("Error! Service is Down Try again");
 }  
   
 }
 
}



















</script>





<body>
<center>
<div id="search_box">
<font id="search_title">Stock Search</font>
<hr color="#E3E3E3">
<br>
<div id="search_box_inner">
<form method="POST" name="stock_form" id="stock_form">
<label id="l">Enter Stock Ticker Symbol:*</label>
<input type="text" id="sname" name="ticker" value = "<?php echo isset($_POST['ticker'])? $_POST['ticker'] : '' ?>" style="width:170px"><br>
<input type="submit"  id="ssearch" name="search" value="Search" style="padding-top:3px;padding-bottom:3px;padding-left:15px;padding-right:15px;margin-top:10px;background-color:white;border-radius:5px">
<input type="button" id="clear" onclick="clearForm();" value="Clear" style="padding-top:3px;padding-bottom:3px;padding-left:15px;padding-right:15px;margin-right:30px;margin-top:10px;margin-left:8px;background-color:white;border-radius:5px">
<br>
*<font id="mandatory"> - Mandatory fields.</font>
</form>
</div>
</div>
<div id="result" name="result">
<table name="stock_info" id="stock_info" style="margin-top:10px">
<?php

 if(!empty($_POST)) 
 {
   $search = $_POST["ticker"];
   if($search == "" || $search ==" ")
   {
     echo "<script>alert('Please enter a symbol')</script>";
   }
   else
   {
     $result = curlTSI($search);
     $result = json_decode($result,true);
     
      if($result==false) die("Error Service is probably Unavailable please refresh");
     
      if(key($result)=="Error Message"){
        echo "<tr><td id='left'>Error</td><td id='right'>Error : No record has been found please enter a valid symbol</td></tr>"; 
}
      if(key($result)=="Meta Data")
{
     $count = 0;
     $last_day=0;
     $last =0;
     $prev=0;
     $symbol=0;
     $pv = 0;
     foreach($result as $k => $v)
     {
         
       
         if($count ==0)
         {
          foreach($v as $vk => $vv)
          {
           if (strpos($vk, 'Symbol') !== false) 
           {
             $symbol = $vv;
             echo "<tr><td id='left'>Stock Ticker Symbol</td><td class='right' id='symbol'>$vv</td></tr>";
           }
           if (strpos($vk, 'Last Refreshed')!=false)
           {
             $last_day = $vv;         
           }         
          }
          }
           
          if($count==1)
          {
            $pv = $v;
            $count_inner=0;
            foreach($v as $vk => $vv)
            {
               if(strpos($last_day, $vk) !== false)
               {
                  $last=$vv;
                  $count_inner= $count_inner +1;
               }
               else if($count_inner==1)
               {
                  $prev = $vv;
                  $count_inner=$count_inner+1;
               }
               else ;
               if($count_inner == 2) break;
            }
          }
          $count = $count+1;
          if($count ==2) break;
          
      }
   
      
    
      $temp=$last['4. close'];
      echo "<tr><td id='left'>Close</td><td id='right'>$temp</td></tr>";
      $temp =$last['1. open'];
      echo  "<tr><td id='left'>Open</td><td id='right'>$temp</td></tr>";
      $temp=$prev['4. close'];
      echo  "<tr><td id='left'>Previous Close</td><td id='right'>$temp</td></tr>";
      $temp=$last['4. close'] - $prev['4. close'];
      if($temp>0)
      {
         echo "<tr><td id='left'>Change</td><td id='right'>$temp <img src='http://cs-server.usc.edu:45678/hw/hw6/images/Green_Arrow_Up.png' style='height:15px;width:15px'></td></tr>";
      }
      elseif($temp <0)
      {
        echo  "<tr><td id='left'>Change</td><td id='right'>$temp <img src='http://cs-server.usc.edu:45678/hw/hw6/images/Red_Arrow_Down.png' style='height:15px;width:15px'></td></tr>";
      }
      else 
      {
        echo  "<tr><td id='left'>Change</td><td id='right'>$temp</td></tr>";
      }
      $temp= ($last['4. close'] - $prev['4. close'])*100 /$prev['4. close'];
      if($temp>0)
      {
         echo "<tr><td id='left'>Change Percent</td><td id='right'>"; 
         printf("%.2f", $temp);
         echo "% <img src='http://cs-server.usc.edu:45678/hw/hw6/images/Green_Arrow_Up.png' style='height:15px;width:15px'></td></tr>";
      }
      elseif($temp <0)
      {
        echo  "<tr><td id='left'>Change Percent</td><td id='right'>"; 
         printf("%.2f", $temp);
         echo "% <img src='http://cs-server.usc.edu:45678/hw/hw6/images/Red_Arrow_Down.png' style='height:15px;width:15px'></td></tr>";
      }
      else 
      {
        echo  "<tr><td id='left'>Change Percent</td><td id='right'>"; 
         printf("%.2f", $temp);
         echo "%</td></tr>";
      }
      $temp = $last['3. low']."-".$last['2. high'];
      echo  "<tr><td id='left'>Day's Range</td><td id='right'>$temp</td></tr>";
      $temp = $last['5. volume'];
      echo  "<tr><td id='left'>Volume</td><td id='right'>$temp</td></tr>";
      $temp = explode(" ", $last_day)[0];
      echo  "<tr><td id='left'>Timestamp</td><td id='right'>$temp</td></tr>";
      $temp = "<tr><td id='left'>Indicators</td><td id='right'>";
      $symbol = (string)$symbol;
      $link= "javascript:loadIndicator('Price')";
      $temp =  $temp."<a href=$link style='margin-left:5px;margin-right:5px'>Price</a>";
      $link= "javascript:loadIndicator('SMA');";
      $temp =  $temp."<a href=$link style='margin-left:5px;margin-right:5px'>SMA</a>";
      $link= "javascript:loadIndicator('EMA');";
      $temp =  $temp."<a href=$link style='margin-left:5px;margin-right:5px'>EMA</a>";
      $link= "javascript:loadIndicator('STOCH');";
      $temp =  $temp."<a href=$link style='margin-left:5px;margin-right:5px'>STOCH</a>";
      $link= "javascript:loadIndicator('RSI');";
      $temp =  $temp."<a href=$link style='margin-left:5px;margin-right:5px'>RSI</a>";
      $link= "javascript:loadIndicator('ADX');";
      $temp =  $temp."<a href=$link style='margin-left:5px;margin-right:5px'>ADX</a>";
      $link= "javascript:loadIndicator('CCI');";
      $temp =  $temp."<a href=$link style='margin-left:5px;margin-right:5px'>CCI</a>";
      $link= "javascript:loadIndicator('BBANDS');";
      $temp =  $temp."<a href=$link style='margin-left:5px;margin-right:5px'>BBANDS</a>";
      $link= "javascript:loadIndicator('MACD');";
      $temp =  $temp."<a href=$link style='margin-left:5px;margin-right:5px'>MACD</a>"; 
      $temp = $temp."</td></tr>";
       echo $temp;
       $pv = json_encode($pv);
        echo "<div id='data' style='display: none;'>$pv</div>"; 
       echo "<script>loadIndicator('Price')</script>";
  
}
  else
  {
      
   }

   }
   }

function curlTSI($stock_symbol)
{
    $key ='LLM792ZBPXIAQZOI';
    
    $result = file_get_contents("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=$stock_symbol&interval=1min&apikey=$key&datatype=json&outputsize=full");
     
    return $result;  

}

?>
</table>
<?php if(!empty($_GET))
{
?>
<div id="temp_news" style="width:900px;">

<?php
  $s = $_GET['symbol'];
  $s = str_replace("'", "", $s);
  trim($s,"'");
  //echo "https://seekingalpha.com/api/sa/combined/$s.xml";
  $result = file_get_contents("https://seekingalpha.com/api/sa/combined/$s.xml");
  $xml=simplexml_load_string($result) or die("Error Service is probably Unavailable please refresh");
  $i=0;
  date_default_timezone_set('America/New_York');
  $item =array();
  foreach($xml->channel->item as $items)
  {
     $jobj = array();
    
     $str = "";
     $title = $items->title;
     if (strpos($items->link, 'article') !== false) {
             $link = $items->link;
             $pub = (string) $items -> pubDate;
             $pub = strtotime($pub);
             $pub = date('D, d M Y H:i:s',$pub);
             $s = array('title'=>(string)$title, 'link'=>(string)$link, 'pub'=>(string)$pub);  
                     
             array_push($item,array('title'=>(string)$title, 'link'=>(string)$link, 'pub'=>(string)$pub)); 
             //echo count($item);
             $i = $i+1;

       }
     if($i==5) break;
  }
  
  echo json_encode($item);
  
}
?>




</div>
</div>
</center>
</body>
<script>
function handleNews()
{
   var obj =document.getElementById('arrow');
   if(!document.getElementById('arrow')) alert("error");
   if(obj.value==0||obj.value=="0"){
      document.getElementById('arrow').src= "http://cs-server.usc.edu:45678/hw/hw6/images/Gray_Arrow_Up.png";
      obj.value=1;
      //alert("im here");
      document.getElementById('ntext').innerHTML='click to hide stock news';
      document.getElementById('news_table').style.display = "block";
      getData();
     
   }
   else if(obj.value==1)
   { 
     document.getElementById('arrow').src= "http://cs-server.usc.edu:45678/hw/hw6/images/Gray_Arrow_Down.png";
      obj.value=0;
     document.getElementById('ntext').innerHTML='click to show stock news';
     document.getElementById('news_table').style.display = 'none';
     //alert("why this!!");
   }
   else{}
 
   
}


function getData()
{
  var req = false; 
  document
  try{
        // most browsers
        req = new XMLHttpRequest();
    } catch (e){
        // IE
        try{
            req = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            // try an older version
            try{
                req = new ActiveXObject("Microsoft.XMLHTTP");
                
            } catch(e) {
                return false;
            }
        }
    }
    if (!req) return false;
    if (typeof success != 'function') success = function (data) {
       console.log(data);
       parser = new DOMParser();
       var el = parser.parseFromString(data, "text/html");
       //document.getElementById('news_table').innerHTML= el.getElementById('temp_news').innerHTML;
       var jobj = JSON.parse(el.getElementById('temp_news').innerHTML);
       //alert(el.getElementById('temp_news').innerHTML);
       var str="<table id='stock_info'>";
       for(var p in jobj)
       {
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
    }
    req.open("GET", "bank.php?symbol="+document.getElementById('symbol').innerHTML, true);    
    req.send(null);
    return req;
}

function clearForm() {
  document.getElementById("stock_form").reset();
  document.getElementById("sname").value="";
  var child = document.getElementById("stock_info");
  var parent = document.getElementById('result');
  if(child) parent.remove(child);
  child = document.getElementById("news");
   if(child) parent.remove(child);
  child = document.getElementById('news_table');
  if(child) parent.remove(child);
  child = document.getElementById("graph");
  if(child) parent.remove(child);
  
}
function dispDiv()
{
document.getElementById('news').style.display="block";
}
document.getElementById('ssearch').style.marginLeft = document.getElementById("l").offsetWidth;
//alert(document.getElementById("l").offsetWidth);
</script>
</html>
