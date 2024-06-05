document.addEventListener('DOMContentLoaded', (event) => {
    let slider = document.getElementById('slider');
    let contents1 = document.getElementById('contents1');
    let contents2 = document.getElementById('contents2');
    let contents3 = document.getElementById('contents3');
    let isScrolling = false;

    window.addEventListener('wheel', function(e) {
        if (isScrolling) return;

        let currentY = window.scrollY;
        let viewportHeight = window.innerHeight;
        let headerHeight = document.getElementById('header').offsetHeight;

        if (e.deltaY > 0) {
            // Scroll down
            if (currentY < slider.offsetHeight - headerHeight) {
                isScrolling = true;
                window.scrollTo({
                    top: slider.offsetHeight,
                    behavior: 'smooth'
                });
                setTimeout(() => {
                    isScrolling = false;
                }, 500); // Adjust timeout based on smooth scroll duration
            } else if (currentY < slider.offsetHeight + contents1.offsetHeight - headerHeight) {
                isScrolling = true;
                window.scrollTo({
                    top: slider.offsetHeight + contents1.offsetHeight,
                    behavior: 'smooth'
                });
                setTimeout(() => {
                    isScrolling = false;
                }, 500);
            } else if (currentY < slider.offsetHeight + contents1.offsetHeight + contents2.offsetHeight - headerHeight) {
                isScrolling = true;
                window.scrollTo({
                    top: slider.offsetHeight + contents1.offsetHeight + contents2.offsetHeight,
                    behavior: 'smooth'
                });
                setTimeout(() => {
                    isScrolling = false;
                }, 500);
            } else if (currentY < slider.offsetHeight + contents1.offsetHeight + contents2.offsetHeight + contents3.offsetHeight - headerHeight) {
                isScrolling = true;
                window.scrollTo({
                    top: slider.offsetHeight + contents1.offsetHeight + contents2.offsetHeight + contents3.offsetHeight,
                    behavior: 'smooth'
                });
                setTimeout(() => {
                    isScrolling = false;
                }, 500);
            }
        } else {
            // Scroll up
            if (currentY >= slider.offsetHeight + contents1.offsetHeight + contents2.offsetHeight + contents3.offsetHeight - headerHeight) {
                isScrolling = true;
                window.scrollTo({
                    top: slider.offsetHeight + contents1.offsetHeight + contents2.offsetHeight,
                    behavior: 'smooth'
                });
                setTimeout(() => {
                    isScrolling = false;
                }, 500);
            } else if (currentY >= slider.offsetHeight + contents1.offsetHeight + contents2.offsetHeight - headerHeight) {
                isScrolling = true;
                window.scrollTo({
                    top: slider.offsetHeight + contents1.offsetHeight,
                    behavior: 'smooth'
                });
                setTimeout(() => {
                    isScrolling = false;
                }, 500);
            } else if (currentY >= slider.offsetHeight + contents1.offsetHeight - headerHeight) {
                isScrolling = true;
                window.scrollTo({
                    top: slider.offsetHeight,
                    behavior: 'smooth'
                });
                setTimeout(() => {
                    isScrolling = false;
                }, 500);
            } else if (currentY >= slider.offsetHeight - headerHeight) {
                isScrolling = true;
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                setTimeout(() => {
                    isScrolling = false;
                }, 500); // Adjust timeout based on smooth scroll duration
            }
        }
    });
});
