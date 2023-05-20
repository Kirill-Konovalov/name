const button = document.querySelector('.dropbtn');
const mainContent = document.querySelector('.content')
const subgroup = document.querySelector('.subgroup')


const buttonTwo = document.querySelector('.dropbtnTwo');
const mainContentTwo = document.querySelector('.content-2')
const subgroupTwo = document.querySelector('.subgroup-2')

const callback = () => {
if(mainContent.classList.contains('_active')){
    mainContent.classList.remove('_active')
    subgroup.classList.remove('_activeTwo')
}
else{
    mainContent.classList.add('_active')
    subgroup.classList.add('_activeTwo')
}
};
const callback2 = () => {
if(mainContentTwo.classList.contains('_active')){
    mainContentTwo.classList.remove('_active')
    subgroupTwo.classList.remove('_activeTwo')
    // alert('remove _active')
}
else{
    mainContentTwo.classList.add('_active')
    subgroupTwo.classList.add('_activeTwo')
    // alert('add _active')
}
};



const buttonThree = document.querySelector('.dropbtnThree');
const mainContentThree = document.querySelector('.content-3')
const subgroupThree = document.querySelector('.subgroup-3')

const callback3 = () => {
if(mainContentThree.classList.contains('_active')){
    mainContentThree.classList.remove('_active')
    subgroupThree.classList.remove('_activeTwo')
    // alert('remove _active')
}
else{
    mainContentThree.classList.add('_active')
    subgroupThree.classList.add('_activeTwo')
    //  alert('add _active')
}
};


const buttonFour = document.querySelector('.dropbtnFour');
const mainContentFour = document.querySelector('.content-4')
const subgroupFour = document.querySelector('.subgroup-4')


const callback4 = () => {
    if(mainContentFour.classList.contains('_active')){
        mainContentFour.classList.remove('_active')
        subgroupFour.classList.remove('_activeTwo')
        // alert('remove _active')
    }
    else{
        mainContentFour.classList.add('_active')
        subgroupFour.classList.add('_activeTwo')
        //  alert('add _active')
    }
    };
 
const buttonFive = document.querySelector('.dropbtnFive');
const mainContentFive = document.querySelector('.content-5')
const subgroupFive = document.querySelector('.subgroup-5')


const callback5 = () => {
    if(mainContentFive.classList.contains('_active')){
        mainContentFive.classList.remove('_active')
        subgroupFive.classList.remove('_activeTwo')
        // alert('remove _active')
    }
    else{
        mainContentFive.classList.add('_active')
        subgroupFive.classList.add('_activeTwo')
        //  alert('add _active')
    }
    };


const buttonSix = document.querySelector('.dropbtnSix');
const mainContentSix = document.querySelector('.content-6')
const subgroupSix = document.querySelector('.subgroup-6')


const callback6 = () => {
    if(mainContentSix.classList.contains('_active')){
        mainContentSix.classList.remove('_active')
        subgroupSix.classList.remove('_activeTwo')
        // alert('remove _active')
    }
    else{
        mainContentSix.classList.add('_active')
        subgroupSix.classList.add('_activeTwo')
        //  alert('add _active')
    }
    };

button.addEventListener('click', callback);
buttonTwo.addEventListener('click', callback2)
buttonThree.addEventListener('click', callback3)
buttonFour.addEventListener('click', callback4)
buttonFive.addEventListener('click', callback5)
buttonSix.addEventListener('click', callback6)