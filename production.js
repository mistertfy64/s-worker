//S-Worker by mistertfy69#0001


//ProductionDisplayAndUpdate
window.setInterval(function(){
	//Z Workers
	var ZWorkersProduction = (ZWorkers * ZWorkersMultiplier * UpgradeMultiplier * PrestigeMultiplier);
	clickMoney(ZWorkersProduction);
	document.getElementById("ZWorkersProduction").innerHTML = ZWorkersProduction;
	//Y Workers
	var YWorkersProduction = (YWorkers * YWorkersMultiplier) * UpgradeMultiplier * PrestigeMultiplier;
	YTick(YWorkersProduction);
	document.getElementById("YWorkersProduction").innerHTML = YWorkersProduction;
	//X Workers
	var XWorkersProduction = (XWorkers * XWorkersMultiplier * UpgradeMultiplier * PrestigeMultiplier);
	XTick(XWorkersProduction);
	document.getElementById("XWorkersProduction").innerHTML = XWorkersProduction;
	var WWorkersProduction = (WWorkers * WWorkersMultiplier * UpgradeMultiplier * PrestigeMultiplier);
	WTick(WWorkersProduction);
	document.getElementById("WWorkersProduction").innerHTML = WWorkersProduction
	
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

