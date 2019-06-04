// // const tabsBtn = document.querySelectorAll('.tabs_btn');
// // const tabsContent = document.querySelectorAll('.tabs_content');
// // const deleteBtn = document.querySelectorAll('.deleteTab');
// const addTab = document.querySelector('.add_btn');

// getTabsBtn = () => {
//     const tabsBtn = document.querySelectorAll('.tabs__btn');
//     return tabsBtn;
// }

// getTabsContent = () => {
//     const tabsContent = document.querySelectorAll('.tabs__content');
//     return tabsContent;
// }

// getDeleteBtn = () => {
//     const deleteBtn = document.querySelectorAll('.deleteTab');
//     return deleteBtn;
// }

// function addDeleteBtn() {
//     let newDeleteBtn = document.createElement('span');
//     newDeleteBtn.innerText = 'X';
//     newDeleteBtn.classList.add('deleteTab');
//     tabsBtn.appendChild(newDeleteBtn);
// }


// function updateTabsList(){
//     getTabsBtn().forEach((button) => {
//         button.addEventListener('click', () => {
//             const tabNr = button.dataset.tabNr;
//             getTabsBtn().forEach(btn => {
//                 btn.classList.remove('isActive');
//             })
//             button.classList.add('isActive');
//             getTabsContent().forEach(content => {
//                 let contentNr = content.dataset.contentNr;
//                 content.classList.remove('isActive');
//                 if(contentNr === tabNr){
//                     content.classList.add('isActive');
//                 }
//             })
//         })
//     })
     
// }


// function updateDeleteBtn(){
//     getDeleteBtn().forEach((delButton) => {
//         delButton.addEventListener('click', (e) => {
//             let buttonParent = delButton.parentElement;
//             let tabNr = buttonParent.dataset.tabNr;
//             getTabsContent().forEach(content => {
//                 let contentNr = content.dataset.contentNr;
//                 if(contentNr === tabNr){
//                     content.parentElement.removeChild(content);
//                     buttonParent.parentElement.removeChild(buttonParent);
//                 }
//             })
//             e.stopPropagation();
//         })
//     })
// }


// function addNewTab(tabSidebar){
//     let newButton = document.createElement('button');
//     newButton.innerText = `Tabs ${getTabsBtn().length + 1}`;
//     newButton.classList.add("tabs_btn");
//     newButton.dataset.tabNr = getTabsBtn().length + 1;
//     tabSidebar.appendChild(newButton);
//     return newButton;
// }

// function addNewDeleteBtn(newButton){
//     let newDeleteBtn = document.createElement('span');
//     newDeleteBtn.innerText = 'X';
//     newDeleteBtn.classList.add("deleteTab");
//     newButton.appendChild(newDeleteBtn);
// }

// function addNewContent(tabSidebar){
//     let newContent = document.createElement('div');
//     newContent.innerText = `asd ${getTabsBtn().length}`;
//     newContent.classList.add('tabs__content');
//     newContent.dataset.contentNr = getTabsBtn().length;
// }

// addTab.addEventListener('click', (event) => {
//     let tabSidebar = event.target.parentElement;
//     let newButton = addNewTab(tabSidebar);
//     addNewTab(newButton);
//     addNewDeleteBtn(tabSidebar);

//     updateTabsList();
//     updateDeleteBtn();

//     // tabsBtn.push(newButton);
// })

// function init(){
//     updateTabsList();
//     updateDeleteBtn();
// }

// init();




const tab = document.querySelector('.tabs__btn');
console.log(tab);