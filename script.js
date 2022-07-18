const toggleNav = document.getElementsByClassName('fa-solid');


for (i = 0; i < toggleNav.length; i++) {
    toggleNav[i].addEventListener('click', function() {
        this.classList.toggle("fa-xmark")
        this.classList.toggle("fa-bars")
        const menuDrop = document.querySelector('.navigations');
        if (menuDrop.style.display === 'flex') {
            menuDrop.style.display = 'none'
        } else {
            menuDrop.style.display = 'flex';
        };

        const fixedScroll = document.querySelector('body')
        fixedScroll.classList.toggle('fixed')
    })
}