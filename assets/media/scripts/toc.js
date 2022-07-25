/**
 * 目录toc相关JS代码
 */

(function () {// 从MDN抄的😁
    window.addEventListener("scroll", scrollThrottler, false);
    const tocLinks = document.querySelectorAll('.toc-container .markdownIt-TOC a');
    function tocHighLight() {
        // console.log(window.location.hash);
        // console.log(tocLinks[0].getAttribute('href'));
        for (let link of tocLinks) {
            if (link.getAttribute('href') === window.location.hash) {
                link.classList.add('current');
            } else {
                link.classList.remove('current');
            }
        }
    }
    var scrollTimeout;
    // 节流函数
    function scrollThrottler() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function () {
                scrollTimeout = null;
                tocHighLight();
            }, 66);
        }
    }

}());

