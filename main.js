let postContent = [
  {
    userName: "heaven.on.milli",
    dp: "https://images.unsplash.com/photo-1699434301274-101d0c5f1807?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pic: "https://images.unsplash.com/photo-1702318429376-968e7a347064?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Perfect click",
  },
  {
    userName: "cool.boymukesh12",
    dp: "https://images.unsplash.com/photo-1577375688665-ce3600b36b64?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pic: "https://images.unsplash.com/photo-1486621312635-4f73b739befc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Good Morning Guys",
  },
  {
    userName: "badassPanjak",
    dp: "https://images.unsplash.com/photo-1563241507-5b1b6eb891b0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pic: "https://plus.unsplash.com/premium_photo-1663100635626-7590fb7ec152?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Good Morning Guys",
  },
  {
    userName: "munnaMichel",
    dp: "https://images.unsplash.com/photo-1516446636564-c48e723868fc?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pic: "https://images.unsplash.com/photo-1610413507374-f1330f70d7ff?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Good Morning Guys",
  },
  {
    userName: "dadaDon",
    dp: "https://images.unsplash.com/photo-1561581918-f7f266c4ff66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pic: "https://images.unsplash.com/photo-1529809773508-cd894c3de760?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Good Morning Guys",
  },
  {
    userName: "chapanTikle",
    dp: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Good Morning Guys",
  },
  {
    userName: "rockyHandsome",
    dp: "https://images.unsplash.com/photo-1502258097612-43e695deebad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pic: "https://images.unsplash.com/photo-1591300112214-232ae6415271?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Good Morning Guys",
  },
];

let feed = "";
postContent.forEach(function (elem) {
  feed += `<div class="post">
    <div class="postHead">
        <div class="dpName">
            <div class="userDpOnPost">
                <img src="${elem.dp}" alt="userDp">
            </div>
            <div class="usernameOnPost">${elem.userName}</div>
        </div>
        <i class="ri-more-line"></i>
    </div>
    <div class="postImg">
        <img src="${elem.pic}" alt="">
    </div>
    <div class="postLikePanel">
        <div class="likeCommentBtns">
            <i class="ri-heart-3-line"></i>
            <i class="ri-chat-3-line"></i>
            <i class="ri-send-plane-fill"></i>
        </div>
        <div class="saveBtn">
            <i class="ri-bookmark-line"></i>
        </div>
    </div>
    <div class="likeCount">256 Likes</div>
    <div class="caption">
        <div class="username">${elem.userName}</div>
        <div class="text">${elem.caption}</div>
    </div>
</div>`;
});

document.querySelector(".instaFeed").innerHTML = feed;

let storyData = [
  {
    dp: "https://images.unsplash.com/photo-1699434301274-101d0c5f1807?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "heaven.on.milli",
    story:"https://images.unsplash.com/photo-1530648648507-b9056726849a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    dp: "https://images.unsplash.com/photo-1577375688665-ce3600b36b64?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "cool.boymukesh12",
    story:"https://images.unsplash.com/photo-1610413507366-d6a23a34ebb3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    dp: "https://images.unsplash.com/photo-1563241507-5b1b6eb891b0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "badassPanjak",
    story:"https://images.unsplash.com/photo-1531311243148-d2653fa84700?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    dp: "https://images.unsplash.com/photo-1516446636564-c48e723868fc?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "munnaMichel",
    story:"https://images.unsplash.com/photo-1702838834569-bf20a161824c?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    dp: "https://images.unsplash.com/photo-1561581918-f7f266c4ff66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "dadaDon",
    story:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    dp: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "chapanTikle",
    story:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    dp: "https://images.unsplash.com/photo-1502258097612-43e695deebad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "rockyHandsome",
    story:"https://plus.unsplash.com/premium_photo-1673356301861-d555ce5972ef?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    dp: "https://images.unsplash.com/photo-1552060405-f2081b6e7951?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "itz.MangruBhai",
    story:"https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

let storyContent = "";
storyData.forEach(function (elem, idx) {
  storyContent += `<div class="story">
 <img src="${elem.dp}" alt="" id="${idx}">
 <div class="name">${elem.name}</div>
</div>`;
});



let storySection = document.querySelector(".storySection");
let storyWindow = document.querySelector(".storyWindow");
let timeLine =document.querySelector(".timeLine");



storySection.innerHTML = storyContent;


storySection.addEventListener("click", function(dets){
    console.log(storyData[dets.target.id].story);
    storyWindow.style.display = "block"
    storyWindow.style.backgroundImage = `url(${storyData[dets.target.id].story})`;
    timeLine.style.width = "300px";
setTimeout(function(){
    storyWindow.style.display = "none";
},2000)
});