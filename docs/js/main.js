console.log(">> Ready :)");const u=document.querySelector(".js_userList"),d=document.querySelector(".js_friendsList"),g=document.querySelector(".js_savebtn"),m=document.querySelector(".js_recoverbtn"),f=document.querySelector(".js_removebtn");let l=[],n=[];const _=()=>{let t="";for(let e of l){const r="/images/blanco.png";e.isFriend===!0&&(r="/images/rojo.png"),t+=`<li class="user_container">
    <button class="button js_button" id="${e.login.uuid}">
    <img class="button_icon js_heart" src="${r}" alt="Like"/>
    </button>
    <img class="user_img" src=${e.picture.large} alt="Foto usuario">
    <h2 class="user_name">${e.name.first} ${e.name.last}</h2>
    <p class="user_country">${e.location.country}</p>
    <p class="user_username">@${e.login.username}</p>
    </li>`}u.innerHTML=t;const s=document.querySelectorAll(".js_button");for(let e of s)e.addEventListener("click",h)},a=()=>{let t="";for(let s of n){let e="/images/blanco.png";s.isFriend===!0&&(e="/images/rojo.png"),t+=`<li class="user_container_friend">
        <button class="buttonFriend js_button" id="${s.login.uuid}">
                <img class="button_icon js_heart" src="${e}" alt="Like"/>
            </button>
        <img class="user_img_friend" src=${s.picture.large} alt="Foto usuario">
        <h2 class="user_name_friend">${s.name.first} ${s.name.last}</h2>
        <p class="user_country_friend">${s.location.country}</p>
        <p class="user_username_friend">@${s.login.username}</p>
        </li>`}d.innerHTML=t},h=t=>{console.log("doy clic al botón"),console.log("id user clicado:",t.currentTarget.id);let s=t.currentTarget,e=s.id;console.log("id user:",e);const r=s.querySelector(".js_heart");r.src.includes("blanco.png")?r.src="/images/rojo.png":r.src="/images/blanco.png";let o=l.find(c=>c.login.uuid===e);console.log("info:",o);let i=n.findIndex(c=>c.login.uuid===e);console.log("is friend:",i),i===-1?(o.isFriend=!0,n.push(o)):(o.isFriend=!1,n.splice(i,1)),a()},p=()=>{localStorage.setItem("friends",JSON.stringify(n))},b=()=>{localStorage.getItem("friends")!=null&&(n=JSON.parse(localStorage.getItem("friends")),a())},S=()=>{localStorage.clear(),n=[],document.querySelectorAll(".js_heart").forEach(s=>{s.src="/images/blanco.png"}),a()};fetch("https://randomuser.me/api/?results=10").then(t=>t.json()).then(t=>{console.log("10 random users:",l),l=t.results,_()});g.addEventListener("click",p);m.addEventListener("click",b);f.addEventListener("click",S);
//# sourceMappingURL=main.js.map
