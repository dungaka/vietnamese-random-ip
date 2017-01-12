var vietnameseIps=require('./vn.json');
var ip = require('ip');

function getvietnameseIp(provinceArray){
	var provinceArray=provinceArray||getProvinces(vietnameseIps);
	if(!(provinceArray instanceof Array)){
		provinceArray=[provinceArray];
	}
	var provinceName=getRandomItem(provinceArray);
	var ipAddress=getProvinceRandomIp(provinceName);
	return ipAddress;
}
 
function getProvinceRandomIp(provinceName){
	var ipAddress=null;
	if(vietnameseIps.hasOwnProperty(provinceName)){
		provinceIps=vietnameseIps[provinceName];
	    var item=getRandomItem(provinceIps);
		ipAddress=getRandomIp(item.min,item.max);
	} 
	return ipAddress;
}

function getRandomIp(minIp, maxIp){
	var min=ip.toLong(minIp);
	var max=ip.toLong(maxIp);
	var randomNum=getRandomNum(min,max+1);
	return ip.fromLong(randomNum);
}

function getProvinces(vietnameseIps){
	var provinces=[];
	for(var province in vietnameseIps){
		provinces.push(province);
    }
    return provinces;
}

function getRandomItem(list){
   var index=getRandomNum(0,list.length);
   return list[index]; 
}


function getRandomNum(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

exports.getvietnameseIp=getvietnameseIp;

 