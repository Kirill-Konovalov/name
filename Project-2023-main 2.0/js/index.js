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

button.addEventListener('click', callback);
buttonTwo.addEventListener('click', callback2)
buttonThree.addEventListener('click', callback3)