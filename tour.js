const mxh1 = window.matchMedia("screen and (max-width: 1200px)");
const mxhc = document.querySelectorAll(".mxhc");
const mxhi = document.querySelectorAll(".mxhi");
const mxhb = document.querySelectorAll(".mxhb");

// console.log(mxhb);

window.addEventListener("resize", function(e) {
    for(var i = 0; i < mxhc.length; i++) {
        if (mxh1.matches) {
            mxhc[i].classList.remove("col-6");
            mxhc[i].classList.add("col-12");
        } else {
            mxhc[i].classList.add("col-6");
            mxhc[i].classList.remove("col-12");
        }
    }
    
});
window.addEventListener("resize", function(e) {
    for(var i = 0; i < mxhi.length; i++) {
        if (mxh1.matches) {
            mxhi[i].classList.remove("col-4");
        } else {
            mxhi[i].classList.add("col-4");
        }
    }
    
});
window.addEventListener("resize", function(e) {
    for(var i = 0; i < mxhb.length; i++) {
        if (mxh1.matches) {
            mxhb[i].classList.remove("col");
            mxhb[i].classList.add("col-11");
        } else {
            mxhb[i].classList.add("col");
            mxhb[i].classList.remove("col-11");
        }
    }
    
});

