function actualResizeHandler() {
    // handle the resize event
    const e1 = document.querySelector('.menu-container');
    const e2 = document.querySelector('.site-description');
    if (window.innerWidth >= 768) {
        e1.style.display = 'flex';
        e2.style.display = 'block';
        e2.style.position = 'absolute';
    } else {
        e1.style.display = 'none';
        e2.style.display = 'none';
        e2.style.position = 'relative';
    }
};
// 先执行一下
actualResizeHandler();

(function () {// 从MDN抄的😁
    window.addEventListener("resize", resizeThrottler, false);

    var resizeTimeout;
    function resizeThrottler() {
        // ignore resize events as long as an actualResizeHandler execution is in the queue
        if (!resizeTimeout) {
            resizeTimeout = setTimeout(function () {
                resizeTimeout = null;
                actualResizeHandler();

                // The actualResizeHandler will execute at a rate of 15fps
            }, 66);
        }
    }
}());
(function () {
    const menuBar = document.querySelector('#menu-bar');
    menuBar.addEventListener('click', () => {
        const e1 = document.querySelector('.menu-container');
        const e2 = document.querySelector('.site-description');
        if (e1.style.display === 'none') {
            e1.style.display = 'flex';
            e1.style.textAlign = 'left';
        } else {
            e1.style.display = 'none';
        }
        if (e2.style.display === 'none') {
            e2.style.display = 'block';
        } else {
            e2.style.display = 'none';
        }
    })
})();