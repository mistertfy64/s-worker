// Worker Ranking - From best to worst
// SABCDEFGHIJKLMNOPQRTUVWXYZ
// put peak pls dont kill me i love you both <3

//S-Worker Created by mistertfy69#0001

//Costs
//Variables
var Money = 0;
var Tick = 1000;
var TickUpgradesBought = 0;
var TickUpgradeCost = 10;

var ZWorkers = 0;
var ZWorkersBought = 0;
var MZ1 = 1;

var YWorkers = 0;
var YWorkersBought = 0;
var MY1 = 1;

var XWorkers = 0;
var XWorkersBought = 0;
var MX1 = 1;

var WWorkers = 0;
var WWorkersBought = 0;
var MW1 = 1;

var VWorkers = 0;
var VWorkersBought = 0;
var MV1 = 1;

var UWorkers = 0;
var UWorkersBought = 0;
var Mu1 = 1;

var TWorkers = 0;
var TWorkersBought = 0;
var MT1 = 1;

var SWorkers = 0;
var SWorkersBought = 0;
var MS1 = 1;

var PrestigeMultiplier = 1;
var UpgradeMultiplier = 1;
//Dependent Variables

var MZ = MZ1

var MY = MY1

var MX = MX1

var MW = MW1
	
var MV = MV1

var Mu = Mu1

var MT = MT1

var MS = MS1


//ProductionDisplayAndUpdate
//Z Worker
	
	// Z Cost
	function ZWorkerBuy(number){
		var ZWorkerCost = Math.floor(((10 * ZWorkersBought)* 1.1 + 1) + 5); //idk why 
		if(Money >= ZWorkerCost){
			Money = Money - ZWorkerCost;
			ZWorkers = ZWorkers + 1;
			ZWorkersBought = ZWorkersBought + 1;
			document.getElementById('Money').innerHTML = Money;
			document.getElementById('ZWorkers').innerHTML = ZWorkers;
		}; //end of buying
		var ZWorkerCost = Math.floor(((10 * ZWorkersBought) * 1.1 + 1) + 5);
		document.getElementById("ZWorkerCost").innerHTML = ZWorkerCost;
	};

//Y Worker
	// Y Cost
	function YWorkerBuy(number){
		var YWorkerCost = Math.floor(Math.pow(YWorkersBought , 3.25) * 1.1 + 4500); //idk why 
		if(Money>= YWorkerCost){
			Money = Money - YWorkerCost;
			YWorkers = YWorkers + 1;
			YWorkersBought = YWorkersBought + 1;
			document.getElementById('Money').innerHTML = Money;
			document.getElementById('YWorkers').innerHTML = YWorkers;
		}; //end of buying
		var YWorkerCost = Math.floor(Math.pow(YWorkersBought , 3.25) * 1.1 + 4500);
		document.getElementById("YWorkerCost").innerHTML = YWorkerCost;
	};
	
//X Worker
	// X Cost
	function XWorkerBuy(number){
		var XWorkerCost = Math.floor(Math.pow(XWorkersBought, 6.75) + 250000);;
		if(Money >= XWorkerCost){
			Money = Money - XWorkerCost;
			XWorkers = XWorkers + 1;
			XWorkersBought = XWorkersBought + 1;
			document.getElementById('Money').innerHTML = Money;
			document.getElementById('XWorkers').innerHTML = XWorkers;
		}; //end of buying
		var XWorkerCost = Math.floor(Math.pow(XWorkersBought, 6.75) + 250000);
		document.getElementById("XWorkerCost").innerHTML = XWorkerCost;
	};

//W Worker
		//W Cost
	function WWorkerBuy(number){
		var WWorkerCost = Math.floor(Math.pow(WWorkersBought, 9.5) + 31000000);;
		if(Money >= WWorkerCost){
			Money = Money - WWorkerCost;
			WWorkers = WWorkers + 1;
			WWorkersBought = WWorkersBought + 1;
			document.getElementById('Money').innerHTML = Money;
			document.getElementById('WWorkers').innerHTML = WWorkers;
		}; //end of buying
		var WWorkerNextCost = Math.floor(Math.pow(WWorkersBought, 9.5) + 31000000);
		document.getElementById("WWorkerCost").innerHTML = WWorkerCost;
	};
	
	
//V Worker
	//V Cost
	function VWorkerBuy(number){
		var VWorkerCost = Math.floor(Math.pow(VWorkersBought, 12.25) + 800000000);
		if(Money>= VWorkerCost){
			Money = Money - VWorkerCost;
			VWorkers = VWorkers + 1;
			VWorkersBought = VWorkersBought + 1;
			document.getElementById('Money').innerHTML = Money;
			document.getElementById('VWorkers').innerHTML = VWorkers;
		}; //end of buying
		var VWorkerNextCost = Math.floor(Math.pow(VWorkersBought, 12.25) + 800000000);
		document.getElementById("VWorkerCost").innerHTML = VWorkerCost;
	};
	
//U Worker
	//U Cost
	function UWorkerBuy(number){
		var UWorkerCost = Math.floor(Math.pow(UWorkersBought, 15.8) + 182500000000);;
		if(Money >= UWorkerCost){
			Money = Money - UWorkerCost;
			UWorkers = UWorkers + 1;
			UWorkersBought = UWorkersBought + 1;
			document.getElementById('Money').innerHTML = Money;
			document.getElementById('UWorkers').innerHTML = UWorkers;
		}; //end of buying
		var UWorkerNextCost = Math.floor(Math.pow(UWorkersBought, 15.8) + 182500000000);
		document.getElementById("UWorkerCost").innerHTML = UWorkerCost;
	};
	
//T Worker
	//T Cost
	function TWorkerBuy(number){
		var TWorkerCost = Math.floor(Math.pow(TWorkersBought, 24.2) + 3275000000000);
		if(Money >= TWorkerCost){
			Money = Money - TWorkerCost;
			TWorkers = TWorkers + 1;
			TWorkersBought = TWorkersBought + 1;
			document.getElementById('Money').innerHTML = Money;
			document.getElementById('TWorkers').innerHTML = TWorkers;
		}; //end of buying
		var TWorkerNextCost = Math.floor(Math.pow(TWorkersBought, 24.2) + 3275000000000);
		document.getElementById("TWorkerCost").innerHTML = TWorkerCost;
	};
	
//S Worker
	//S Cost
	function SWorkerBuy(number){
		var SWorkerCost = Math.floor(Math.pow(SWorkersBought, 40.0) + 1250000000000000);
		if(Money >= SWorkerCost){
			Money = Money - SWorkerCost;
			SWorkers = SWorkers + 1;
			SWorkersBought = SWorkersBought + 1;
			document.getElementById('Money').innerHTML = Money;
			document.getElementById('SWorkers').innerHTML = SWorkers;
		}; //end of buying
		var SWorkerNextCost = Math.floor(Math.pow(SWorkersBought, 40.0) + 1250000000000000);
		document.getElementById("SWorkerCost").innerHTML = SWorkerCost;
	};
	
	
	
	
