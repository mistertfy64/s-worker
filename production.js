//S-Worker by mistertfy69#0001


//ProductionDisplayAndUpdate


window.setInterval(function(){
	var ZWorkersProduction = (ZWorkers * MZ1 * upgradeMultiplier * prestigeMultiplier);
	clickMoney(ZWorkersProduction);
	document.getElementById("ZWorkersProduction").innerHTML = ZWorkersProduction;
	
	var YWorkersProduction = (YWorkers * MY1) * upgradeMultiplier * prestigeMultiplier;
	YTick(YWorkersProduction);
	document.getElementById("YWorkersProduction").innerHTML = YWorkersProduction;
	
	var XWorkersProduction = (XWorkers * MX1 * upgradeMultiplier * prestigeMultiplier);
	XTick(XWorkersProduction);
	document.getElementById("XWorkersProduction").innerHTML = XWorkersProduction;
	
	var WWorkersProduction = (WWorkers * MW1 * upgradeMultiplier * prestigeMultiplier);
	WTick(WWorkersProduction);
	document.getElementById("WWorkersProduction").innerHTML = WWorkersProduction;
	
	var VWorkersProduction = (VWorkers * MV1 * upgradeMultiplier * prestigeMultiplier);
	VTick(VWorkersProduction);
	document.getElementById("VWorkersProduction").innerHTML = VWorkersProduction;
	
	var UWorkersProduction = (UWorkers * MU1 * upgradeMultiplier * prestigeMultiplier);
	UTick(UWorkersProduction);
	document.getElementById("UWorkersProduction").innerHTML = UWorkersProduction;
	
	var TWorkersProduction = (TWorkers * MT1 * upgradeMultiplier * prestigeMultiplier);
	TTick(TWorkersProduction);
	document.getElementById("TWorkersProduction").innerHTML = TWorkersProduction;
	
	var SWorkersProduction = (SWorkers * MS1 * upgradeMultiplier * prestigeMultiplier);
	STick(SWorkersProduction);
	document.getElementById("SWorkersProduction").innerHTML = SWorkersProduction;
	
	
}, 10);





//money Function
function clickMoney(number){
	money = money + number;
	document.getElementById("money").innerHTML = money;
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

