window.onload = function () {
    show(0);
}

// excessing user_name from sessionStorage 
let name_ = sessionStorage.getItem("name");
document.querySelector(".user_name").innerHTML = name_;

function submitform(event) {
    event.preventDefault();
    console.log("submit")

    // document.forms will access all forms
    let name = document.forms["formfill"]["username"].value

    //to store the data in application=>storage=>session storage
    sessionStorage.setItem("name", name)
    location.href = "quiz.html"
}

// now will make the queations in array, in the array will make the object (which is each question)
let Questions = [
    {
        question: "Which character has a twin?",
        correct: "Phoebe",
        options: [
            "Rachel",
            "Monica",
            "Phoebe",
            "Joe",
            
        ]
    },
    {
        question: "Who was the first person to find out Monica and Chandler were dating?",
        correct: " Joe",
        options: [
            "Joe",
            "Ross",
            "Phoebe",
            "NO one,they told everyone",

        ]
    },
    {
        question: "How many sisters does Joey have?",
        correct: " 7",
        options: [
            "7",
            "6",
            "5",
            "2",

        ]
    },
    {
        question: "What was the name of the millionaire Monica dated?",
        correct: "Pete",
        options: [
            "John",
            "Chandler",
            "Pete",
            "Joe",

        ]
    },
    {
        question: "Who got stuck in a pair of leather pants?",
        correct: "Ross",
        options: [
            "Chandler",
            "Joe",
            "John",
            "Ross",

        ]
    },
    {
        question: "Who hates Thanksgiving?",
        correct: "Chandler",
        options: [
            "Ross",
            "Chandler",
            "Joe",
            "on one",

        ]
    },
    {
        question: "What’s Joey’s favorite food?",
        correct: " Sandwiches",
        options: [
            "Sandwiches",
            "Pizza",
            "Cake",
            "potato",

        ]
    },
    {
        question: "What did Joey buy Chandler as a token of their friendship? Chandler hates it.",
        correct: " A bracelet",
        options: [
            "A bracelet",
            "A necklace",
            "A dress",
            "Food",

        ]
    }
]

let count_ques = 0;
let point = 0;
let wrong_ans = 0;
let correct_ans = 0;


//click on next button to run this function
function next() {

    // checkint if all question done or if we are at last question
    //in that case when we click next we have to junp on next html page(point.html)
    if (count_ques == Questions.length - 1) {
        location.href = "result.html"
    }

    // innerhtml should not equal to null
    // if(document.querySelector("li.op.active") != null) {
    ans = document.querySelector("li.op.active").innerHTML;


    if (ans == Questions[count_ques].correct) {
        point += 10;
        correct_ans += 1;
    }
    else {
        wrong_ans += 1;
    }
    sessionStorage.setItem("points", point);
    sessionStorage.setItem("correct", correct_ans);
    sessionStorage.setItem("wronge", wrong_ans);
    count_ques++;
    // }
    show(count_ques)

}


function show(count) {

    let ques = document.getElementById("next_ques");
    // ques.innerHTML = "<h1>"+ Questions[count].question + "</h1>";
    ques.innerHTML = ` <h2>Q${count + 1} ${Questions[count].question}</h2>
    <ul >
    <li class="op" > ${Questions[count].options[0]}</li>
    <li class="op">${Questions[count].options[1]}</li>
    <li class="op">${Questions[count].options[2]}</li>
    <li class="op">${Questions[count].options[3]}</li>
    
    
    </ul> 
    `;

    funcActive();

    
}




function funcActive() {

    let option = document.querySelectorAll("li.op");// query selector takes css for match

    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            // document.removeEventListener('onclick', option);

            //this function making sure we get only one chance to click the option----------------
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    show(count);
                }
            }
            //-------------------------------------------------------------------------------------


            //checkin if option text maches with correct ans, for correct ans(turn green) else(turn red)------------
            if (option[i].innerHTML == Questions[count_ques].correct) {
                option[i].classList.add("right_option")//turn green
                option[i].classList.add("active");
            }
            else {
                option[i].classList.add("wronge_option")//turn red
                option[i].classList.add("active");
                //click the wronge ans that mean we will make the correct ans also visible to user
                for (let j = 0; j < option.length; j++) {
                    if (option[j].innerHTML == Questions[count_ques].correct) {
                        option[j].classList.add("right_option")

                    }
                }

            }
            //-------------------------------------------------------------------------------------------------------


        }


    }

}

