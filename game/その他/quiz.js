class Quiz{
  constructor(statement, answer) {
    this.statement = statement;
    this.answer = answer;
  }
}

const texts = [
  new Quiz("1+1","2"),
  new Quiz("1+2","3"),
  new Quiz("1+3","4"),
  new Quiz("1+4","5")
  ];

var problem_number_max = texts.length;

var key = Math.round(Math.random() * problem_number_max);
var div_statement = document.getElementById('statement');
var div_result = document.getElementById('result');

window.onload = function(){
  div_statement.innerHTML = texts[key].statement;
};

function check(){
  if(answer_form.answer.value == texts[key].answer){
    div_result.innerHTML = "正解";
    return false;
  }else{
    div_result.innerHTML = "不正解";
    return true;
  }
}
