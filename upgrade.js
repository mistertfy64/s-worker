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
