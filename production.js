//S-Worker by mistertfy69#0001


//ProductionDisplayAndUpdate


window.setInterval(function(){
	var ZWorkersProduction = (ZWorkers * MZ1 * UpgradeMultiplier * PrestigeMultiplier);
	clickMoney(ZWorkersProduction);
	document.getElementById("ZWorkersProduction").innerHTML = ZWorkersProduction;
	
	var YWorkersProduction = (YWorkers * MY1) * UpgradeMultiplier * PrestigeMultiplier;
	YTick(YWorkersProduction);
	document.getElementById("YWorkersProduction").innerHTML = YWorkersProduction;
	
	var XWorkersProduction = (XWorkers * MX1 * UpgradeMultiplier * PrestigeMultiplier);
	XTick(XWorkersProduction);
	document.getElementById("XWorkersProduction").innerHTML = XWorkersProduction;
	
	var WWorkersProduction = (WWorkers * MW1 * UpgradeMultiplier * PrestigeMultiplier);
	WTick(WWorkersProduction);
	document.getElementById("WWorkersProduction").innerHTML = WWorkersProduction;
	
	var VWorkersProduction = (VWorkers * MV1 * UpgradeMultiplier * PrestigeMultiplier);
	VTick(VWorkersProduction);
	document.getElementById("VWorkersProduction").innerHTML = VWorkersProduction;
	
	var UWorkersProduction = (UWorkers * Mu1 * UpgradeMultiplier * PrestigeMultiplier);
	UTick(UWorkersProduction);
	document.getElementById("UWorkersProduction").innerHTML = UWorkersProduction;
	
	var TWorkersProduction = (TWorkers * MT1 * UpgradeMultiplier * PrestigeMultiplier);
	TTick(TWorkersProduction);
	document.getElementById("TWorkersProduction").innerHTML = TWorkersProduction;
	
	var SWorkersProduction = (SWorkers * MS1 * UpgradeMultiplier * PrestigeMultiplier);
	STick(SWorkersProduction);
	document.getElementById("SWorkersProduction").innerHTML = SWorkersProduction;
	
}, Tick);





//Money Function
function clickMoney(number){
	Money = Money + number;
	document.getElementById("Money").innerHTML = Money;
};
//Y Production
function YTick(number){
	ZWorkers = ZWorkers + number;
	document.getElementById("ZWorkers").innerHTML = ZWorkers;
};
//X Production
function XTick(number){
	YWorkers = YWorkers + number;
	document.getElementById("YWorkers").innerHTML = YWorkers;
};
//W Production
function WTick(number){
	XWorkers = XWorkers + number
	document.getElementById("XWorkers").innerHTML = XWorkers;
};
//V Production
function VTick(number){
	WWorkers = WWorkers + number
	document.getElementById("WWorkers").innerHTML = WWorkers;
};
//U Production
function UTick(number){
	VWorkers = VWorkers + number
	document.getElementById("VWorkers").innerHTML = VWorkers;
};
//U Production
function TTick(number){
	UWorkers = UWorkers + number
	document.getElementById("UWorkers").innerHTML = UWorkers;
};
//S Production
function STick(number){
	TWorkers = TWorkers + number
	document.getElementById("TWorkers").innerHTML = TWorkers;
};

