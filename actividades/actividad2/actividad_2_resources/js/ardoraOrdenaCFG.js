var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=2;
var score=0; scoreMax=30; scoreInc=10; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#004080"; colorButton="#FF8040"; colorText="#FFFFFF"; colorSele="#FFFF00";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=1; scoOkDo=0; scoWrongDo=0; scoMessage="INTENTA DE NUEVO LUGO QUE ESTUDIES"; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="MUY BIEN"; messageTime="CUENTA CON 60 SEGUNDO"; messageError="DEBE MEJOR SU CONOCIMIENTO"; messageErrorG="DEBE MEJOR SU CONOCIMIENTO"; messageAttempts="CUNTA CON DOS INTENTOS"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0aXZpZGFkXzI"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["Q09OVFJPTCBERSBWRVJTSU9ORVM","UkVQTyBTSVRPUklP","RElTRdFPIFdFQg","",""];imaW=["","","","",""];queW=["Un sistema que registra los cambios realizados sobre un archivo","Espacio que se utiliza para almacenar distintas cosas","Es una actividad que consiste en la planificación, diseño e implementación de sitios web","",""]; c=[20,12,10,0,0];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="400";indexG=0;profG=0;dirMedia="actividad_2_resources/media/"; textBNext="Muy bien, Por favor avance";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];
