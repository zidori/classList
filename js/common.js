/* Class List 3 */
function classLeng(){
  let leng = document.querySelector('#text').classList;//classList는 배열을 반환한다.

  /*contain method classList에 해당 클래스가 포함되어 있는지
  여부를 확인하여 boolean type으로 반환한다.*/
  let bulNum = document.querySelector('#text').classList.contains('change_bg');
  console.log(bulNum);
  let checkNum = document.querySelector('#sidemenu').classList;
  if(checkNum.contains('on') == false){
    checkNum.add('on');
  }else{
    checkNum.remove('on');
  }
}
