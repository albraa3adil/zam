function navClick(name) {

    const boxes = document.querySelectorAll('.nav-option-item1, .nav-option-item2, .nav-option-item3, .nav-option-item4');


for (const box of boxes) {
    if (box.className === name) {
        box.classList.add('active');
    }else {
        box.classList.remove('active');
    }
    
  
}

}