
// when we click the toggle button then we get a line
function checkedOrNot(){
    let cb = document.getElementsByClassName('checkbox')
    let descdisp = document.querySelectorAll('.dispdsc'); // getting all the class where descripting of TODO is defined
    let ddsp = document.querySelectorAll('.dueDate'); // getting all the class for dueDate
    let cates = document.querySelectorAll('.cate');
    for(let i=0;i<descdisp.length;i++){
        let dueDate = ddsp[i].innerHTML;
        let catesec = cates[i].innerHTML;
        // checking if checkbox is checked  if checked a line will pass through the text(-) else if it is unchecked no line will pass through date and description
            if(cb[i].checked == true){ 
            document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'line-through'
            document.getElementById(cb[i].getAttribute('uid')+dueDate).style.textDecoration  = 'line-through'
            document.getElementById(cb[i].getAttribute('uid')+catesec).style.textDecoration  = 'line-through'
            }
            else if(cb[i].checked == false){
            document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'none'
            document.getElementById(cb[i].getAttribute('uid')+dueDate).style.textDecoration  = 'none'
            document.getElementById(cb[i].getAttribute('uid')+catesec).style.textDecoration  = 'none'
        }
       
    } 
}
