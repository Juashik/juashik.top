<!DOCTYPE html>

<html>

    <head>

        <?php include $_SERVER['DOCUMENT_ROOT']."/modules/head.php"; ?>
        <link rel="stylesheet" type="text/css" href="snake.css">

    </head>

    <body onload="main()">

    <script src="snake.js"></script>

    	<?php include $_SERVER['DOCUMENT_ROOT']."/modules/header.php"; ?>

        <div class="content standart-size">

            <div class="information">

                <h1 class="gameOver center">Игра окончена</h1>

                <h1 class="score center"></h1>

                <h3 class="center">Для возвращение в меню нажмите пробел</h3>

            </div>

			<div class="menu">

				<h3 class="play choise center">Играть</h3>

				<h3 class="about center">Об игре</h3>

			</div>

			<div class="about_inf">

				<h3 class="center">Правила игры в Ssssnake:</h3>

				<h2 class="center">

				Вы должны есть красные <span>яблочки</span>,<br>

				увеличивая тем самым свой счёт и длину.<br>

				Если врежетесь в своё тело, то вы проиграете.<br>

				Для управления используйте стрелочки на клавиатуре.

				</h2>

				<p>

				Игру разработал Уловков С.В студент КИП,<br>

				группы 4ПКС-314, в 2017г.<br>

				we19989@mail.ru

				</p>

			</div>

        </div>

    </body>

</html>