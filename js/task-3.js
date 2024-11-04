function getElementWidth(content, padding, border) {
    content1 = parseInt(content);
    padding1 = parseInt(padding);
    border1 = parseFloat(border);

    x = content1 + 2*(padding1 + border1);
    return x;
}


console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200