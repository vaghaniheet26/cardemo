
// this section for displaying review section
const previousbtn = document.querySelector("#previous-btn");
const nextbtn = document.querySelector("#next-btn");
const review = document.querySelector(".review");

let btnIsOn = true;  // this is for disabling button fot 1second bcz contain is moving 
let scrollcount = 1;
console.log(previousbtn);
previousbtn.addEventListener("click", () => {
    if (btnIsOn) {
        if (scrollcount > 1) {

            review.scrollLeft -= 500;
            scrollcount -= 1
        }
        else if (scrollcount === 1) {
            review.scrollLeft += 500 * 5;
            scrollcount = 5;
        }
        btnIsOn = false;  // it is disabling btn
        // console.log(btnIsOn);
        setTimeout(setBtnOff, 1000); //it is enable button after 1 second
    }
});
nextbtn.addEventListener("click", () => {
   if(btnIsOn) {if (scrollcount < 5) {

        review.scrollLeft += 500;
        scrollcount += 1;
    }
    else if (scrollcount === 5) {
        review.scrollLeft -= 500 * 5;
        scrollcount = 1;
    }
    btnIsOn = false;
    // console.log(btnIsOn);
    setTimeout(setBtnOff, 1000);}
});

function setBtnOff() {
    btnIsOn = true
    // console.log(btnIsOn);
}

let selectvalue = document.querySelector(".input-item select");
console.log(selectvalue.value);
if(selectvalue.value === "select-none"){
    selectvalue.style.color = "rgba(0, 0, 0, 0.555)";

}
else{
    selectvalue.style.color = "black";
}
selectvalue.addEventListener('change', () => {
    if(selectvalue.value === "select-none"){
        selectvalue.style.color = "rgba(0, 0, 0, 0.555)";
    
    }
    else{
        selectvalue.style.color = "black";
    }
});