boards = {
    title: new Array(),
    contents: new Array(),
    days: new Array(),
    insert: function () {
        boards.title.push(document.querySelector('#floatingInput').value);
        boards.contents.push(document.querySelector('#floatingPassword').value);
        document.querySelector('#floatingInput').value = '';
        document.querySelector('#floatingPassword').value = '';
        let today = new Date();   

        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;  // 월
        let date = today.getDate();  // 날짜
        let day = today.getDay();  // 요일        target = document.getElementById("board");
        var st1 = "";
        target = document.getElementById("board");
        for(var i=0;i<boards.title.length;i++) {
            st1 += ("<tr><td class='title'><a href=''>" + boards.title[i] + "</a></td><td class='name'>김광권</td><td class='date'>" + today.getFullYear() + "/" + (today.getMonth() + 1)+ "/" + today.getDate() + "</td><td class='hit'>0</td></tr>");
        }
        target.innerHTML = "<table class='sub_news' border='1' cellspacing='0' summary='게시판의 글제목 리스트'><caption>게시판 리스트</caption><colgroup><col><col width='110'><col width='100'><col width='80'></colgroup><thead><tr><th scope='col'>제목</th><th scope='col'>글쓴이</th><th scope='col'>날짜</th><th scope='col'>조회수</th></tr></thead><tbody>"
        + st1 + '</tbody></table><input type="button" value="글쓰기" onclick="w_ing_on()">'
    }
}
function w_ing_on() {
    displayOn("#w_ing");
}
function writing(w_title, w_contents) {
    title.push(document.querySelector(w_title).value)
    title.push(document.querySelector(w_contents).value)
    target = document.getElementById("board");
    target.innerHTML += "<tr><td class='title'><a href=''>" + boards.title[i] + "</a></td><td class='name'>글쓴이이름</td><td class='date'>2008/02/14</td><td class='hit'>1234</td></tr>";
}
function displayOn(id) {
    var divList = document.querySelectorAll("#contents > div");
    for (var i = 0; i < divList.length; i++) {
        divList[i].style.display = "none";
    }
    // document.querySelector("#notice").style.display = "none";
    // document.querySelector("#board").style.display = "none";
    // document.querySelector("#question").style.display = "none";
    // document.querySelector("#main").style.display = "none";
    document.querySelector(id).style.display = "block";
}
function active(index) {
    var aList = document.querySelectorAll(".mb-auto > div > nav > a");
    for (var i = 0; i < aList.length; i++) {
        aList[i].className = "nav-link fw-bold py-1 px-0";
    }
    aList[index].className = "nav-link fw-bold py-1 px-0 active"
}
function unactive() {
    var aList = document.querySelectorAll(".mb-auto > div > nav > a");
    for (var i = 0; i < aList.length; i++) {
        aList[i].className = "nav-link fw-bold py-1 px-0";
    }
}
function show(id) {
    document.querySelector(id).className = "background show";
}
function unshow(id) {
    document.querySelector(id).className = "background";
}

//   document.querySelector("#show_login").addEventListener('click', show("#login"));
//   document.querySelector("#close_login").addEventListener('click', close("#login"));
//   document.querySelector("#show_register").addEventListener('click', show("#register"));
//   document.querySelector("#close_register").addEventListener('click', close("#register"));