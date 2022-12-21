// 테이블의 열과 줄을 동적으로 생성하여 삽입하기

window.onload=()=>{

  // 버튼 가져오기
  const btnCrc = document.querySelector('.btnCrc');
  console.log(btnCrc);


  // 버튼 클릭 시 --> 할 일 처리
  btnCrc.addEventListener('click', ()=>{

    // 할 일 처리
    let hTbody = document.getElementById('htmlTbody');
    console.log(hTbody);

    // JavaScript Table row and column
    // Insert a row at the end of table
    const newRow0 = hTbody.insertRow();     // 한 줄 삽입
    // const newRow1 = hTbody.insertRow(); // 한 줄 삽입
    // const newRow2 = hTbody.insertRow(); // 한 줄 삽입
    // const newRow3 = hTbody.insertRow(); // 한 줄 삽입
    // const newRow4 = hTbody.insertRow(); // tr 5개
    
    
    // Insert a cell at the end of row
    const newCell0 = newRow0.insertCell(); 
    const newCell1 = newRow0.insertCell();
    const newCell2 = newRow0.insertCell();
    const newCell3 = newRow0.insertCell();// 4개의 셀 / td 4개 삽입

    // Append - 텍스트 노드를 새롭게 생성한 Cell 에 붙이기
    const newText0 = document.createTextNode('홍길동');
    newCell0.appendChild(newText0);

    const newText1 = document.createTextNode('hong@hong.com');
    newCell1.appendChild(newText1);

    const newText2 = document.createTextNode('25');
    newCell2.appendChild(newText2);

    const newText3 = document.createTextNode('영화보기');
    newCell3.appendChild(newText3);
    




  });




























}