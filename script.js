const inputField = document.querySelector(".input-field");
const btn = document.querySelector(".btn");
const addList = document.querySelector(".to-do-list");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const list = document.createElement("div");
  list.classList.add("list");

  const pList = document.createElement("p");
  pList.classList.add("p-list");

  pList.innerText = inputField.value;

  list.appendChild(pList);

  addList.appendChild(list);


  //Adding of the check button
  const check = document.createElement("button");
  check.innerHTML = '<i class="fa-solid fa-check"></i>';
  check.classList.add("check");
  list.appendChild(check);

  //Adding of the delete button
  const trashCan = document.createElement("button");
  trashCan.innerHTML = '<i class="fa-solid fa-trash"></i>';
  trashCan.classList.add("trash");
  list.appendChild(trashCan);

  inputField.value = "";
});



addList.addEventListener('click', (e) =>{
  const pList = e.target;

  //Function for the checked button after event has been added
  if (pList.classList[0] === 'check'){
    const doList = pList.parentElement
    doList.classList.toggle('checked')
  }
//Function for delete button after event has been added
  if (pList.classList[0] === 'trash'){
    const doList = pList.parentElement
    doList.remove();
  }
})
