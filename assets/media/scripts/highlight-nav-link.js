(function () {
    /* 
    此函数用来高亮页面左侧 header 的 “关于” 链接，sitename/post/about/
    */
    const path = location.pathname.slice(0, -1);
    const navLinks = document.querySelectorAll('a.menu');
    for (let link of navLinks) {
        const linkHref = link.getAttribute('href');
        if (linkHref === path) {
            link.style.color = '#ffc402';
            link.style.backgroundColor = '#26252f';
            link.style.borderRight = '.5em #ffc402 solid';
        }
    }
})();