// Worker Ranking - From best to worst
// SABCDEFGHIJKLMNOPQRTUVWXYZ
// put peak pls dont kill me i love you both <3

//S-Worker Created by mistertfy69#0001

//Costs
//Variables
var money = 0;
var tick = 1000;
var tickupgradesBought = 0;
var tickupgradeCost = 10;
var pendingprestigeMoney = 0;
var prestigeMoney = 0;
var prestigeMoneyMultiplier = 0.01;


var upgradeMultiplier = 1;

var ZWorkers = 0;
var ZWorkersBought = 0;
var ZWorkersExponent = 1.6;
var MZ1 = 1;

var YWorkers = 0;
var YWorkersBought = 0;
var YWorkersExponent = 3.25;
var MY1 = 1;

var XWorkers = 0;
var XWorkersBought = 0;
var XWorkersExponent = 6.75;
var MX1 = 1;

var WWorkers = 0;
var WWorkersBought = 0;
var WWorkersExponent = 9.5;
var MW1 = 1;

var VWorkers = 0;
var VWorkersBought = 0;
var VWorkersExponent = 12.25;
var MV1 = 1;

var UWorkers = 0;
var UWorkersBought = 0;
var UWorkersExponent = 15.8;
var MU1 = 1;

var TWorkers = 0;
var TWorkersBought = 0;
var TWorkersExponent = 24.2;
var MT1 = 1;

var SWorkers = 0;
var SWorkersBought = 0;
var SWorkersExponent = 40;
var MS1 = 1;

//Dependent Variables

var MZ = MZ1

var MY = MY1

var MX = MX1

var MW = MW1
	
var MV = MV1

var MU = MU1

var MT = MT1

var MS = MS1

var prestigeMultiplier = (prestigeMoney * prestigeMoneyMultiplier) + 1

//ProductionDisplayAndUpdate
//Z Worker
	
	// Z Cost
	function ZWorkerBuy(number){
		var ZWorkerCost = Math.floor(Math.pow(ZWorkersBought , ZWorkersExponent) + 15); //idk why 
		if(money >= ZWorkerCost){
			money = money - ZWorkerCost;
			ZWorkers = ZWorkers + 1;
			ZWorkersBought = ZWorkersBought + 1;
			document.getElementById('money').innerHTML = money;
			document.getElementById('ZWorkers').innerHTML = ZWorkers;
		}; //end of buying
		var ZWorkerCost = Math.floor(Math.pow(ZWorkersBought , ZWorkersExponent) + 15);
		document.getElementById("ZWorkerCost").innerHTML = ZWorkerCost;
	};

//Y Worker
	// Y Cost
	function YWorkerBuy(number){
		var YWorkerCost = Math.floor(Math.pow(YWorkersBought , YWorkersExponent) + 4500); //idk why 
		if(money>= YWorkerCost){
			money = money - YWorkerCost;
			YWorkers = YWorkers + 1;
			YWorkersBought = YWorkersBought + 1;
			document.getElementById('money').innerHTML = money;
			document.getElementById('YWorkers').innerHTML = YWorkers;
		}; //end of buying
		var YWorkerCost = Math.floor(Math.pow(YWorkersBought , YWorkersExponent) + 4500);
		document.getElementById("YWorkerCost").innerHTML = YWorkerCost;
	};
	
//X Worker
	// X Cost
	function XWorkerBuy(number){
		var XWorkerCost = Math.floor(Math.pow(XWorkersBought, XWorkersExponent) + 250000);;
		if(money >= XWorkerCost){
			money = money - XWorkerCost;
			XWorkers = XWorkers + 1;
			XWorkersBought = XWorkersBought + 1;
			document.getElementById('money').innerHTML = money;
			document.getElementById('XWorkers').innerHTML = XWorkers;
		}; //end of buying
		var XWorkerCost = Math.floor(Math.pow(XWorkersBought, XWorkersExponent) + 250000);
		document.getElementById("XWorkerCost").innerHTML = XWorkerCost;
	};


