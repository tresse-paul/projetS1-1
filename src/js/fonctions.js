function carrousel() {
    var images6 = document.querySelectorAll('.image6');
    let d = 2000;
    let delta = 1000;

    images6.forEach(function (img, indice) {
        img.style.zIndex = images6.length - indice;
    });

    let anim6 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim6.add({
        targets: images6,
        translateX: [{ value: '375', duration: d },
        {
            value: '-375', duration: 0, delay: function (img, ind) {
                if (ind == 0) return (2* delta) +d;
                if (ind == 1) return delta;
                return 0;
            }
        },
        {
            value: '0', duration: function (img, ind) {
                if (ind == 2) return 0;
                return d;
            }
        }],
        easing: 'linear',
        delay: function (img, ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2 * delta) + d;
            return (3 * delta) + (2 * d);
        }
    });
}