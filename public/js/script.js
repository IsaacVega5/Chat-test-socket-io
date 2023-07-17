// import {io} from 'socket.io-client';
const socket = io('https://socket-io-server-7rlr.onrender.com');
var room = ""
$( document ).ready(function(){
    //Mensaje de conexión
    socket.on('connect', ()=>{
        msgNew(`<strong>Connected with id:</strong> ${socket.id}`)
    });
    //Recibir mensajes
    socket.on('share-msg', (msg) =>{
        msgNew(msg);
    });

    //Enviar mensaje
    $('#btn-msg').on('click', function(e){
        send();
    });
    $('#msg-input').on('keypress', function(e){
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault();
            send();
        }
    });

    //Unirse a una sala
    $('#btn-room').on('click', function(e){
        joinRoom();
    });
    $('#room-input').on('keypress', function(e){
        if (e.keyCode === 13) {
            e.preventDefault();
            joinRoom();
        }
    });

    function joinRoom(){
        let name = $('#input-name').val();
        let input_room = $('#room-input').val(); //Get user input room

        if(input_room==""){
            room = "";
            return msgNew('<strong>You are in the public chat</strong>')
        };
        room = input_room;

        if(name === "") return alert("Write your name");

        
        // let msgRoom = `<strong style="color:blue">Just join to room:</strong> ${room}`; //Comeback to the user informing his connection to the room

        socket.emit('join-room', room, callback =>{
            msgNew(callback);
        });
        socket.emit('send-msg', `<strong style="color:blue">${name} just join</strong>`, room)
        // msgNew(msgRoom);
    }
    //Enviar un mensaje
    function send(){
        let msg = $('#msg-input').html();
        let name = $('#input-name').val();
        let chat_msg = ""
        if (name=="") return alert("Write your name")
        if (msg=="") return alert("Write your message")
        
        let input_room = $('#room-input').val(); //Get user input room

        if(room === ""){
            chat_msg = input_room === "" ? `<strong>${name}:</strong> ${msg}` : `<strong style="color:red">(Privado) ${name}: </strong> ${msg}`;
        }
        else{
            chat_msg = `<strong style="color:blue">(${room}) ${name}: </strong> ${msg}`
        }

        msgNew(chat_msg);
        socket.emit('send-msg', chat_msg, input_room);
        
        $('#msg-input').html('');
    };

    //Añadir un mensaje a la lista
    function msgNew(msg){
        let lista = document.getElementById('chat-list')
        $('#chat-list').append(`<li>${msg}</li>`);
        $('#chat-list').scrollTop(lista.scrollHeight);
    }
});