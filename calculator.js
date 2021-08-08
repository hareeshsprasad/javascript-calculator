function press(val) {   
    document.getElementById('screen').value+=val;
}
function calculate() {
    var data=document.getElementById('screen').value
    var result=eval(data);
    document.getElementById('screen').value=result
}
function clearDisplay() {
    document.getElementById('screen').value=""
}
function removeLast(){
    var num= document.getElementById('screen').value
    var stripped = num / 10 | 0;   
    document.getElementById('screen').value=stripped
}