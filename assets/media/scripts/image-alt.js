/**
 * 图片显示alt信息
 */
(function () {
    const imgs = document.querySelectorAll('img');
    imgs.forEach((img, index) => {
        const altMess = img.getAttribute('alt');
        if (altMess) {
            const imageAltEle = document.createElement('p');
            imageAltEle.textContent = altMess;
            imageAltEle.classList.add('img-alt');
            img.parentNode.appendChild(imageAltEle);
        }
    });
})();