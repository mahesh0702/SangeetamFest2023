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
  let numToHide = 19; // Change this number to hide a different amount of boxes

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
    overview: "A showcase of vocal talent, where individuals or groups perform to win the title of Sangeetam's best singer.",
eligibility: "Open to solo performers or groups of 3-4 from any college or university.",
rules:
  "The maximum duration of the performance is 4 minutes. Only live singing is permitted; no backing tracks.   Offensive language is strictly prohibited.        Participants must submit their song choices for pre-approval.",

entry_fee: "₹100 for Shobhitians, ₹200 for participants from other institutes.",
prize_money: "₹2000 for the winner.",
judging_criteria: "Vocal quality, stage presence, originality, and audience response.",
    regbtn: "https://forms.gle/dUXxzCrMAYd7DjRr7",
  },
  {
    overview:" Poets and Shayars recite their compositions, showcasing the beauty of verse and prose.",
eligibility: "Solo poets.",
rules:"Recitations must not exceed 4 minutes.Submissions must be the participant’s own writing, free from offensive language.Pieces must be submitted beforehand for approval.",
entry_fee: "₹100 for Shobhitians, ₹200 for participants from other institutes.",
prize_money: "₹2000 for the most compelling recitation.",
judging_criteria: "Emotional depth, delivery, lyrical beauty, and impact.",
    regbtn: "https://forms.gle/AcWaauT6dsBgxT5S7",
  },
  {
    overview: "Bands compete to impress with their musical synergy and stage showmanship.",
eligibility: "Groups of up to 6 musicians from any college or university.",
rules:
"Set must not exceed 15 minutes, including setup and takedown.No backing tracks all music must be played live.Offensive language in lyrics is strictly prohibited.",
entry_fee:" ₹500 for Shobhitians, ₹1000 for participants from other institutes.",
prize_money: "₹10000 for the winning band.",
judging_criteria: "Musical arrangement, performance energy, audience response, and professionalism.",
    regbtn: "https://forms.gle/Vw9A88R4DbvSR2s36",
  },
  {
    overview: "An event for those who communicate through strokes of a brush or pencil, expressing their artistic visions.",
eligibility: "Solo participants.",
rules:"Maximum duration for creating the artwork is 45 minutes.Participants must bring their own art supplies. Canvas shall be provided by the University.Artwork must be original and created on-site.The Artwork will become the property of the University.",
entry_fee: "₹100 for Shobhitians, ₹200 for participants from other institutes.",
prize_money: "₹5000 for the artwork that stands out in creativity and skill.",
judging_criteria: "Creativity, technique, and overall aesthetic appeal.",
    regbtn: "https://forms.gle/Z1EpGbg7X4SNnsEX8",
  },
  {
    overview:" A glamorous event where pairs exhibit fashion and confidence on the runway.",
eligibility: "Teams of two (one male and one female participant).",
rules:"Costume Etiquette: Vulgar or offensive costumes are strictly prohibited. Cultural Sensibility: Participants should display cultural respect and avoid uncultured activities.",
entry_fee: "₹200 for Shobhitians, ₹400 for participants from other institutes.",
prize_money: "₹5000 for the pair that showcases the best walk, attire, and stage presence.",
judging_criteria: "Confidence, attire, walk, and overall presentation.",
    regbtn: "https://forms.gle/PF5iwd1gEAJuTpFe6",
  },
  {
    overview: "An event for those who communicate through strokes of a brush or pencil, expressing their artistic visions.",
    eligibility:" Solo participants.",
rules:"Maximum duration for creating the artwork is 45 minutes.Participants must bring their own art supplies. Canvas shall be provided by the University.Artwork must be original and created on-site.The Artwork will become the property of the University.",
entry_fee: '₹100 for Shobhitians, ₹200 for participants from other institutes.',
prize_money: "₹5000 for the artwork that stands out in creativity and skill.",
judging_criteria: "Creativity, technique, and overall aesthetic appeal.",
    regbtn: "https://forms.gle/zuxyWVWGHRzRsyER6",
  },
  {
    overview: "A contest for photographers to capture moments that reflect the theme provided.",
    eligibility: "Solo participants.",
    rules:"Participants must use their own cameras.Photographs must adhere to the theme provided in advance.Manipulation of photos is limited to basic adjustments; no digital art.",
    entry_fee: "₹100 for Shobhitians, ₹200 for participants from other institutes.",
    prize_money: "₹2000 for the photograph that best captures the theme with creativity and technical prowess.",
    judging_criteria: "Composition, originality, relevance to the theme, and technical quality.",
    regbtn: "https://forms.gle/Aw9tcpwgHzzvVX9M8",
  },
  {
    overview: "Celebrating the rich cultural heritage of India, this event is for those who perform traditional and folk dances.",
eligibility: "Duo performers or groups of up to 6 participants.",
rules:"The maximum duration of the performance is 5 minutes. Language for music can be Hindi, English, or any regional language.Offensive language in music is strictly prohibited.",
entry_fee: "₹200 for Shobhitians, ₹400 for participants from other institutes.",
prize_money:"₹5000 for the best performance.",
judging_criteria: "Authenticity, costumes, expression, and adherence to the traditional dance form.",
    regbtn: "https://forms.gle/UU7PzUWiMN479rWG6",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "https://forms.gle/KxRKSkdxBJmaZSQW7",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "https://forms.gle/D6Hr2tZijyCfULs6A",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "https://forms.gle/59tAoTiL4V2fDMiq6",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "https://forms.gle/ye3mikAsM7CRfDxZ6",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "https://forms.gle/AtSbbsLbVS62RTWx9",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "https://forms.gle/FycarAcFhfpFcxVL9",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "https://forms.gle/j8xLYqZLqQiA2SsT8",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "https://forms.gle/dJcZTgQGM5cnd5bJ8",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "https://forms.gle/mtEzLMuPUvJyEbHYA",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "https://forms.gle/11U9q91TsZHa2gcf8",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "https://forms.gle/51V3hQnLwiRdUG8P6",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "https://forms.gle/7LKKKut6fknaC7mY6",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "https://forms.gle/MseBLcXkMDirPqUB9",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "https://forms.gle/MwN5k6rEWg4yEWcc8",
  },
  {
    rules:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto natus labore eum explicabo tempora nostrum cumque itaque eos aperiam! Et debitis aliquid explicabo similique, quae fugit illum exercitationem quas vel dolor, labore quaerat voluptatem, atque nulla veritatis sint nostrum expedita? Accusamus soluta laudantium esse dolores facilis vero pariatur quibusdam.",
    regbtn: "https://forms.gle/envCDp9BJ3PLki9d7",
  },
];

