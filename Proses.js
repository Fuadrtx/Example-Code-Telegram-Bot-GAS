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

//-------\\ Proses Pesan Script Coding Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ //-------\\
function prosesPesan(update) {

//------- \\ Jika User Start bot jawab Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ //-------\\
  if (update.message) { 

//-------\\ Variable biar di Script g panjang Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ //-------\\
var msg         = update.message;
var chats       = msg.chat.id;
var chatt       = msg.chat.type;
var group       = msg.chat.title;
var nama        = msg.from.first_name;
var username    = msg.from.username;
var usernamebot = '@Fuadrtxbot';
var ownerbot    = '@Fuadrtx';
    
//-------\\ Handle Pesan Teks ------- Start bot jawab Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ //-------\\
var pola = /(\/start)/i;
  if (pola.exec(msg.text)) {     
var pesan= {
    'chat_id': msg.chat.id,
    "text": "Hai "+nama+"  , Perkenalkan nama saya "+usernamebot+"\nDibuat oleh "+ownerbot+"\nAda Yang Bisa saya bantu??",
    'parse_mode' : "HTML", }
tg.request('sendMessage', pesan);}  

//---------------------------------------- Custom Script Mulai Disini -----------------------------------------------\\

//-------\\ Jika User hallo bot jawab Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ //-------\\
var pola = /(\hallo)/i;
  if (pola.exec(msg.text)) {     
var pesan= {
    'chat_id': msg.chat.id,
    "text": "Eh Manusia  Apa Kabar Kamu",
    'parse_mode' : "HTML", }
tg.request('sendMessage', pesan);} 

}  
}
