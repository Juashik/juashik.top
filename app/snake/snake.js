class snake_body{
	constructor(x,y,s=null){
		//создание объекта змейки
		this.x=x;
		this.y=y;
		this.s=s;
        this.pixel = document.getElementsByClassName('r'+this.x+' c'+this.y)[0];
        this.fill();
	}
    
    fill(){
		//заполнение змейки цветом
        if(this.s==null){
            
            this.pixel.className = 'cl r'+this.x+' c'+this.y +' snake_head';
        }
        else{
            this.pixel.className = 'cl r'+this.x+' c'+this.y +' snake_body';
        }
    }
    
    del(){
		//очищение ячейки
        this.pixel.className = 'cl r'+this.x+' c'+this.y;
    }
    
    getS(){
		//получение следующего блока
        return this.s;
    }
    setS(s){
		//установка ссылки на следующий блок
        this.s=s;
		this.fill();
    }
}

var start,end,timer,score//позиции конца, начала, таймер, счёт
var menu = true;//отображение меню
var about = false;//отображение об игре
var game = false;//отображение игры
var inf =false;//отображение счёта
var keypres=true;//возможность нажимать кнопки
var dx=0,dy=1//направление

document.body.onkeydown = function(e){
	//отлов нажатия клавишь
    key = e.keyCode;
    if((about || inf)){
		//закрывает информацию или счёт при нажатии любой клавиши
        hiden_inf();
		hiden_about();
		show_menu();
		delete key; 
    }
	if(menu){
		//взаимодействие с меню
		var play = document.getElementsByClassName('play')[0];
		var aboutt = document.getElementsByClassName('about')[0];
		switch(key){
			case 38:
			case 40:
				play.classList.toggle("choise");
				aboutt.classList.toggle("choise");
				break;
			case 13:
			case 32:
				if(play.classList.contains("choise")){
					show_about();
					about =false;
					clear_table();
					setTimeout(function(){hiden_about();start_game();},4000);
				}
				if(aboutt.classList.contains("choise")){
					show_about();
					}
				hiden_menu();
				break;
		}
		delete key;
	}
	if(game){
		//взаимодействие в игре
		key=key-37;
		if(keypres){
			switch(key){
				case 0:if(dy!=1){dy=-1;dx=0;}
					keypres=false;
					break;
				case 1:if(dx!=1){dy=0;dx=-1;}
					keypres=false;
					break;
				case 2:if(dy!=-1){dy=1;dx=0;}
					keypres=false;
					break;
				case 3:if(dx!=-1){dy=0;dx=1;}
					keypres=false;
					break;
			}
		}
		delete key;
	}
};

function clear_table(){
	//Очищение поля
    if(end!=null){
        let pixel = document.getElementsByClassName('eat')[0];
        pixel.className = pixel.className.substring(0,pixel.className.indexOf(' eat'));
    }
    while(end!=null){
        let pixel = document.getElementsByClassName('r'+(end.x)+' c'+(end.y))[0];
        pixel.className = 'cl r'+end.x+' c'+end.y;
        let tmp =end.getS();
        delete end;
        end=tmp;
    }
}

function start_position(){
	//размещение змейки на стартовую позицию
	start = new snake_body(30,30);
	end = new snake_body(30,29,start);
	end = new snake_body(30,28,end);
	end = new snake_body(30,27,end);
	end = new snake_body(30,26,end);
	end = new snake_body(30,25,end);
    generateEat();
}

function table(){
	//генерация поля
    var content = document.getElementsByClassName('content')[0];
    for( i=0; i<69;i++){
        var row = document.createElement('div');
        row.className = 'r';
        content.appendChild(row)
        for(j=0;j<69;j++){
            var newDiv = document.createElement('div');
            newDiv.className = 'cl r'+i+' c'+j;
            row.appendChild(newDiv)
        }
    }
}

function generateEat(){
	//генерация еды на поле
    do{
        var x=randomaize(), y=randomaize();
        var pixel = document.getElementsByClassName('r'+x+' c'+y)[0];
    }while(!(pixel.className.indexOf('snake_head')==-1 && pixel.className.indexOf('snake_body')==-1&& pixel.className.indexOf('eat')==-1))
    pixel.className+= ' eat';
}

function rel(){
	//обновление поля с проверкой на поедание яблок и врезание в препядствия
    let newX= start.x+dx<0?68:(start.x+dx)%69, newY = start.y+dy<0?68:(start.y+dy)%69;
	var headSnake = document.getElementsByClassName('r'+(newX)+' c'+(newY))[0];
    if(headSnake.className.indexOf('eat')==-1){
        end.del();
        let temp = end.getS();
        delete end;
        end = temp;
    }
    else{
        score+=10;
        generateEat();
    }
    if(headSnake.className.indexOf('snake_body')==-1){
        let tmp = new snake_body(newX,newY);
        start.setS(tmp);
        start = tmp;
    }else{
        clearInterval(timer);
        show_inf();
    }
    keypres=true;
}

function start_game(){
	//запуск игры
	about = false;
	menu = false;
	inf = false;
    game = true;
    dx=0;dy=1;
    score = 0;
    start_position();
    timer = setInterval(function f(){rel(end,start);},75);
}

function main(){
    table();
    show_menu();
}
/*Функции отображения и скрытия слоёв.*/
function show_menu(){
	menu = true;
	about = false;
	game = false;
	inf = false;
    var block = document.getElementsByClassName('menu')[0];
    block.style.display='block';
}

function show_inf(){
	inf = true;
	about = false;
	game = false;
	menu = false;
    var block = document.getElementsByClassName('information')[0];
    block.style.display='block';
    block = document.getElementsByClassName('score')[0];
    block.innerHTML = 'Ваш счёт: '+score;
}

function show_about(){
	about = true;
	menu = false;
	game = false;
	inf = false;
    var block = document.getElementsByClassName('about_inf')[0];
    block.style.display='block';
}

function hiden_about(){
    var block = document.getElementsByClassName('about_inf')[0];
    block.style.display='none';
}

function hiden_menu(){
    var block = document.getElementsByClassName('menu')[0];
    block.style.display='none';
	
}

function hiden_inf(){
    var block = document.getElementsByClassName('information')[0];
    block.style.display='none';
}
	
function randomaize(){
	//генерирует число от 0 до 67
    return Math.floor(Math.random()*66+1);
}
	
