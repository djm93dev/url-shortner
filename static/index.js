// copy h2 to clipboard
function copy() {
    var h2 = document.querySelector('h2');
    navigator.clipboard.writeText(h2.textContent);
    console.log('copied');
}
