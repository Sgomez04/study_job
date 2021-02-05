$(document).ready(function () {
    var player1; // player 1 name (principal)
    var player2; //player 2 name (contrincante)
    var jug1; //acumula los puntos del jugador 1
    var jug2; //acumula los puntos del jugador 2
    var ronda; //acumula el numero de rondas por partida
    var count = 0; //acumula el numero de tiradas de cada jugador en una ronda
    var arreglo; //array columnas y filas de la tabla juego
    var turno; //almacena el turno de la partida en cada ronda
    var win; //indica si la ronda termino

    $('#music').prop("volume", 0.4);

    $('#start').click(function () {
        $('#first').hide();
        $('#users').show();
        $('#login').show();
        $('#music').attr("src", "media/music/game1.mp3");
        $('body').attr("style", "background-image: url(media/img/user.gif);");
    });

    /////////////////////////////////////////////////////////////
    /////////////////////// LOGIN USER //////////////////////////
    /////////////////////////////////////////////////////////////

    //Access to menu (player 1)
    $('#access1').click(function () {
        login(1)
    });

    //Access to play (player 2)
    $('#access2').click(function () { login(2) });

    //Function login
    function login(player) {
        $('#error_user').text("");
        $('#error_pass').text("");

        var user_name = $('#user').val();
        var user_pass = $('#password').val();

        if (user_name != player1) {
            //Not empty fields
            if (user_name == "" || user_pass == "") {
                if (user_name == "") {
                    $('#error_user').text(" El campo usuario no puede estar vacio");
                }
                if (user_pass == "") {
                    $('#error_pass').text(" El campo contraseña no puede estar vacio");
                }
                //Check user data
            } else {
                $.ajax({
                    type: "GET",
                    url: "php/login.php",
                    data: { user: user_name, pass: user_pass },
                    dataType: "text",
                    success: function (text) {
                        if (text == "3") {
                            $('#error_user').text(" El usuario no es correcto o no existe");

                        } else if (text == "2") {
                            $('#error_pass').text(" Las contraseña no es correcta");

                        } else if (text == "1") {
                            if (player == 1) {
                                $('#users').hide();
                                $('#game').hide();
                                $('#menu').show();
                                $('#access1').show();
                                $('#access2').hide();
                                player1 = user_name;
                                $('body').attr("style", "background-image: url(media/img/menu.jpg);");

                                $.ajax({
                                    type: "GET",
                                    url: "php/ranking.php",
                                    data: "data",
                                    dataType: "html",
                                    success: function (table) {
                                        $('#table').html(" ");
                                        $('#table').html(table);
                                    }
                                });
                                $('#music').attr("src", "media/music/menu.mp3");
                                $('#name').text("BIENVENID@ " + user_name + " al 3 en raya Zeldero");
                            } else if (player == 2) {
                                $('#users').hide();
                                $('#game').show();
                                $('#menu').hide();
                                $('#music').attr("src", "media/music/game2.mp3");
                                $('body').attr("style", "background-image: url(media/img/game.gif);");
                                $('#splayer').hide();
                                $('#access1').hide();
                                player2 = user_name;
                                init();

                            }

                            alert("Acceso concedido");
                            $('#user').val("");
                            $('#password').val("");

                        } else {
                            alert("El usuario no pudo acceder");
                        }
                    }
                });
            }
        } else {
            alert("No puedes jugar contra ti mismo");
        }
    };

    //Go to back from login
    $('#back').click(function () {
        $('#user').val("");
        $('#password').val("");
        if (!player1) {
            $('body').attr("style", "background-image: url(media/img/user.gif);");
            $('#users').hide();
            $('#first').show();
            $('#music').attr("src", "media/music/main.mp3");

        } else {
            $('body').attr("style", "background-image: url(media/img/menu.jpg);");
            $('#menu').show();
            $('#users').hide();
            $('#register').hide();
            $('#splayer').hide();
            $('#music').attr("src", "media/music/menu.mp3");
        }
    });


    /////////////////////////////////////////////////////////////
    //////////////////// REGISTER NEW USER //////////////////////
    /////////////////////////////////////////////////////////////

    $('#link, #link2').click(function () {
        $('#user').val("");
        $('#password').val("");
        var link = $(this).attr("id");
        if (link == "link") {
            $('#register').show();
            $('#login').hide();
        } else {
            $('#register').hide();
            $('#login').show();
        }
        $('#error_user').text("");
        $('#error_pass').text("");
        $('#new_user').val("");
        $('#new_password').val("");
        $('#rep_password').val("");
    });

    $('#reg').click(function () {
        $('#error_newuser').text("");
        $('#error_newpass1').text("");
        $('#error_newpass2').text("");

        var new_user = $('#new_user').val();
        var new_pass = $('#new_password').val();
        var rep_pass = $('#rep_password').val();


        //Not empty fields
        if (new_user == "" || new_pass == "") {
            if (new_user == "") {
                $('#error_newuser').text(" El campo usuario no puede estar vacio");
            }
            if (new_pass == "") {
                $('#error_newpass1').text(" El campo contraseña no puede estar vacio");
            }
        } else if (new_user.length < 8 || new_user.length > 10 ) {

            $('#error_newuser').text(" El nombre de usuario tiene que tener más 8 carácteres y menos de 10");

        } else {
            //Not diferent passwords
            if (new_pass != rep_pass) {
                $('#error_newpass1, #error_newpass2').text(" Las contraseñas no coinciden");

            } else {
                $.ajax({
                    type: "GET",
                    url: "php/register.php",
                    data: { user: new_user, pass: new_pass },
                    dataType: "text",
                    success: function (text) {
                        if (text == "2") {
                            $('#error_newuser').text(" Ya existe un usuario con ese nombre");

                        } else if (text == "1") {
                            alert("Usuario registrado correctamente");
                            $('#register').hide();
                            $('#login').show();
                        } else {
                            $('#').text(" El usuario no se pudo registrar");
                        }

                    }
                });
            }
        }
    });


    /////////////////////////////////////////////////////////////
    ////////////////////// TABLES POINTS ////////////////////////
    /////////////////////////////////////////////////////////////

    $('#data2').click(function () {
        var php = "php/ranking.php";
        if ($('#data2').val() == "Tus Partidas") {
            $('#data2').val('Ranking General');
            php = "php/player_points.php";
        } else if ($('#data2').val() == "Ranking General") {
            $('#data2').val('Tus Partidas');
            php = "php/ranking.php";
        }
        datas(php);
    });

    //Select data of points
    function datas(page) {
        $.ajax({
            type: "GET",
            url: page,
            data: { name: player1 },
            dataType: "html",
            success: function (table) {
                $('#table').html(table);
            }
        });
    }

    //Function update points of players
    function updatePoints() {
        $.ajax({
            type: "GET",
            url: "php/updatepoints.php",
            data: { user1: player1, user2: player2, p1: jug1, p2: jug2 },
            dataType: "text",
            success: function () { }
        });

    };

    //Show games of the others players
    $('#table').on("click", "tr", function () {
        if ($('#data2').val() != "Ranking General") {
            var user = $(this).children().eq(0).text();
            $.ajax({
                url: 'php/player_points.php',
                data: { name: user },
                type: 'GET',
                dataType: 'html',

                success: function (html) {
                    $('#table').html(html);
                    $('#data2').val('Ranking General');
                }
            });
        }
    });

    /////////////////////////////////////////////////////////////
    //////////////////////// PLAY GAME //////////////////////////
    /////////////////////////////////////////////////////////////

    $('#play').click(function () {

        //Login Player 2
        $('#music').attr("src", "media/music/game1.mp3");
        $('body').attr("style", "background-image: url(media/img/user2.jpg);");
        $('#menu').hide();
        $('#users').show();
        $('#splayer').show();
        $('#login').show();
        $('#access1').hide();
        $('#access2').show();

    });

    //Init parametres
    function init() {
        jug1 = 0;
        jug2 = 0;
        $('#ptsjug1').text(jug1 + " puntos");
        $('#ptsjug2').text(jug2 + " puntos");
        turno = 1;
        $('#player').text('Turno de ' + player1);
        arreglo = new Array();
        for (i = 0; i < 3; i++) {
            arreglo[i] = new Array(3);
        }
        $('#player1').text(player1 + ': ');
        $('#player2').text(player2 + ': ');
        ronda = 0;
    }

    //New game
    $('#restart, #access2').click(function () {
        $('#player').text('Turno de ' + player1);
        $('#content_table td').text('');
        $('#restart').hide();
        $('#exit').hide();
        turno = 1;
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                arreglo[i][j] = -1;
            }
        }

        ronda++;
        count = 0;
    });

    //Funtion check game
    function checkGame() {
        var tie = true;
        for (var i = 0; i < 3; i++) {
            if (arreglo[i][0] == 1 && arreglo[i][1] == 1 && arreglo[i][2] == 1) {
                winner(1);
                tie = false;
            } else if (arreglo[i][0] == 0 && arreglo[i][1] == 0 && arreglo[i][2] == 0) {
                winner(0);
                tie = false;
            } //check column
            else if (arreglo[0][i] == 1 && arreglo[1][i] == 1 && arreglo[2][i] == 1) {
                winner(1);
                tie = false;
            } else if (arreglo[0][i] == 0 && arreglo[1][i] == 0 && arreglo[2][i] == 0) {
                winner(0);
                tie = false;
            } //check diagonal
            else if (arreglo[0][i] == 1 && arreglo[1][i + 1] == 1 && arreglo[2][i + 2] == 1 || arreglo[0][i + 2] == 1 && arreglo[1][i + 1] == 1 && arreglo[2][i] == 1) {
                winner(1);
                tie = false;
            } else if (arreglo[0][i] == 0 && arreglo[1][i + 1] == 0 && arreglo[2][i + 2] == 0 || arreglo[0][i + 2] == 0 && arreglo[1][i + 1] == 0 && arreglo[2][i] == 0) {
                winner(0);
                tie = false;
            }
        }
        if (count == 5 && tie) {
            $('#player').text('TABLAS');
            winner(3);
            alert("Empate. No ganó nadie");
        }
    };

    //Change turns
    $('#content_table tr > td').click(function () {
        var row = $(this).parent('tr').data('row');
        var column = $(this).data('column');
        if (turno == 1 && $(this).text() == "") {
            $(this).text('X');
            $(this).attr('style', 'color:#9904c7');
            arreglo[row][column] = 1;
            turno = 2;
            $('#player').text('Turno de ' + player2);
            count++;
        } else if (turno == 2 && $(this).text() == "") {
            $(this).text('O');
            $(this).attr('style', 'color:#ffffff');
            arreglo[row][column] = 0;
            turno = 1;
            $('#player').text('Turno de ' + player1);

        } else {
            alert('Casilla ocupada');
        }
        checkGame(count);
    });

    //Funtion info win
    function winner(player) {
        if (player == 0) {
            alert('Gana ' + player2);
            jug1 = jug1 - 5;
            jug2 = jug2 + 10;
            $('#player').text('Ganador/a de la ronda nº  ' + ronda + ': ' + player2);

        } else if (player == 1) {
            alert('Gana ' + player1);
            jug1 = jug1 + 10;
            jug2 = jug2 - 5;
            $('#player').text('Ganador/a de la ronda nº  ' + ronda + ': ' + player1);
        }
        $('#restart').show();
        $('#exit').show();
        $('#ptsjug1').text(jug1 + ' puntos');
        $('#ptsjug2').text(jug2 + ' puntos');

    };

    /////////////////////////////////////////////////////////////
    ///////////////////// OTHERS FUNCTIONS /////////////////////
    /////////////////////////////////////////////////////////////

    //Go to menu
    $('#exit').click(function () {
        //show menu pad
        $('body').attr("style", "background-image: url(media/img/menu.jpg);");
        updatePoints();
        $('#game').hide();
        $('#menu').show();
        alert("Ranking Actualizado");
        datas("php/ranking.php");
        $('#music').attr("src", "media/music/menu.mp3");
    });

    //Disconect Acount
    $('#disconect').click(function () {
        $('#menu').hide();
        $('#first').show();
        player1 = "";
        player2 = "";
        alert("¡Has otra. Vuelve pronto!");
        $('#music').attr("src", "media/music/main.mp3");
    });


    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

});