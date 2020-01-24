// This function is called from the <body onload="..."> tag
function randomBackgroundImage() {
    let rand= Math.floor(Math.random() * 21);
    let background = [
                "url('assets/images/backgrounds/bedge_grunge.png')",
                "url('assets/images/backgrounds/cheap_diagonal_fabric.png')",
                "url('assets/images/backgrounds/doodles.png')",
                "url('assets/images/backgrounds/email-pattern.png')",
                "url('assets/images/backgrounds/foggy_birds.png')",
                "url('assets/images/backgrounds/folk-pattern.png')",
                "url('assets/images/backgrounds/full-bloom.png')",
                "url('assets/images/backgrounds/giftly.png')",
                "url('assets/images/backgrounds/greek-vase.png')",
                "url('assets/images/backgrounds/halftone.png')",
                "url('assets/images/backgrounds/herringbone.png')",
                "url('assets/images/backgrounds/knitting250px.png')",
                "url('assets/images/backgrounds/leaves-pattern.png')",
                "url('assets/images/backgrounds/leaves.png')",
                "url('assets/images/backgrounds/new_year_background.png')",
                "url('assets/images/backgrounds/ricepaper_v3.png')",
                "url('assets/images/backgrounds/seamless_paper_texture.png')",
                "url('assets/images/backgrounds/skulls.png')",
                "url('assets/images/backgrounds/sprinkles.png')",
                "url('assets/images/backgrounds/tree_bark.png')",
                "url('assets/images/backgrounds/triangle-mosaic.png')",
            ];
    document.getElementsByTagName('body')[0].style.backgroundImage=background[rand];
}

// This function is called from the "Toggle Navbar" link
function toggleNavbar() {

    // Get the HTML element with id="navbar"
    // and save that element as a variable
    let navbar = document.getElementById('navbar');

    // if the classlist of our element variable contains class="stylized-navbar"
    // toggle the navbar by replacing its classes
    if (navbar.classList.contains('stylized-navbar')) {
        navbar.classList.replace('stylized-navbar', 'original-navbar');
        navbar.classList.replace('navbar-dark', 'navbar-light');
    } else {
        navbar.classList.replace('original-navbar', 'stylized-navbar');
        navbar.classList.replace('navbar-light', 'navbar-dark');
    }
}
