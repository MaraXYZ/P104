function addUser()
{
  // Obtén el valor del usuario con id player1_name_input y player2_name_input
  player1_name_input= document.getElementById("nombre_usario").Value;
  player2_name_input= document.getElementById("nombre_usario").Value;
  // Almacena los valores en el almacenamiento local
  localStorage.setItem("player1_name_input" ,player1_name_input)

  localStorage.setItem("player2_name_input" ,player2_name_input)
  //Asigna "game_page.html" a window.location
  window.location = "game_page.html";
}

