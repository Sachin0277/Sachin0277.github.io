const quizDB = [
    {
        question:"Q1. Who invented Java Programming?",
        a: "Guido van Rossum",
        b: "James Gosling",
        c: "Dennis Ritchie",
        d: "Bjarne Stroustrup",
        ans:"ans2"
    },
    {
        question:"Q2. Which statement is true about Java",
        a: "Java is a sequence-dependent programming language",
        b: "Java is a code dependent programming language",
        c: "Java is a platform dependent programming language",
        d: "Java is a platform independent programming language",
        ans:"ans4"
    },
    {
        question:"Q3. Which component is used to compile, debug and execute the java programs?",
        a: "JRE", 
        b: "JIT",
        c: "JDK",
        d: "JVM",
        ans:"ans3"
    },
    {
        question:"Q4. Which of the following is not a java feature?",
        a: "Object-oriented",
        b: "Use of pointers",
        c: "Portable",
        d: "Dynamic and Extensible",
        ans:"ans2"
    },
    {
        question:"Q5. Which of these cannot be used for a variable name in java?",
        a: "identifier and keyword",
        b: "identifier",
        c: "keyword",
        d: "none of the mentioned",
        ans:"ans3"
    },
    {
        question:"Q6. What is the extension of java code files?",
        a: ".js",
        b: ".txt",
        c: ".class",
        d: ".java",
        ans:"ans4"
    },
    {
        question:"Q7. Which environment variable is used to set the java path?",
        a: "MAVEN_path",
        b: "JavaPATH",
        c: "JAVA",
        d: "JAVA_HOME",
        ans:"ans4"
    },
    {
        question:"Q8. Which of the following is not a OOPS concept in java?",
        a: "Polymorphism",
        b: "Inheritance",
        c: "Compilation",
        d: "Encapsulation",
        ans:"ans3"
    },
    {
        question:"Q9. Which of the following is a type of polymorphism in Java programming?",
        a: "Multiple polymorphism",
        b: "Compile time polymorphism",
        c: "Multilevel polymorphism",
        d: "Execution time polymorphism",
        ans:"ans2"
    },
    {
        question:"Q10. What is the extension of compiled java classes?",
        a: ".js",
        b: ".txt",
        c: ".class",
        d: ".java",
        ans:"ans3"
    }
    ];

    const question = document.querySelector('.question');
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const option3 = document.querySelector('#option3');
    const option4 = document.querySelector('#option4');
    const submit = document.querySelector('#submit');

    const answers = document.querySelectorAll('.answer');

    const showScore = document.querySelector('#showScore');
     
    let questionCount = 0;
    let score = 0;

    const loadQuestion = () => {
        
        const questionList = quizDB[questionCount];

        question.innerText = questionList.question;

        option1.innerText = questionList.a;
        option2.innerText = questionList.b;
        option3.innerText = questionList.c;
        option4.innerText = questionList.d;

    }

    loadQuestion();

    const getCheckAnswer = () => {
        let answer ;

       answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
       })
       return answer;
    };
    const deselectAll = () =>{
        answers.forEach((curAnsElem) => curAnsElem.checked = false);
    }

    submit.addEventListener('click',() =>{
        const checkedAnswer = getCheckAnswer();
        console.log(checkedAnswer);

        if(checkedAnswer == quizDB[questionCount].ans){
            score++;
        };
        questionCount++;
        

        deselectAll();

        if(questionCount < quizDB.length){
            loadQuestion();
        }
        else{
            showScore.innerHTML = `
                <h3>Score : ${score}/${quizDB.length} ✌️✌️ </h3>
                <button class="btn" onclick="location.reload()">Play Again </button>
                `;

            showScore.classList.remove('scoreArea');
        }   
    });
    