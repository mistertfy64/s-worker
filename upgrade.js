//S-Worker by mistertfy69#0001

//TickspeedUpgrade

function TickUpgrade(number){
	var TickUpgradeCost = Math.pow(10, (TickUpgradesBought + 1));
	if(Money >= TickUpgradeCost){
		Money = Money - TickUpgradeCost
		Tick = Tick * 0.875
		TickUpgradesBought = TickUpgradesBought + 1
		document.getElementById('Tick').innerHTML = Tick
	}; //end of buying
	var TickUpgradeNextCost = Math.pow(10, (TickUpgradesBought + 1));
	document.getElementById("TickUpgradeCost").innerHTML = TickUpgradeNextCost;
};

function ZWorker_Upgrade_Tier1(){
	var ZUpgrade1Cost = Math.pow(10000 ,ZWorkersMultiplier);
	if (Money >= ZUpgrade1Cost){
		Money = Money - ZUpgrade1Cost;
		ZWorkersMultiplier = ZWorkersMultiplier + 1;
		document.getElementById("ZWorkersMultiplier").innerHTML = ZWorkersMultiplier
	};
	var ZUpgrade1NextCost = Math.pow(10000, ZWorkersMultiplier);
	document.getElementById("ZUpgrade1Cost").innerHTML = ZUpgrade1NextCost;
};
