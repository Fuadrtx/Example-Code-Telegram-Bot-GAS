 /*
Project Name  : Example-Code-Telegram-Bot-GAS
Engine        : Google App Script
Language Code : JavaScript
Date          : 28-Nov-2020 (6:12am)
Last Update   : none
Credit        : @fuadrtx
Info          : Ini merupakan script Bot Telegram sample
Referensi     : github.com
                stackoverflow.com
                core.telegram.org
Terimakasih   : Allah SWT
                script.google.com
*/

//-------\\ Intitial AWAL 『RTX』•ᴮᴬᴰʙᴏʏツ //-------\\
var tg = new telegram.daftar();

//-------\\ Fungction Store User Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ //-------\\
var user = new telegram.user();

//-------\\ Isi Username BOT KAMU TANPA @ Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ //-------\\
var usernamebot = 'ISI_DENGAN_USERNAME_BOTMU';

//-------\\ Fungction simpan token Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ //-------\\
function simpanToken() {
 // isikan token dari @BotFather   Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ
 var token = "ISI_DENGAN_TOKEN";

//-------\\ Fungction Simpan Token jawab Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ //-------\\
return user.setValue('token_'+usernamebot, token);}

//-------\\ Fungction Cek Token Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ //-------\\
function cekToken() {
var token = user.getValue('token_'+usernamebot);
Logger.log(token);}

//-------\\ Fungction simpan token Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ //-------\\
var token = user.getValue('token_'+usernamebot);
tg.setToken(token);

//-------\\ Set Webhook Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ //-------\\
function setWebhook() {
var url = "ISI_DARI_URL_HOOK";
var r = tg.setWebhook(url);
Logger.log(r);}

//-------\\ Output Coding 『RTX』•ᴮᴬᴰʙᴏʏツ //-------\\
function doGet(e) {
return tg.util.outputText("Hanya data POST yang kita proses yak!");}

//-------\\ Fungction Handle Pesan Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ //-------\\
function doPost(e) {  
var update = tg.doPost(e);
  if (update) {
prosesPesan(update);}}

//--------------------------- Custom Fungction taruh aja di bawah sini ------------------------\\

