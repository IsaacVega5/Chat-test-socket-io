<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Chat | socker.io</title>
    <link rel="stylesheet" href="./css/index.css">
</head>

<body>
    <div class="cont">
        <div class="user-name">
            <span>Name:</span>
            <input id="input-name" type="text" placeholder="Name...">
        </div>
        <div class="chat-box">
            <ul id="chat-list">
            </ul>
        </div>
        <div class="chat-input">
            <span>Message:</span>
            <div id="msg-input" class="user-input" name="user-msg" contenteditable="true"></div>
            <button id="btn-msg" class="btn-send">Send</button>
        </div>
        <div class="room-input">
            <span>Room:</span>
            <input id="room-input" class="user-input" type="text" name="user-msg">
            <button id="btn-room" class="btn-send">Join</button>
        </div>
    </div>

    <!-- JQuery -->
    <script src="https://code.jquery.com/jquery-3.7.0.min.js"
        integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>

    <!-- Socket.io -->
    <script src="https://cdn.socket.io/4.6.0/socket.io.min.js"
        integrity="sha384-c79GN5VsunZvi+Q/WObgk2in0CbZsHnjEqvFxC5DxHn9lTfNce2WW6h2pH6u/kF+" crossorigin="anonymous">
    </script>

    <!-- Script -->
    <script type="module" src="./js/script.js"></script>
</body>

</html>