function getElementWidth(content, padding, border) {
    c = parseInt(content);
    p = parseInt(padding);
    b = parseFloat(border);

    x = c + 2*(p + b);
    return x;
}


console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200