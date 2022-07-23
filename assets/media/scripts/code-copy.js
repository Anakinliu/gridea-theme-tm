const pres = document.querySelectorAll('pre');
let preIdx = 0;
for (let pre of pres) {
    const codeEleID = 'code' + (preIdx++);
    // 拿到<code>HTML元素
    pre.children[0].setAttribute('id', codeEleID);
    const copyBtn = document.createElement('button');
    copyBtn.textContent = '复制代码';
    copyBtn.classList.add('copy-btn');
    copyBtn.setAttribute('data-clipboard-target', '#' + codeEleID);
    pre.appendChild(copyBtn);
}
new ClipboardJS('.copy-btn');