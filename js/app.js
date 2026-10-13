function createCard(card){
    return`<article>        
            <img src="${card.image}" alt="ref_Image">    
            
            <div class="content">
                <h3>${card.h3}</h3>
                <a href="${card.link}">awwwards.com</a>
                <ul role="list">
                    ${card.tags.map(tag => `<li> ${tag} </li>`).join("")}
                </ul>
                <button>刪除</button>
            </div>
        </article>` 
}

const cards = [
{image:"./assets/Image01.jpg",link:"https://1awwward.com",h3:"一 敘事一詞，氣息01",tags:["設計靈感","作品集","111集"]},
{image:"./assets/Image02.jpg",link:"https://2awwward.com",h3:"二 敘事一詞，氣息02",tags:["設計靈感","作品集","222集"]},
{image:"./assets/Image03.jpg",link:"https://3awwward.com",h3:"三 敘事一詞，氣息03",tags:["設計靈感","作品集","333集"]},
{image:"./assets/Image04.jpg",link:"https://4awwward.com",h3:"四 敘事一詞，氣息04",tags:["設計靈感","作品集","444集"]},
{image:"./assets/Image05.jpg",link:"https://5awwward.com",h3:"五 敘事一詞，氣息05",tags:["設計靈感","作品集","555集"]},
{image:"./assets/Image06.jpg",link:"https://6awwward.com",h3:"六 敘事一詞，氣息06",tags:["設計靈感","作品集","666集"]},
];



const wall = document.querySelector(".article_table");
wall.innerHTML = cards.map(card => createCard(card)).join("");



wall.addEventListener('click',function(event){
    if (event.target.tagName === "BUTTON" ){console.log("要刪了")}
    
})