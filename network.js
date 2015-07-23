//funkcija koja ispituje da li imaš interneta na mobitelu
function net(){
	
	var ol=true;
	var net = navigator.network.connection.type;
	if(net=="none"){
		ol=false;
	}
	return ol;
	
}

//funkcija koja na osnovu stanja konekcije nešto radi 
// funkcija(string1, string2, string3)
// gdje je string 1 div koji treba sakriti ako je mobitel offline i otkriti ako je online, null ako ne treba
//string 2 je komponenta za kreiranje id naziva div-a gdje se nalazi greška da je mobitel offline i dugme
// string3 upisati poruku koju æe ispisati ukoliko je korisnik offline, ako se ne upiše, sistem sam ispiše defaultnu poruku.
function netCheck(show,key, off){
	var offline = off || offDefaultMsg;
	
	var divOffline=key+'-offline';
	$('#'+key+'networkStatus').html('');
	var isol= net();
	
	if(!isol){
		$(".netCheckButton").removeClass("ui-btn-active");
		$('#'+divOffline).removeAttr("style");
		$('#'+divOffline+'-text').html(offline);
		if(show){
			$('#'+show).attr("style","display:none;");
		}
		return false;
	}else {
		$(".netCheckButton").removeClass("ui-btn-active");
		$('#'+divOffline).attr("style","display:none;");
		$('#'+divOffline+'-text').html("");
		if(show){
			$('#'+show).removeAttr("style");
		}
		return true;
	}
}


//isto kao i netcheck funkcija samo na on button triger
function netCheckBtn(showBtn, keyBtn, offBtn){
	var offlineBtn = offBtn || null;
	$('#'+keyBtn+'networkStatus').html('Please wait...');
	$('.netCheckButton').attr("disabled","disabled");
	setTimeout(function() {
		$(".netCheckButton").removeClass("ui-btn-active");
		$('.netCheckButton').removeAttr("disabled");
		netCheck(showBtn, keyBtn, offlineBtn);
	}, 1500);
}
