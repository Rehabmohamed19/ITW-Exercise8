let data = [{
    title : "Card title1",
    cardDesc  : "بالإضافة إلى استقلاليتنا في دراية، فقد طورناالعديد من الآليات الحصرية التي تساعد المستثمر على تكوين محافظ متنوعة وعلى انتقاء المنتجات المنتجات   ى تكوين محافظ متنوعة وعلى انتقاء المنتجات المنتجات ى تكوين محافظ متنوعة وعلى انتقاء المنتجات المنتجات ى تكوين محافظ متنوعة وعلى انتقاء المنتجات المنتجاتالأفضل.11111"
    ,
    more:" بالإضافة إلى استقلاليتنا في دراية، فقد طورناالعديد من الآليات الحصرية التي تساعد المستثمر على تكوين محافظ متنوعة وعلى انتقاء المنتجات الأفضل"
, 
},
  {
    title : "Card title2",
    cardDesc  : "بالإضافة إلى استقلاليتنا في دراية، فقد طورناالعديد من الآليات الحصرية التي تساعد المستثمر على تكوين محافظ متنوعة وعلى انتقاء المنتجات الأفضل.22222"
    ,  
    more:" بالإضافة إلى استقلاليتنا في دراية، فقد طورناالعديد من الآليات الحصرية التي تساعد المستثمر على تكوين محافظ متنوعة وعلى انتقاء المنتجات الأفضل"
, 
},
  {
    title : "Card title3",
    cardDesc  : "بالإضافة إلى استقلاليتنا في دراية، فقد طورناالعديد من الآليات الحصرية التي تساعد المستثمر على تكوين محافظ متنوعة وعلى انتقاء المنتجات الأفضل."
    ,  
    more:" بالإضافة إلى استقلاليتنا في دراية، فقد طورناالعديد من الآليات الحصرية التي تساعد المستثمر على تكوين محافظ متنوعة وعلى انتقاء المنتجات الأفضل"
    , 
},
  {
    title : "Card title",
    cardDesc  : "بالإضافة إلى استقلاليتنا في دراية، فقد طورناالعديد من الآليات الحصرية التي تساعد المستثمر على تكوين محافظ متنوعة وعلى انتقاء المنتجات الأفضل."
    , 
    more:" بالإضافة إلى استقلاليتنا في دراية، فقد طورناالعديد من الآليات الحصرية التي تساعد المستثمر على تكوين محافظ متنوعة وعلى انتقاء المنتجات الأفضل"
    , 
},
  {
    title : "Card title",
    cardDesc  : "بالإضافة إلى استقلاليتنا في دراية، فقد طورناالعديد من الآليات الحصرية التي تساعد المستثمر على تكوين محافظ متنوعة وعلى انتقاء المنتجات الأفضل."
    , 
    more:" بالإضافة إلى استقلاليتنا في دراية، فقد طورناالعديد من الآليات الحصرية التي تساعد المستثمر على تكوين محافظ متنوعة وعلى انتقاء المنتجات الأفضل"
    , 
},
  {
    title : "Card title",
    cardDesc  : "بالإضافة إلى استقلاليتنا في دراية، فقد طورناالعديد من الآليات الحصرية التي تساعد المستثمر على تكوين محافظ متنوعة وعلى انتقاء المنتجات الأفضل."
    ,  
    more:" بالإضافة إلى استقلاليتنا في دراية، فقد طورناالعديد من الآليات الحصرية التي تساعد المستثمر على تكوين محافظ متنوعة وعلى انتقاء المنتجات الأفضل"
    , 
},



];



const container = document.createElement('div');
container.className="card-container container mt-5 card-background";
document.body.appendChild(container);

const row = document.createElement('div');
row.className="row d-flex justify-content-center"
container.appendChild(row);

const modal=document.createElement("section");
modal.className="modal hidden";
modal.innerHTML=` <div class="flex">
<button class="btn-close">⨉</button>
</div>
<div>
<h3></h3>
<p>
</p>
</div>`;
document.body.append(modal);
const overlay=document.createElement("div");
overlay.className="overlay hidden";
document.body.append(overlay);
const closebtn=document.querySelector(".modal .btn-close");
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
closebtn.addEventListener("click", closeModal);


const openModal = function (e) {
  const modalTitle=document.querySelector(".modal h3");

  modalTitle.innerHTML=e.target.closest(".rounded-card").querySelector(".card-title").innerHTML;
  const modalText=document.querySelector(".modal p");
  const parent = e.target.closest(".justify-content-center")
  const child = e.target.closest(".rounded-card");
  const currentIndex=Array.prototype.indexOf.call(parent.children, child);
  modalText.innerHTML=`${data[currentIndex].cardDesc}`;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
 
};
for (let i = 0; i < data.length; i++) {


const card = document.createElement('div');
card.className="card col-md-4 rounded-card mx-3 my-3"
card.style.width="20rem";
row.appendChild(card);

const cardBody = document.createElement('div');
cardBody.className="card-body";
card.appendChild(cardBody);

const iconWrapper = document.createElement('div');
iconWrapper.className="icon-wrapper";
cardBody.appendChild(iconWrapper);

const cardTitle = document.createElement('h5');
cardTitle.className="card-title d-flex align-items-center mx-auto"
cardTitle.style.width="1rem"
cardTitle.style.height="6rem";
iconWrapper.appendChild(cardTitle);

const star = document.createElement('i');
star.className="fa-regular fa-star";
star.style.color="#f2ec40";
cardTitle.appendChild(star);

const cardTextWrapper = document.createElement('div');
cardTextWrapper.className="my-5 mx-auto";
cardBody.appendChild(cardTextWrapper);


const cardText = document.createElement('p');
cardText.className="card-text test2 mt-3";
cardTextWrapper.appendChild(cardText);

const cardbtn = document.createElement('button');
cardbtn.className="btn btn-primary read-more btn-open";
cardbtn.innerHTML="Read More"
cardTextWrapper.appendChild(cardbtn);
cardbtn.addEventListener("click", openModal);

cardTitle.innerText=`${data[i].title}`;

if (data[i].cardDesc.length > 150){
const newText = data[i].cardDesc.substring(0,150);
cardText.innerText=newText+"...";
console.log(newText);
}else{
  cardText.innerText=`${data[i].cardDesc}`;
}


}






















