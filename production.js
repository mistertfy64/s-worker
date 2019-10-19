//S-Worker by mistertfy69#0001


//ProductionDisplayAndUpdate
window.setInterval(function(){
	//Z Workers
	var ZWorkersProduction = Math.floor(ZWorkers * ZWorkersMultiplier);
	clickMoney(ZWorkersProduction);
	document.getElementById("ZWorkersProduction").innerHTML = ZWorkersProduction;
	//Y Workers
	var YWorkersProduction = Math.floor(YWorkersBought * YWorkersMultiplier);
	YTick(YWorkersProduction);
	document.getElementById("YWorkersProduction").innerHTML = YWorkersProduction;
	//X Workers

	
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
