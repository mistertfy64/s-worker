//S-Worker created by mistertfy69#0001

function prestige_tier1(){
	
	pendingprestigeMoney = 25 * Math.sqrt(money / 100000000000000);
	prestigeMoney = prestigeMoney + pendingprestigeMoney;
	prestigeMultiplier = prestigeMoney * 0.01 + 1;
	
	money = 0;
	ZWorkers = 0;
	ZWorkersBought = 0;
	YWorkers = 0;
	YWorkersBought = 0;
	XWorkers = 0;
	XWorkersBought = 0;
	WWorkers = 0;
	WWorkersBought = 0;
	VWorkers = 0;
	VWorkersBought = 0;
	UWorkers = 0;
	UWorkersBought = 0;
	TWorkers = 0;
	TWorkersBought = 0;
	SWorkers = 0;
	SWorkersBought = 0;
	
	pendingPrestigeMoney = 25 * Math.sqrt(money / 100000000000000);
	
	document.getElementById("pendingprestigeMoney").innerHTML = pendingprestigeMoney
	document.getElementById("prestigeMoney").innerHTML = prestigeMoney
	document.getElementById("prestigeMultiplier").innerHTML = prestigeMultiplier
	
	
}
