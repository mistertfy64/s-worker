// S-Worker created by mistertfy69#0001

function save(){
	var savefile = {
		Money: Money,
		Tick: Tick,
		TickUpgradesBought: TickUpgradesBought,
		TickUpgradeCost: TickUpgradeCost,
		ZWorkers: ZWorkers,
		ZWorkersBought: ZWorkersBought,
		ZWorkersMultiplier: ZWorkersMultiplier,
		YWorkers: YWorkers,
		YWorkersBought: YWorkersBought,
		YWorkersMultiplier: YWorkersMultiplier,
		XWorkers: XWorkers,
		XWorkersBought: XWorkersBought,
		XWorkersMultiplier: XWorkersMultiplier
	}
localStorage.setItem("savefile",JSON.stringify(savefile));
}

function load(){
	var savegame = JSON.parse(localStorage.getItem("savefile"));
	if (typeof savegame.Money !== "undefined") Money = savegame.Money;
	if (typeof savegame.Tick !== "undefined") Tick = savegame.Tick;
	if (typeof savegame.TickUpgradesBought !== "undefined") TickUpgradesBought = savegame.TickUpgradesBought;
	if (typeof savegame.TickUpgradeCost !== "undefined") TickUpgradeCost = savegame.TickUpgradeCost;
	if (typeof savegame.ZWorkers !== "undefined") ZWorkers = savegame.ZWorkers;
	if (typeof savegame.ZWorkersBought !== "undefined") ZWorkersBought = savegame.ZWorkersBought;
	if (typeof savegame.ZWorkersMultiplier !== "undefined") ZWorkersMultiplier = savegame.ZWorkersMultiplier;
	if (typeof savegame.YWorkers !== "undefined") YWorkers = savegame.YWorkers;
	if (typeof savegame.YWorkersBought !== "undefined") YWorkersBought = savegame.YWorkersBought;
	if (typeof savegame.YWorkersMultiplier !== "undefined") YWorkersMultiplier = savegame.YWorkersMultiplier;
	if (typeof savegame.XWorkers !== "undefined") XWorkers = savegame.XWorkers;
	if (typeof savegame.XWorkersBought !== "undefined") XWorkersBought = savegame.XWorkersBought;
	if (typeof savegame.XWorkersMultiplier !== "undefined") XWorkersMultiplier = savegame.XWorkersMultiplier;
}