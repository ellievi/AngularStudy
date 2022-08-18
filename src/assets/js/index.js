function submenuToggle(index) {
    const submenu = document.querySelectorAll('.menu-item > .menu')[index];

    if (!submenu) {
        return console.log('Submenu não encontrado!');
    }

    if (submenu.classList.contains('open')) {
        submenu.classList.remove('open');
        submenu.classList.add('close');
    } else {
        submenu.classList.remove('close');
        submenu.classList.add('open');
    }
}

function submitform(event) {
    //prevent event
    event.preventDefault()
 
    //convert event to object FormData
    const formData = new FormData(event.target);
    //Join keys and values in object
    const formProps = Object.fromEntries(formData);
    //show data
    console.log(formProps)

    //prevent reload page
    return false;
}

// pre/nxt btn function
const productsContainer = document.querySelectorAll('.container-produtos');
const nxtBtn = document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');

productsContainer.forEach((item,i) => { // '' => '' reduct the ''function'' 
    let containerDimensions = item.getBoundingClientRect(); //return the size of an element and your relative position to viewport
    let containerWidht = containerDimensions.width; //reading the ''container dimensions'' width

    nxtBtn[i].addEventListener('click',() => {
        item.scrollLeft +=  100;
    })
    
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= 100;
    })
})