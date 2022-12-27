function login(){
    var player1_name = document.getElementById("player1_name_input").value;
    var player2_name = document.getElementById("player2_name_input").value;

    console.log(player1_name);
    console.log(player2_name);

    localStorage.setItem("player1" , player1_name);
    localStorage.setItem("player2" , player2_name);
    
    window.location="game_page.html";
}
