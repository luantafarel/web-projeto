var todasAsImagens = ['img/event1.jpg','img/event2.jpg','img/event3.jpg','img/event4.jpg','img/dota2.jpg'];
var botoes = document.getElementsByClassName('controle');
var img= document.getElementById('slide');
var j =0;
for(var i = 0 ; i < botoes.length ; i++){		
	botoes[i].addEventListener('click',function(e){
							if(e.currentTarget.id=='anterior'){
    								if(j==0){
    									j=todasAsImagens.length - 1;
									img.src= todasAsImagens[j] ;
     									 }
     								 else{
      									j--;
      									img.src=todasAsImagens[j] ;
      								     }
      											  }
   							if(e.currentTarget.id=='proximo'){
   								if(j==(todasAsImagens.length - 1)){
      									j=0;
        								img.src= todasAsImagens[j] ;
     												 }
      								else{
      									j++;
        								img.src= todasAsImagens[j];
      								    }	
    											}
 							 });
					}
function Login(){
	var done=0;
	var username=document.login.username.value;
	username=username.toLowerCase();
	var password=document.login.password.value;
	password=password.toLowerCase();
	if (username=="luantafarel" && password=="luantafarel") { window.location="login.html"; done=1; window.alert("Login válido"); }
		if (username=="outro" && password=="outrosenha") { window.location="login.html"; done=1; window.alert("Login válido"); }
			if (username=="atleticomg" && password=="atleticomg") { window.location="login.html"; done=1; window.alert("Sem titulo"); }
				if (done==0) { alert("Senha ou Usuário inválido."); }
}