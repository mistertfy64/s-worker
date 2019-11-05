// S-Worker created by mistertfy69#0001

function interface_switch_workers(){
	document.getElementById("interface_upgrades").style.display = "none";
	document.getElementById("interface_workers").style.display = "block";
	document.getElementById("interface_options").style.display = "none";
	document.getElementById("interface_prestige").style.display = "none";
};

function interface_switch_upgrades(){
	document.getElementById("interface_workers").style.display = "none";
	document.getElementById("interface_upgrades").style.display = "block";
	document.getElementById("interface_options").style.display = "none";
	document.getElementById("interface_prestige").style.display = "none";
};

function interface_switch_options(){
	document.getElementById("interface_workers").style.display = "none";
	document.getElementById("interface_upgrades").style.display = "none";
	document.getElementById("interface_options").style.display = "block";
	document.getElementById("interface_prestige").style.display = "none";
};

function interface_switch_prestige(){
	document.getElementById("interface_workers").style.display = "none";
	document.getElementById("interface_upgrades").style.display = "none";
	document.getElementById("interface_options").style.display = "none";
	document.getElementById("interface_prestige").style.display = "block";
};