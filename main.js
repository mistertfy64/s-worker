// Worker Ranking - From best to worst
// SABCDEFGHIJKLMNOPQRTUVWXYZ
// put peak pls dont kill me i love you both <3

//S-Worker Created by mistertfy69#0001

//Costs
//Tick = 10^(tick upgrades bought + 1)
//Z Worker = 10*ZWorkers*1.1+1+5 floored $
//Y Worker = ((12.5 * (YWorkersBought + 1) * 1.1 + 1)) floored Z workers
//X Worker = X Workers Bought ^ 1.75 floored Y workers

//Variables
var Money = 0;
var Tick = 1000;
var TickUpgradesBought = 0;
var TickUpgradeCost = 10;
var ZWorkers = 0;
var ZWorkersBought = 0;
var ZWorkersMultiplier = 1;
var YWorkers = 0;
var YWorkersBought = 0;
var YWorkersMultiplier = 1;
var XWorkers = 0;
var XWorkersBought = 0;
var XWorkersMultiplier = 1;


	
	
	

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
		var ZWorkerNextCost = Math.floor(((10 * ZWorkersBought) * 1.1 + 1) + 5);
		document.getElementById("ZWorkerCost").innerHTML = ZWorkerNextCost;
	};

//Y Worker
	// Y Cost
	function YWorkerBuy(number){
		var YWorkerCost = Math.floor((12.5 * (YWorkersBought + 1) * 1.1 + 1)); //idk why 
		if(ZWorkers >= YWorkerCost){
			ZWorkers = ZWorkers - YWorkerCost;
			YWorkers = YWorkers + 1;
			YWorkersBought = YWorkersBought + 1;
			document.getElementById('Money').innerHTML = Money;
			document.getElementById('YWorkers').innerHTML = YWorkers;
		}; //end of buying
		var YWorkerNextCost = Math.floor((12.5 * (YWorkersBought + 1) * 1.1 + 1));
		document.getElementById("YWorkerCost").innerHTML = YWorkerNextCost;
	};
	
//X Worker
	// X Cost
	function XWorkerBuy(number){
		var XWorkerCost = Math.floor((XWorkersBought + 1)^1.75);
		if(ZWorkers >= YWorkerCost){
			YWorkers = YWorkers - YWorkerCost;
			XWorkers = XWorkers + 1;
			YWorkersBought = YWorkersBought + 1;
			document.getElementById('Money').innerHTML = Money;
			document.getElementById('XWorkers').innerHTML = XWorkers;
		}; //end of buying
		var XWorkerNextCost = Math.floor(Math.pow(XWorkersBought, 1.75) + 5);
		document.getElementById("XWorkerCost").innerHTML = XWorkerNextCost;
	};
	
	
	
	