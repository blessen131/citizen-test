let score=0;
let questionIndex=0;
let questions=[];
let currentQuestion;

let history=[];

// SPEAK
function speak(text){
    const speech=new SpeechSynthesisUtterance(text); speech.lang="en-US"; speechSynthesis.speak(speech); }

// START QUIZ
function startQuiz(){

    document.getElementById("startBtn").style.display = 'none';
    document.getElementById("exitBtn").style.display="inline-block";
    document.getElementById("skipBtn").style.display="inline-block";

    score=0;
    questionIndex=0;
    history=[];
    document.getElementById("score").innerText=0;

    questions=[...quiz].sort(()=>Math.random()-0.5);
    if( questions.length>=20)
    {
        questionsCount = 20
    } else {
        questionsCount = questions.length;
    }

    nextQuestion();
}
function skipQuestion(){

    history.push({
        question:currentQuestion.question,
        user:"Skipped",
        correctAnswers:currentQuestion.answers,
        correct:false,
        skipped:true
    });
    let answers = currentQuestion.answers.join('\n');
    document.getElementById("result").innerHTML="Q"+currentQuestion.id+". "+currentQuestion.question+" <span style='color: orange'>Skipped</span><p>"+answers+"</p>";
    speak("Question skipped");

    questionIndex++;

    updateProgress();

    setTimeout(nextQuestion,1000);

}


// EXIT QUIZ
function exitQuiz(){
    location.reload();
}

// NEXT QUESTION
function nextQuestion(){
    if(questionIndex>=20 || questionIndex >= questionsCount){
        document.getElementById("skipBtn").style.display='none'
        finishQuiz();
        return;
    }

    currentQuestion=questions[questionIndex];

    document.getElementById("counter").innerText=
        "Question "+(questionIndex+1)+"/"+questionsCount;

    // document.getElementById("question").innerText=
    //     currentQuestion.question;

    speak(currentQuestion.question);

    startListening();
}

// LISTEN
function startListening(){

    const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;

    const recognition=new SpeechRecognition();

    recognition.lang="en-US";

    recognition.start();

    recognition.onresult=function(event){

        let answer=event.results[0][0].transcript.toLowerCase();

        checkAnswer(answer);

    };
}

// CHECK ANSWER
function checkAnswer(userAnswer){

    let answersLower = currentQuestion.answers.map(a => a.toLowerCase());
    let correct= answersLower.some(a=>userAnswer.includes(a));
    let answers = currentQuestion.answers.join('<br>');
    history.push({
        question:currentQuestion.question,
        user:userAnswer,
        correctAnswers:currentQuestion.answers,
        correct:correct
    });

    if(correct){
        score++;
        document.getElementById("result").innerHTML="Q"+currentQuestion.id+". "+currentQuestion.question+" <span style='color:green'>Correct</span><p>"+answers+"</p>";
        speak("Correct");

    }else{
        document.getElementById("result").innerHTML="Q"+currentQuestion.id+". "+currentQuestion.question+" <span style='color: #e53935'>Wrong</span><p>"+answers+"</p>";
        speak("Wrong answer");
    }

    questionIndex++;

    document.getElementById("score").innerText=score;

    updateProgress();

    setTimeout(nextQuestion,2000);

}

// PROGRESS
function updateProgress(){

    let percent=(questionIndex/questionsCount)*100;

    document.getElementById("progressBar").style.width=percent+"%";

}

// FINISH QUIZ
function finishQuiz(){
    let result =  (score/questionsCount)*100
    if(result>=60)
    {
        finalResult ="Passed"
    } else
    {
        finalResult ="Failed"
    }
    document.getElementById("question").innerText="Quiz Completed | Result:"+Math.floor(result)+"%";
    document.getElementById("counter").innerText=finalResult;
    document.getElementById("result").style.display='none';

    speak("Quiz completed. Your score is "+score+" You "+finalResult+" the quiz");

    let html="<h3>Quiz Summary</h3>";

    history.forEach((q,i)=>{

        html+="<div>";

        if(q.skipped){
            html+="<b>"+q.id+". "+q.question+"</b> <span style='color:red '>Wrong</span><br>";
        }
        else if(q.correct){
            html+="<b>"+q.id+". "+q.question+"</b> <span style='color:green '>Correct</span><br>";
        }
        else{
            html+="<b>"+q.id+". "+q.question+"</b> <span style='color:red '>Wrong</span><br>";
        }
        html+="Your answer: "+q.user+"<br>";

        html+="Correct answers: "+q.correctAnswers.join("<br>")+"<br>";

        html+="<hr></div>";

    });

    document.getElementById("summary").innerHTML=html;

}
