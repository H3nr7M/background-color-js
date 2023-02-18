const btn = document.getElementById('btn');
const body = document.querySelector('body');
const hex = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F'];
const hex_value = document.getElementById('hex');
const cpy = document.getElementById('myCopy');

body.style.backgroundColor = '#000000'; //set default background color
hex_value.innerHTML = '#000000'; //set default hex value

btn.addEventListener('click', function(){
    let hex_key = '#';
    for(let i=0; i<6; i++){
        const index = Math.floor(Math.random() * hex.length); //number between 0 and 16
        hex_key = hex_key + hex[index];
    }
    hex_value.innerHTML = hex_key;
    document.getElementById('myHex').value = hex_key;
    body.style.background= hex_key;// change background color
    body.style.transition = '1s';
});

cpy.addEventListener('click', function(){
    let hex = document.getElementById('myHex');

    hex.select();
    hex.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(hex.value);
    alert('Copied Hex Color : ' + hex.value);
});