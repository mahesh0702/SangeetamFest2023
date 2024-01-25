//  scroll button : Bottom to TOP as well as translucent navbar on scroll

let toTopButton = document.getElementById("to-top-button");
// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function () {
  if (
    document.body.scrollTop > 140 ||
    document.documentElement.scrollTop > 140
  ) {
    // document.getElementById("navbar").style.background = "transparent";
    // document.getElementById("navbar").style.backdropFilter = "blur(30px)";
    document.getElementById("navbar").classList.add("blurred");
    toTopButton.classList.remove("hidden");
  } else {
    // document.getElementById("navbar").style.backgroundColor = "#0d0745";
    document.getElementById("navbar").classList.remove("blurred");
    toTopButton.classList.add("hidden");
  }
};

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// hamburger function
function Menu(e) {
  let list = document.querySelector("ul");
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"),
      list.classList.add("bg-transparent"),
      list.classList.add("blurred"))
    : ((e.name = "menu"),
      // list.classList.remove("blurred"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"));
}

// random image at hero section
let id = Math.ceil(Math.random() * 4);
document.getElementById(
  "festName"
).style.backgroundImage = `url(./img/hero-section/${id}.jpg)`;

// CountDown Timer
let countDownDate = new Date("February 09, 2024 00:00:00").getTime();

let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("time").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("event-timer").innerHTML = "Event Started";
    document.getElementById("event-timer").style.textAlign = "center";
    document.getElementById("time").innerHTML = "";
  }
}, 1000);

// hide button in event section
document.getElementById("hideBtn").addEventListener("click", function () {
  let boxes = document.querySelectorAll(".box");
  let numToHide = 9; // Change this number to hide a different amount of boxes

  for (let i = 0; i < numToHide; i++) {
    if (boxes[i]) {
      if (boxes[i].classList.contains("hidden")) {
        boxes[i].classList.remove("hidden");
        document.getElementById("hideBtn").textContent = "Show Less";
      } else {
        boxes[i].classList.add("hidden");
        document.getElementById("hideBtn").textContent = "Show More";
      }
    }
  }
});




// all rules and regulation data along with their registration link 
let rulesAndReg = [
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "https://www.facebook.com/",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "++++link+++++",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "++++link+++++",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "++++link+++++",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "++++link+++++",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "++++link+++++",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "++++link+++++",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "++++link+++++",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "++++link+++++",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "++++link+++++",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "++++link+++++",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "++++link+++++",
  },
  
];


// Event rules and regulation div 
function makeadiv(image,rules,reg,title) {
  // outer div
  const outerDiv = document.createElement("div");
  outerDiv.setAttribute(
    "class",
    "w-full h-screen bg-transparent backdrop-blur-sm z-50 flex justify-center items-center fixed top-0 left-0"
  );

  // inner div
  const innerDiv = document.createElement("div");
  innerDiv.setAttribute(
    "class",
    "py-2 w-11/12 h-10/12 flex flex-col justify-center items-center bg-[#0b0638] relative top-0 left-0 rounded-2xl"
  );


  // event title 
  const span=document.createElement("span")
  span.innerText=title
  span.setAttribute("class","w-60 absolute top-[15%] z-50 text-center bg-[rgba(0,0,0,0.56)] backdrop-blur-sm ")
  // event image
  const img = document.createElement("img");
  img.setAttribute("class", "w-60 h-36 border-2 border-slate-400 rounded-2xl ");
  img.src = image;

  // rules and regulation div
  const div2 = document.createElement("div");
  div2.innerHTML = `<h1 class=" mt-2 text-center text-xl">Rules and Regulations</h1><p class="mx-3 my-2 text-justify ">${rules}</p>`;

  // register Button
  const regbtn = document.createElement("button");
  regbtn.innerHTML = `<a href=${reg} class="mx-auto mt-1  rounded-lg w-max px-4 bg-blue-700" target="blank">Register Now</a>`;

  // close Button
  const clsbtn = document.createElement("button");
  clsbtn.style.borderRadius = "50%";
  clsbtn.style.backgroundColor = "white";
  clsbtn.innerText = "❌";
  clsbtn.style.position = "absolute";
  clsbtn.style.top = "0";
  clsbtn.style.right = "0";
  clsbtn.addEventListener("click", () => {
    document.body.style.overflow = "auto";
    outerDiv.remove();
  });
innerDiv.appendChild(span)
  innerDiv.appendChild(img);
  innerDiv.appendChild(div2);
  innerDiv.appendChild(regbtn);
  innerDiv.appendChild(clsbtn);

  outerDiv.appendChild(innerDiv);
  document.body.appendChild(outerDiv);
}

const desc = document.querySelectorAll(".desc");
desc.forEach((elem) => {
  elem.addEventListener(
    "click",
    (e) => {
      document.body.style.overflow="hidden"
      let {rules,regbtn} = rulesAndReg[Number(e.target.parentElement.id)-1]
      makeadiv(e.target.currentSrc ||e.target.nextElementSibling.currentSrc,rules,regbtn,e.target.parentElement.innerText)
      // console.log(e)

    },
    false
  );
});
