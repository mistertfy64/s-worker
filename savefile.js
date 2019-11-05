// S-Worker created by mistertfy69#0001

function save(){
	var savefile = {
		Money: Money,
		Tick: Tick,
		TickUpgradesBought: TickUpgradesBought,
		TickUpgradeCost: TickUpgradeCost,
		
		ZWorkers: ZWorkers,
		ZWorkersBought: ZWorkersBought,
		MZ1: MZ1,
		
		YWorkers: YWorkers,
		YWorkersBought: YWorkersBought,
		MY1: MY1,
		
		XWorkers: XWorkers,
		XWorkersBought: XWorkersBought,
		MX1: MX1,
		
		WWorkers: WWorkers,
		WWorkersBought: WWorkersBought,
		MW1: MW1,
		
		VWorkers: VWorkers,
		VWorkersBought: VWorkersBought,
		MV1: MV1,
		
		UWorkers: UWorkers,
		UWorkersBought: UWorkersBought,
		Mu1: Mu1,
		
		TWorkers: TWorkers,
		TWorkersBought: TWorkersBought,
		MT1: MT1,
		
		SWorkers: SWorkers,
		SWorkersBought: SWorkersBought,
		MS1: MS1,
		
		PrestigeMultiplier: PrestigeMultiplier,
		UpgradeMultiplier: UpgradeMultiplier,
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
	if (typeof savegame.MZ1 !== "undefined") MZ1 = savegame.MZ1;
	
	if (typeof savegame.YWorkers !== "undefined") YWorkers = savegame.YWorkers;
	if (typeof savegame.YWorkersBought !== "undefined") YWorkersBought = savegame.YWorkersBought;
	if (typeof savegame.MY1 !== "undefined") MY1 = savegame.MY1;
	
	if (typeof savegame.XWorkers !== "undefined") XWorkers = savegame.XWorkers;
	if (typeof savegame.XWorkersBought !== "undefined") XWorkersBought = savegame.XWorkersBought;
	if (typeof savegame.MX1 !== "undefined") MX1 = savegame.MX1;
	
	if (typeof savegame.WWorkers !== "undefined") WWorkers = savegame.WWorkers;
	if (typeof savegame.WWorkersBought !== "undefined") WWorkersBought = savegame.WWorkersBought;
	if (typeof savegame.MW1 !== "undefined") WWorkersMultiplie1r = savegame.MW1;
	
	if (typeof savegame.VWorkers !== "undefined") VWorkers = savegame.VWorkers;
	if (typeof savegame.VWorkersBought !== "undefined") VWorkersBought = savegame.VWorkersBought;
	if (typeof savegame.MV1 !== "undefined") MV1 = savegame.MV1;
	
	if (typeof savegame.UWorkers !== "undefined") UWorkers = savegame.UWorkers;
	if (typeof savegame.UWorkersBought !== "undefined") UWorkersBought = savegame.UWorkersBought;
	if (typeof savegame.Mu1 !== "undefined") Mu1 = savegame.Mu1;
	
	if (typeof savegame.TWorkers !== "undefined") TWorkers = savegame.TWorkers;
	if (typeof savegame.TWorkersBought !== "undefined") TWorkersBought = savegame.TWorkersBought;
	if (typeof savegame.MT1 !== "undefined") MT1 = savegame.MT1;
	
	if (typeof savegame.SWorkers !== "undefined") SWorkers = savegame.SWorkers;
	if (typeof savegame.SWorkersBought !== "undefined") SWorkersBought = savegame.SWorkersBought;
	if (typeof savegame.MS1 !== "undefined") MS1 = savegame.MS1;
	
	if (typeof savegame.PrestigeMultiplier !== "undefined") PrestigeMultiplier = savegame.PrestigeMultiplier;
	if (typeof savegame.UpgradeMultiplier !== "undefined") UpgradeMultiplier = savegame.UpgradeMultiplier;
}