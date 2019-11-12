//S-Worker by mistertfy69#0001

//tickspeedUpgrade

function tickUpgrade(number){
	var tickUpgradeCost = Math.pow(10, (tickUpgradesBought + 1));
	if(money >= tickUpgradeCost){
		money = money - tickUpgradeCost
		tick = tick * 0.875
		tickUpgradesBought = tickUpgradesBought + 1
		document.getElementById('tick').innerHTML = tick
	}; //end of buying
	var tickUpgradeCost = Math.pow(10, (tickUpgradesBought + 1));
	document.getElementById("tickUpgradeCost").innerHTML = tickUpgradeCost;
};

function ZWorker_Upgrade_Multiplier_Normal_1(){
	var ZUpgrade1Cost = Math.pow(10000 ,MZ1);
	if (money >= ZUpgrade1Cost){
		money = money - ZUpgrade1Cost;
		MZ1 = MZ1 + 1;
		MZ = MZ1;
		document.getElementById("MZ1").innerHTML = MZ1
	};
	var ZUpgrade1Cost = Math.pow(10000, MZ1);
	document.getElementById("ZUpgrade1Cost").innerHTML = ZUpgrade1Cost;
};


function YWorker_Upgrade_Multiplier_Normal_1(){
	var YUpgrade1Cost = Math.pow(15000 ,MY1);
	if (money >= YUpgrade1Cost){
		money = money - YUpgrade1Cost;
		MY1 = MY1 + 1;
		MY = MY1;
		document.getElementById("MY1").innerHTML = MY1
	};
	var YUpgrade1Cost = Math.pow(15000, MY1);
	document.getElementById("YUpgrade1Cost").innerHTML = YUpgrade1Cost;
};
