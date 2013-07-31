$(document).ready(function() {

  function GetAwesome(){
  	$('#awesomeness_holder').empty()
  	var data = $(this).data('heading')
	$('#awesomeness_holder').append(data)
  }

  function GetSkill(){
  	$('#skill_holder').empty()
  	var selectedSkill = window.location.pathname.split('/')[2]
  	$('#skill_holder').append(selectedSkill)
  }

  function GetMeal(){
  	$('#meal_holder').empty()
  	var selectedFood = meals[Math.floor(Math.random()*meals.length)]
  	$('#meal_holder').append(selectedFood)
  }

  function EventHandler(){
  	$('.meal_teller').on('click', GetMeal)
  	$('.skill_teller').on('click', GetSkill)
  	$('.awesomeness_teller').on('click', GetAwesome) 
  }
  
  // What other events do you need to bind to make the other pages work?

  EventHandler();
});

