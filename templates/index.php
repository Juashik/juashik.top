
    <body>

        <header>
            <?php include $_SERVER['DOCUMENT_ROOT']."/templates/menu.php"; ?>
        </header>
        <div class="content cloud">
            <div class="caption">
                <p><?php echo "$Title"; ?></p>
            </div>
            <div class="app">
                <?php
                    if($Page == "mail"){
                        include $_SERVER['DOCUMENT_ROOT']."/app/mail.php";
                    }
                ?>
            </div>
        </div>
    </body>