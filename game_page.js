p1Name = localStorage.getItem("Name1");
p2Name = localStorage.getItem("Name2");

p1score = 0;
p2score = 0;

questionTurn = "p1";
answerTurn = "p2"; 

document.getElementById('player1Name').innerHTML = p1Name;
document.getElementById('player2Name').innerHTML = p2Name;

document.getElementById('player1Score').innerHTML = " = " + p1score;
document.getElementById('player2Score').innerHTML = " = " + p2score;

document.getElementById('player_Question').innerHTML = "Question Turn : " + p1Name
document.getElementById('player_Answer').innerHTML = "Answer Turn : " + p2Name

function send()
{
    inputWord = document.getElementById('textInputWord').value;
    word = inputWord.toLowerCase()
    console.log(word)

    charat1 = word.charAt(1)
    console.log(charat1)

    charatMid = Math.floor(word.length/2)
    charat2 = word.charAt(charatMid)
    console.log(charat2)

    charatLast = word.length - 1
    charat3 = word.charAt(charatLast)
    console.log(charat3)

    removeCharat1 = word.replace(charat1,"_")
    console.log(removeCharat1)

    removeCharat2 = removeCharat1.replace(charat2,"_")
    console.log(removeCharat2)
    
    removeCharat3 = removeCharat2.replace(charat3,"_")
    console.log(removeCharat3)

    questionWord = "<h4 id='word_display'>Q:" + removeCharat3 + "</h4><br>"
    inputBox = "Answer:<input type='text' id='inputCheckBox' placeholder='Type Answer Here'><br><br>"
    checkBtn = "<button class='btn btn-warning' onclick = 'check()'>Check</button>"
    row = questionWord + inputBox + checkBtn
    document.getElementById('output').innerHTML = row;
    document.getElementById('textInputWord').value = '';
}

function check()
{
    getAnswer = document.getElementById('inputCheckBox').value;
    answer = getAnswer.toLowerCase()
    console.log(answer);

    if(word == answer)
    {
        if(answerTurn == "p1")
        {
            p1score = p1score + 1;
            document.getElementById('player1Score').innerHTML = " = " + p1score;
        }
        else
        {
            p2score = p2score + 1;
            document.getElementById('player2Score').innerHTML = " = " + p2score;
        }
    }
    else
    {
        if(questionTurn == "p1")
        {
            p1score = p1score + 1;
            document.getElementById('player1Score').innerHTML = " = " + p1score;
        }
        else
        {
            p2score = p2score + 1;
            document.getElementById('player2Score').innerHTML = " = " + p2score;
        }
    }

    if(questionTurn == "p1")
    {
        questionTurn = "p2";
        document.getElementById('player_Question').innerHTML = "Question Turn : " + p2Name
    }
    else
    {
        questionTurn = "p1"
        document.getElementById('player_Question').innerHTML = "Question Turn : " + p1Name
    }


    if(answerTurn == "p1")
    {
        answerTurn = "p2";
        document.getElementById('player_Answer').innerHTML = "Answer Turn : " + p2Name
    }
    else
    {
        answerTurn = "p1"
        document.getElementById('player_Answer').innerHTML = "Answer Turn : " + p1Name
    }
    document.getElementById('output').innerHTML = "";
}
