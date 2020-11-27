//--------------------------- Proses Pesan Script Coding Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ ------------------------\\

function prosesPesan(update) {



//--------------------------- Jika User Start bot jawab Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ ------------------------\\



  if (update.message) { 



//--------------------------- Jika User Start bot jawab Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ ------------------------\\

var msg = update.message;
var chats = msg.chat.id;
var chatt = msg.chat.type;
var group = msg.chat.title;
var nama = msg.from.first_name;
var username = msg.from.username;
var usernamebot = 'ISI_DENGAN_USERNAME_BOTMU';



//--------------------------- Jika User Start bot jawab Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ ------------------------\\

var pola = /(\/start)/i;

  if (pola.exec(msg.text)) {     

varpesan= {

    'chat_id': msg.chat.id,

    "text": "Hai "+nama+"  , Perkenalkan nama saya @"+usernamebot+"\nAda Yang Bisa saya bantu??",

    'parse_mode' : "HTML", }

tg.request('sendMessage', pesan);}  

//---------------------------------------- Custom Script Mulai Disini -----------------------------------------------\\

//--------------------------- Jika User hallo bot jawab Fuad 『RTX』•ᴮᴬᴰʙᴏʏツ ------------------------\\

var pola = /(\hallo)/i;

  if (pola.exec(msg.text)) {     

varpesan= {

    'chat_id': msg.chat.id,

    "text": "Eh Manusia  Apa Kabar Kamu",

    'parse_mode' : "HTML", }

tg.request('sendMessage', pesan);} 

}  

}