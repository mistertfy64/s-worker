//S-Worker by mistertfy69#0001


//ProductionDisplayAndUpdate


window.setInterval(function(){
	var ZWorkersProduction = (ZWorkers * MZ1 * upgradeMultiplier * prestigeMultiplier);
	clickMoney(ZWorkersProduction);
	document.getElementById("ZWorkersProduction").innerHTML = ZWorkersProduction;
	
	var YWorkersProduction = (YWorkers * MY1 * upgradeMultiplier);
	YTick(YWorkersProduction);
	document.getElementById("YWorkersProduction").innerHTML = YWorkersProduction;
	
	var XWorkersProduction = (XWorkers * MX1 * upgradeMultiplier);
	XTick(XWorkersProduction);
	document.getElementById("XWorkersProduction").innerHTML = XWorkersProduction;
	
	var WWorkersProduction = (WWorkers * MW1 * upgradeMultiplier);
	WTick(WWorkersProduction);
	document.getElementById("WWorkersProduction").innerHTML = WWorkersProduction;
	
	var VWorkersProduction = (VWorkers * MV1 * upgradeMultiplier);
	VTick(VWorkersProduction);
	document.getElementById("VWorkersProduction").innerHTML = VWorkersProduction;
	
	var UWorkersProduction = (UWorkers * MU1 * upgradeMultiplier);
	UTick(UWorkersProduction);
	document.getElementById("UWorkersProduction").innerHTML = UWorkersProduction;
	
	var TWorkersProduction = (TWorkers * MT1 * upgradeMultiplier);
	TTick(TWorkersProduction);
	document.getElementById("TWorkersProduction").innerHTML = TWorkersProduction;
	
	var SWorkersProduction = (SWorkers * MS1 * upgradeMultiplier);
	STick(SWorkersProduction);
	document.getElementById("SWorkersProduction").innerHTML = SWorkersProduction;
	
	
}, 0.001);





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

