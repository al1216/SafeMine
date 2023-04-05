let count = 0;

let questions = [
  "Do you often feel anxious or overwhelmed, and have difficulty sleeping?",
  "Do you have difficulty concentrating, remembering things, or following through with tasks?",
  "Do you experience physical pain or stiffness, or have difficulty with balance or mobility?",
  "Do you find it difficult to relax and have fun, and often feel tense or irritable?",
  "Do you feel lonely or isolated, and have difficulty forming or maintaining relationships?",
  "Do you struggle with parenting, or feel that your child is experiencing emotional or behavioral difficulties?",
  "Do you have a sense of purposelessness or hopelessness, and seek deeper meaning or connection?",
  "Do you struggle with issues related to sexuality or gender identity, and require a safe space to explore these topics?",
  "Have you experienced a traumatic event, and require a specialized approach to address the impact on your mental health?",
];

let answers = [
  "Audio Therapy",
  "Reading Therapy",
  "Yoga Therapy",
  "Laughing Therapy",
  "Talking Therapy",
  "Child Therapy",
  "Spiritual Therapy",
  "Talking Therapy",
  "Special Therapy",
];

let currQues = document.getElementsByClassName("question")[0];
currQues.innerHTML = questions[count];
// let remarks = document.getElementsByClassName("remarks")[0];
let remarksAndTherapy = document.getElementsByClassName("remarksAndTherapy")[0];

let yesOption = document.getElementsByClassName("yes")[0];
let noOption = document.getElementsByClassName("no")[0];

yesOption.addEventListener("click", () => {
  if (count <= 8) {
    noOption.innerHTML = "Next !!";
    // remarks
    let remarks = document.createElement("h2");
    remarks.innerHTML = `No Problem! Try our ${answers[count]}!!`;
    remarks.classList = "remarks";
    remarksAndTherapy.appendChild(remarks);
    //therapy
    let therapy = document.createElement("button");
    therapy.innerHTML = `${answers[count]}`;
    therapy.classList = "therapy";
    remarksAndTherapy.appendChild(therapy);

    if (count == 0){
      document
      .getElementsByClassName("therapy")[0]
      .addEventListener("click", () => {
        window.location.replace("../html/audioTherapy.html");
      });
    }

    else if (count == 1){
      document
      .getElementsByClassName("therapy")[0]
      .addEventListener("click", () => {
        window.location.replace("../html/readingTherapy.html");
      });
    }
    
    else if (count == 2){
      document
      .getElementsByClassName("therapy")[0]
      .addEventListener("click", () => {
        window.location.replace("../html/yogaTherapy.html");
      });
    }

    else if (count == 3){
      document
      .getElementsByClassName("therapy")[0]
      .addEventListener("click", () => {
        window.location.replace("../html/laughTherapy.html");
      });
    }

    else if (count == 4){
      document
      .getElementsByClassName("therapy")[0]
      .addEventListener("click", () => {
        window.location.replace("../html/talkingTherapy.html");
      });
    }

    else if (count == 5){
      document
      .getElementsByClassName("therapy")[0]
      .addEventListener("click", () => {
        window.location.replace("../html/childTherapy.html");
      });
    }

    else if (count == 6){
      document
      .getElementsByClassName("therapy")[0]
      .addEventListener("click", () => {
        window.location.replace("../html/spirituality.html");
      });
    }

    else if (count == 7){
      document
      .getElementsByClassName("therapy")[0]
      .addEventListener("click", () => {
        window.location.replace("../html/talkingTherapy.html");
      });
    }

    else if (count == 8){
      document
      .getElementsByClassName("therapy")[0]
      .addEventListener("click", () => {
        window.location.replace("../html/specialTherapy.html");
      });
    }
  } else {
    window.location.replace("https://al1216.github.io/thankYou/");
  }
});

noOption.addEventListener("click", () => {
  count++;
  currQues.innerHTML = questions[count];
  noOption.innerHTML ="No :)"

  if (count == 9){
    window.location.replace("https://al1216.github.io/thankYou/");
  }
});
