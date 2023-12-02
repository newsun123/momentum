const age = parseInt(prompt("몇살입니까?"));

console.log(isNaN(age));

if(isNaN(age)){
  console.log("숫자를 적어주세요.");
} else {
  console.log("당신의 나이를 적어주셔서 감사합니다.");
}

//console.log(age, parseInt(age));  // 첫번째는 String, 두번째는 Int
