(function (window, document) {

	var menuMobile = document.getElementById('menuMobIcon'),
		pureMenuContainer = document.getElementById('menu'),
		pureMenu = document.getElementById('pureMenu');

	// Evento de click do menu mobile
	menuMobile.addEventListener('click', function() {

		pureMenu.classList.remove('pure-menu-horizontal');

		if (pureMenuContainer.classList.contains('open')) {
			pureMenuContainer.classList.remove('open');
		} else {
			pureMenuContainer.classList.toggle('open');
		}

	});

})(this, this.document);