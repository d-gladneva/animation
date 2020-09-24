window.addEventListener('DOMContentLoaded', () => {
    let devil = document.querySelector('.devil');
    let hedgehog = document.querySelector('.hedgehog');
    let rip = document.querySelector('.rip');
    let play = document.querySelector('.play');
    let reset = document.querySelector('.reset');
    let count = 0;
    let grabbingInterval;
    let f = false;
    let grabbingHedgehog = () => {
        grabbingInterval = requestAnimationFrame(grabbingHedgehog);
        console.log(count);
        count++;
        reset.style.display = 'block';
        play.style.display = 'block';
        if (count < 150) {
            hedgehog.style.display = 'block';
            devil.style.display = 'block';
            devil.style.top = count + 'px';

        } else if (count < 450) {
            hedgehog.style.left = count + 'px';
            devil.style.left = count + 'px';

        } else if (count < 750) {
            hedgehog.style.left = count + 'px';
            devil.style.left = count + 'px';
        } else if (count < 950) {
            rip.style.top = count / 5 + 'px';
            rip.style.display = 'block';

        } else
            cancelAnimationFrame(grabbingInterval);
        console.log(count);
        console.log(f);
    };

    play.addEventListener('click', () => {
        if (f === false) {
            grabbingInterval = requestAnimationFrame(grabbingHedgehog);
            f = true;
        } else {
            cancelAnimationFrame(grabbingInterval);
            f = false;
        }
    });

    reset.addEventListener('click', () => {
        hedgehog.style.display = 'none';
        devil.style.display = 'none';
        rip.style.display = 'none';
        cancelAnimationFrame(grabbingInterval);
        reset.style.display = 'none';
        hedgehog.style.left = '0';
        devil.style.left = '0';
        hedgehog.style.top = '0';
        devil.style.top = '0';
        count = 0;
        f = false;
    });

});



