window.onload = function() {myResize()};
window.onscroll = function() {myScroll()};
window.onresize = function() {myResize()};
document.getElementsByTagName('section')[0].addEventListener('click',function() {bodyClick()} );

myResize = () => {
var width = window.innerWidth;
var menuClick = document.querySelectorAll('.hNav > ul > li');
var showSubMenu = document.getElementsByClassName('subMenu');
	for(var i=0;i<showSubMenu.length;i++){
		if(showSubMenu[i].classList.contains('showSubMenu')){
			showSubMenu[i].classList.toggle('showSubMenu');
		}
	}
	if(width<=800){
			document.getElementById('accountBar').className= 'accountBar';
			document.getElementById('cartBar').className= 'cartBar';
			document.getElementById('hNav').removeAttribute('class');
			document.getElementById('hNav').classList.add('fixhNav');
			document.getElementById('section').classList.remove('blur');
			document.getElementById('hLogo').removeAttribute('class');
			document.getElementById('hLogo').classList.add('fixhLogo');
			document.getElementById("hSearch").classList.add('fixhSearch');
			document.getElementById("textSlideShow").style.display = 'none';
			document.querySelector('.subscriber input').setAttribute('placeholder','عضویت در خبرنامه');
				for(var i=1;i<menuClick.length;i++){
					menuClick[i].setAttribute('onclick','showSubMenu(this.id)');
				}
	}
	else{
		document.querySelector('.subscriber input').setAttribute('placeholder','E-Mail');
		if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
			document.getElementById('hNav').removeAttribute('class');
			document.getElementById('hNav').classList.add('fixhNav');
			
			document.getElementById("hIcons").classList.add('fixhIcons');
			document.getElementById("hSearch").classList.add('fixhSearch');
			document.getElementById("hLogo").classList.remove('hLogo');
			document.getElementById("hLogo").classList.add('fixhLogo');
			document.getElementById('section').classList.remove('blur');
			document.getElementById('menuIcon').classList.add('fixedMenuIcon');
				for(var i=1;i<menuClick.length;i++){
					menuClick[i].setAttribute('onclick','showSubMenu(this.id)');
				}
		}
		else{
			document.getElementById('searchIcon').style.display='none';
			document.getElementById('hNav').removeAttribute('class');
			document.getElementById('hNav').classList.add('hNav');
			document.querySelector('#hSearch').removeAttribute('class');
			document.getElementById("hLogo").className = "hLogo";
			document.getElementById("hIcons").className = "hIcons";
			document.getElementById('section').classList.remove('blur');
			document.getElementById('hNav').classList.add('hNavHover');
			document.getElementById('menuIcon').classList.remove('fixedMenuIcon');
			document.getElementById("textSlideShow").style.display = 'block';
			///for menu
			for(var i=1;i<menuClick.length;i++){
				menuClick[i].removeAttribute('onclick');
			}
		}
	}
}

myScroll = () => {
	var width = document.body.clientWidth;
	var showSubMenu = document.getElementsByClassName('subMenu');
	var menuClick = document.querySelectorAll('.hNav > ul > li');
		for(var i=0;i<showSubMenu.length;i++){
			if(showSubMenu[i].classList.contains('showSubMenu')){
				showSubMenu[i].classList.toggle('showSubMenu');
			}
		}
	if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
			document.getElementById("hNav").classList.remove('hNav');
			document.getElementById("hNav").classList.add('fixhNav');
			document.getElementById("hIcons").classList.add('fixhIcons');
			document.getElementById("hSearch").classList.add('fixhSearch');
			document.getElementById("hLogo").classList.remove('hLogo');
			document.getElementById("hLogo").classList.add('fixhLogo');
			document.getElementById("textSlideShow").style.display = 'none';
			for(var i=1;i<menuClick.length;i++){
				menuClick[i].setAttribute('onclick','showSubMenu(this.id)');
			}

		if(width>800){
			document.getElementById("slide").classList.add('slideBlur');
			document.getElementById('menuIcon').classList.add('fixedMenuIcon');
			document.getElementById('searchIcon').style.display='block';
			document.getElementById('hNav').classList.remove('hNavHover');
		}
		else{
			document.getElementById('searchIcon').style.display='block';
		}
	}
	else {
			document.getElementById("slide").className = "slideShow";
			document.getElementById("accountBar").className = "accountBar";
			document.getElementById("cartBar").className = "cartBar";
		if(width <= 800){
			document.getElementById('searchIcon').style.display = 'block';
			document.getElementById("hSearch").classList.add('fixhSearch');
		}
		else{
			document.getElementById('searchIcon').style.display='none';
			document.getElementById("textSlideShow").style.display  = 'block';
			document.getElementById('hNav').classList.remove('fixhNav');
			document.getElementById('hNav').classList.remove('toggleMenu');
			document.getElementById('hNav').classList.add('hNav');
			document.querySelector('#hSearch').removeAttribute('class');
			document.getElementById("hLogo").className = "hLogo";
			document.getElementById("hIcons").className = "hIcons";
			document.getElementById('menuIcon').classList.remove('fixedMenuIcon');
			document.getElementById('section').classList.remove('blur');
			document.getElementById('hNav').classList.add('hNavHover');
			///for menu
			for(var i=1;i<menuClick.length;i++){
				menuClick[i].removeAttribute('onclick');
			}

		}
	}
}
showCart = () => {
	var width = document.body.clientWidth;
	console.log(document.getElementById('cartBar'));
	if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
		document.getElementById('cartBar').classList.toggle('fixedCartBar');
		document.getElementById('accountBar').className= 'accountBar';
		document.getElementById('hNav').removeAttribute('class');
		document.getElementById('hNav').classList.add('fixhNav');
		document.getElementById('section').classList.remove('blur');
	}
