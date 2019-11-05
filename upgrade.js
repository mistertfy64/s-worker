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
	var TickUpgradeCost = Math.pow(10, (TickUpgradesBought + 1));
	document.getElementById("TickUpgradeCost").innerHTML = TickUpgradeCost;
};

function ZWorker_Upgrade_Tier1(){
	var ZUpgrade1Cost = Math.pow(10000 ,MZ1);
	if (Money >= ZUpgrade1Cost){
		Money = Money - ZUpgrade1Cost;
		MZ1 = MZ1 + 1;
		MZ = MZ1;
		document.getElementById("MZ1").innerHTML = MZ1
	};
	var ZUpgrade1Cost = Math.pow(10000, MZ1);
	document.getElementById("ZUpgrade1Cost").innerHTML = ZUpgrade1Cost;
};


function YWorker_Upgrade_Tier1(){
	var YUpgrade1Cost = Math.pow(15000 ,MY1);
	if (Money >= YUpgrade1Cost){
		Money = Money - YUpgrade1Cost;
		MY1 = MY1 + 1;
		MY = MY1;
		document.getElementById("MY1").innerHTML = MY1
	};
	var YUpgrade1Cost = Math.pow(15000, MY1);
	document.getElementById("YUpgrade1Cost").innerHTML = YUpgrade1Cost;
};
