
const button1 = document.querySelector("#button1"); 
const wrapper = document.querySelector("#wrapper");
    
button1.onclick= log;

function log(){
    if(wrapper.style.display==="none" || wrapper.style.display === ""){
        wrapper.style.display = "flex";
    }
    else{
        wrapper.style.display = "none";
    }
}