//W Worker
		//W Cost
	function WWorkerBuy(number){
		var WWorkerCost = Math.floor(Math.pow(WWorkersBought, WWorkersExponent) + 31000000);;
		if(money >= WWorkerCost){
			money = money - WWorkerCost;
			WWorkers = WWorkers + 1;
			WWorkersBought = WWorkersBought + 1;
			document.getElementById('money').innerHTML = money;
			document.getElementById('WWorkers').innerHTML = WWorkers;
		}; //end of buying
		var WWorkerNextCost = Math.floor(Math.pow(WWorkersBought, WWorkersExponent) + 31000000);
		document.getElementById("WWorkerCost").innerHTML = WWorkerCost;
	};
	
	
//V Worker
	//V Cost
	function VWorkerBuy(number){
		var VWorkerCost = Math.floor(Math.pow(VWorkersBought, VWorkersExponent) + 800000000);
		if(money>= VWorkerCost){
			money = money - VWorkerCost;
			VWorkers = VWorkers + 1;
			VWorkersBought = VWorkersBought + 1;
			document.getElementById('money').innerHTML = money;
			document.getElementById('VWorkers').innerHTML = VWorkers;
		}; //end of buying
		var VWorkerNextCost = Math.floor(Math.pow(VWorkersBought, VWorkersExponent) + 800000000);
		document.getElementById("VWorkerCost").innerHTML = VWorkerCost;
	};
	
//U Worker
	//U Cost
	function UWorkerBuy(number){
		var UWorkerCost = Math.floor(Math.pow(UWorkersBought, UWorkersExponent) + 182500000000);;
		if(money >= UWorkerCost){
			money = money - UWorkerCost;
			UWorkers = UWorkers + 1;
			UWorkersBought = UWorkersBought + 1;
			document.getElementById('money').innerHTML = money;
			document.getElementById('UWorkers').innerHTML = UWorkers;
		}; //end of buying
		var UWorkerNextCost = Math.floor(Math.pow(UWorkersBought, UWorkersExponent) + 182500000000);
		document.getElementById("UWorkerCost").innerHTML = UWorkerCost;
	};
	
//T Worker
	//T Cost
	function TWorkerBuy(number){
		var TWorkerCost = Math.floor(Math.pow(TWorkersBought, TWorkersExponent) + 3275000000000);
		if(money >= TWorkerCost){
			money = money - TWorkerCost;
			TWorkers = TWorkers + 1;
			TWorkersBought = TWorkersBought + 1;
			document.getElementById('money').innerHTML = money;
			document.getElementById('TWorkers').innerHTML = TWorkers;
		}; //end of buying
		var TWorkerNextCost = Math.floor(Math.pow(TWorkersBought, TWorkersExponent) + 3275000000000);
		document.getElementById("TWorkerCost").innerHTML = TWorkerCost;
	};


//S Worker
	//S Cost
	function SWorkerBuy(number){
		var SWorkerCost = Math.floor(Math.pow(SWorkersBought, SWorkersExponent) + 1250000000000000);
		if(money >= SWorkerCost){
			money = money - SWorkerCost;
			SWorkers = SWorkers + 1;
			SWorkersBought = SWorkersBought + 1;
			document.getElementById('money').innerHTML = money;
			document.getElementById('SWorkers').innerHTML = SWorkers;
		}; //end of buying
		var SWorkerNextCost = Math.floor(Math.pow(SWorkersBought, SWorkersExponent) + 1250000000000000);
		document.getElementById("SWorkerCost").innerHTML = SWorkerCost;
	};
	
	
//Prestige Update
window.setInterval (function(){
	
	var pendingprestigeMoney = 25 * Math.sqrt(money / 100000000000000);
	
	document.getElementById("pendingprestigeMoney").innerHTML = pendingprestigeMoney
}, 10);

