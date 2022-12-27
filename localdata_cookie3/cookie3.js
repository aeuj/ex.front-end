// JS 쿠키 사용자 정의 함수 및 전체 삭제 만들기


// 쿠키 읽기


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
    alert('쿠키를 생성하였습니다');


}

// addEventListener
  const form = document.getElementById('form');
  form.addEventListener('submit', setCookie);