// Event rules and regulation div
function makeadiv(image, rules, reg, title ,overview,eligibility,entry_fee,prize_money,judging_criteria) {
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
    "p-5 w-11/12 h-10/12 flex flex-col justify-center items-center bg-[#0b0638] relative top-0 left-0 rounded-2xl"
  );

  // event title
  // const span = document.createElement("span");
  // span.innerText = title;
  // span.setAttribute(
  //   "class",
  //   "w-40 absolute top-[15%] z-50 text-center bg-[rgba(0,0,0,0.56)] backdrop-blur-sm "
  // );
  // event image
  const img = document.createElement("img");
  img.setAttribute("class", "w-60 h-36 border-2 border-slate-400 rounded-2xl ");
  img.src = image;

  // rules and regulation div
  const div2 = document.createElement("div");
  div2.innerHTML = `<div class="flex flex-col items-start justify-center overflow-y-auto text-xs md:text-base"><p class="mx-1 my-1 text-justify basis-full"><strong>Overview</strong>: ${overview}</p><p class="mx-1 my-1 text-justify basis-full"><strong>Eligibility</strong>: ${eligibility}</p><p class="mx-1 my-1 text-justify basis-full"><strong>Rules</strong>: ${rules}</p> <p class="mx-1 my-1 text-justify basis-full"><strong>Entry Fees</strong>: ${entry_fee}</p><p class="mx-1 my-1 text-justify basis-full"><strong>Prize Money</strong>: ${prize_money}</p><p class="mx-1 my-1 text-justify basis-full"><strong>Judging Criteria</strong>: ${judging_criteria}</p>  `;

  // register Button
  const regbtn = document.createElement("button");
  regbtn.innerHTML = `<a href=${reg} class="mx-auto mt-1 rounded-lg w-max p-1 bg-blue-700" target="blank">Register Now</a>`;

  // close Button
  const clsbtn = document.createElement("button");
  clsbtn.style.borderRadius = "50%";
  // clsbtn.style.backgroundColor = "white";
  clsbtn.innerText = "❌";
  clsbtn.style.position = "absolute";
  clsbtn.style.top = "2px";
  clsbtn.style.right = "4px";
  clsbtn.addEventListener("click", () => {
    document.body.style.overflow = "auto";
    outerDiv.remove();
  });
  // innerDiv.appendChild(span);
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
      document.body.style.overflow = "hidden";
      let { rules, regbtn,overview,eligibility,entry_fee,prize_money,judging_criteria } =
        rulesAndReg[Number(e.target.parentElement.id) - 1];
      makeadiv(
        e.target.currentSrc || e.target.nextElementSibling.currentSrc,
        rules,
        regbtn,
        e.target.parentElement.innerText,overview,eligibility,entry_fee,prize_money,judging_criteria
      );
      // console.log(e.)
    },
    false
  );
});