else {
		if(width>800){
			document.getElementById('cartBar').classList.toggle('toggleCartBar');
		}
		else{
			document.getElementById('cartBar').classList.toggle('fixedCartBar');
		}
		
		document.getElementById('accountBar').className= 'accountBar';
		document.getElementById('hNav').className= 'hNav';
		document.getElementById('hNav').classList.add('hNavHover');
		document.getElementById('section').classList.remove('blur');
	}
}
showAccount = () => {
	var width = document.body.clientWidth;
	if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
		document.getElementById('accountBar').classList.toggle('fixedAccountBar');
		document.getElementById('cartBar').className= 'cartBar';
		document.getElementById('hNav').removeAttribute('class');
		document.getElementById('hNav').classList.add('fixhNav');
		document.getElementById('section').classList.remove('blur');
	}
	else {
			if(width>800){
			document.getElementById('accountBar').classList.toggle('toggleAccountBar');
			}
			else{
			document.getElementById('accountBar').classList.toggle('fixedAccountBar');
			}
		document.getElementById('cartBar').className= 'cartBar';
		document.getElementById('hNav').className= 'hNav';
		document.getElementById('section').classList.remove('blur');
		document.getElementById('hNav').classList.add('hNavHover');
	}
}

showSearch = () => {
	//document.getElementById("hSearch").classList.replace('fixhSearch');
	document.getElementById('hSearch').classList.toggle('togglehSearch');
	document.getElementById("accountBar").className = "accountBar";
	document.getElementById("cartBar").className = "cartBar";
}

showMenu = () => {
	var section = document.getElementById('section');
	var menu = document.getElementById('hNav');
	var showSubMenu = document.getElementsByClassName('subMenu');
		for(var i=0;i<showSubMenu.length;i++){
			if(showSubMenu[i].classList.contains('showSubMenu')){
				showSubMenu[i].classList.toggle('showSubMenu');
			}
		}
	menu.classList.remove('hNavHover');
	menu.classList.toggle('toggleMenu');
	document.getElementById("accountBar").className = "accountBar";
	document.getElementById("cartBar").className = "cartBar";
	if(section.classList.contains('blur')){
		section.classList.remove('blur');
	}
	else {
		section.classList.add('blur');
	}
}
showSubMenu = (id) => {
	console.log(document.getElementById('buyFish'));
	var myId= 'buy' + id;
	var showSubMenu = document.getElementsByClassName('subMenu');
	if(document.getElementById(myId).classList.contains('showSubMenu')){
		document.getElementById(myId).classList.toggle('showSubMenu');
	}
	else{
		for(var i=0;i<showSubMenu.length;i++){
			if(showSubMenu[i].classList.contains('showSubMenu')){
				showSubMenu[i].classList.toggle('showSubMenu');
			}
		}
		document.getElementById(myId).classList.toggle('showSubMenu');
	}
}

bodyClick = () => {
	var width = document.body.clientWidth;
	var showSubMenu = document.getElementsByClassName('subMenu');
	for(var i=0;i<showSubMenu.length;i++){
		if(showSubMenu[i].classList.contains('showSubMenu')){
			showSubMenu[i].classList.toggle('showSubMenu');
		}
	}
	document.getElementById("accountBar").className = "accountBar";
	document.getElementById("cartBar").className = "cartBar";

	if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
	document.getElementById('hNav').removeAttribute('class');
	document.getElementById('hNav').classList.add('fixhNav');
	}
	else{
	document.getElementById('hNav').removeAttribute('class');
	document.getElementById('hNav').classList.add('hNav');
	}

	
	document.getElementById('section').classList.remove('blur');
	document.getElementById('hNav').classList.add('hNavHover');
	document.getElementById('hSearch').classList.remove('togglehSearch');
}