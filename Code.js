//--------------------------- Intitial AWAL 『RTX』•ᴮᴬᴰʙᴏʏツ ------------------------\\

var tg = new telegram.daftar();



//---------------------------Fungction Store User Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ ------------------------\\

var user = new telegram.user();



//--------------------------- Isi Username BOT KAMU TANPA @ Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ ------------------------\\

var usernamebot = 'ISI_DENGAN_USERNAME_BOTMU';



//---------------------------Fungction simpan token Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ ------------------------\\

function simpanToken() {

 // isikan token dari @BotFather   Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ

 var token = "ISI_DENGAN_TOKEN";

  

//--------------------------- Fungction Simpan Token jawab Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ ------------------------\\

 return user.setValue('token_'+usernamebot, token);}



//--------------------------- Fungction Cek Token Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ ------------------------\\

function cekToken() {

var token = user.getValue('token_'+usernamebot);

Logger.log(token);}



//--------------------------- Fungction simpan token Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ ------------------------\\

var token = user.getValue('token_'+usernamebot);

tg.setToken(token);



//--------------------------- Set Webhook Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ ------------------------\\

function setWebhook() {

  var url = "ISI_DARI_URL_HOOK";

  var r = tg.setWebhook(url);

  Logger.log(r);

}



//--------------------------- Output Coding 『RTX』•ᴮᴬᴰʙᴏʏツ ------------------------\\

function doGet(e) {

  return tg.util.outputText("Hanya data POST yang kita proses yak!");

}



//--------------------------- Fungction Handle Pesan Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ ------------------------\\

function doPost(e) {  

  // data e kita verifikasi Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ

var update = tg.doPost(e);



//--------------------------- Jika User Start bot jawab Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ ------------------------\\

  if (update) {

prosesPesan(update);}}



//--------------------------- Jika User Start bot jawab Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ ------------------------\\