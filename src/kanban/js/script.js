'use strict'

let btn = document.querySelector('.header__profile-btn');
let toggle = true;
let parentNode = document.querySelector('.header__profile');
let div = document.createElement('div');
div.className = 'header__profile-info';
div.innerHTML =  
`<p class="header__profile-name">Sergey Vasin</p>
<p class="header__profile-position">Frontend Developer</p>
<button class="header__profile-login">login</button>`;

function addMenu () {
	if(!toggle) {
		div.remove();
		btn.classList.remove('header__profile-btn--rotate')
		toggle = true;
		
		return;
	}

	parentNode.after(div);
	btn.classList.add('header__profile-btn--rotate')
	toggle = false;

	return;
}

btn.addEventListener('click', addMenu)