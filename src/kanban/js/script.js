'use strict'

const btn = document.querySelector('.header__profile-btn');
const parentNode = document.querySelector('.header__profile');
const div = document.createElement('div');
div.className = 'header__profile-info';
div.innerHTML =  
`<p class="header__profile-name">Sergey Vasin</p>
<p class="header__profile-position">Frontend Developer</p>
<button class="header__profile-login">login</button>`;
let showMenu = false;

function addMenu () {
	if(showMenu) {
		div.remove();
		btn.classList.remove('header__profile-btn--rotate')
		showMenu = false;
		
		return;
	}

	parentNode.after(div);
	btn.classList.add('header__profile-btn--rotate')
	showMenu = true;

	return;
}

btn.addEventListener('click', addMenu)