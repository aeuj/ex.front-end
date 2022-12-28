// JS 쿠키 사용자 정의 함수 및 전체 삭제 만들기


// 쿠키 읽기
const getCookie = function(){
  // 로컬에 저장된 모든 쿠키 읽어오기
  const allCookies = document.cookie; // 하나의 문자열로 리털
  console.log(allCookies);

  // if조건문 --> 쿠키가 있으면
  if(allCookies != '')
    alert('저장된 쿠키의 값은: ' +allCookies);
  else
    alert('저장된 쿠키가 없습니다.')
}

// 쿠키 생성하기 --> 함수 표현식
const setCookie = function(caname, cvalue, cexpire){

  event.preventDefault(); // submit, href 발생시 --> 이동 방지 및 새로 실행되는 것을 방지

  // 넘어온 값 체크
  if(document.getElementById('cname').value!=''){
    cname = document.getElementById('cname').value;
    cvalue = document.getElementById('cvalue').value;
    cexpire = document.getElementById('cexpire').value;
  }
    console.log('cname='+cname);
    console.log('cvalue='+cvalue);
    console.log('cexpire='+cexpire);
    console.log(typeof cexpire); // typeof --> String

    // 만료일 생성 --> 현재에서 30일간으로 생성 --> setDate()메서드 사용
    let expiration = new Date();
    console.log(expiration);
    expiration.setDate(expiration.getDate()+parseInt(cexpire)); // Number()로 처리가능
    console.log(expiration);

    // 날짜를 쿠키로 저장하기 위해서 --> UTC방식으로 표기 -> toUTCString()메서드 사용
    console.log(expiration.toGMTString());

    // 쿠키 생성하기
    let cookies = '';
    cookies += `${cname} =${cvalue};`;
    cookies += `expires=${expiration.toGMTString()}`
    console.log(cookies);

    // 쿠키 저장하기
    document.cookie = cookies;
    // document.getElementById('cname').value ='';
    // document.getElementById('cname').focus();
    document.getElementById('form').reset(); // 이건 한번에 초기화.
    alert('쿠키를 생성하였습니다');

}

// 쿠키 삭제하기
const delCookie = function(cname){
  // 쿠키삭제는? --> 이미 지나간 시간을 입력해버림으로써 쿠키를 삭제시킨다
  // document.cookie = 'userid=; expires=Sat,01 Jan 1972 00:00:00 GMT';
  console.log(cname);
  setCookie(cname, "", 0);
  alert('쿠키를 삭제했습니다.');
}


// addEventListener
  const form = document.getElementById('form');
  form.addEventListener('submit', setCookie);









