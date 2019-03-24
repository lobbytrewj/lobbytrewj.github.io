//var a = 10%8*3/2
//alert(a)

alert("Welcome To Summoner's Rift")


//var arrayA = [1, 2, 5, 6, 10]
//alert(arrayA);
//goes with
//arrayA.push("Herro");
//alert(arrayA)


//var boo = false && true || true && true
//alert(boo)


/*function addSquares(x, y) {
	return(x*x + y*y)
}
*/
//alert(addSquares(1009, 2678));


/*function concat(str1,str2) {
	return(str1 + str2);
}

//alert(concat("Hello ", "World"))


var newstring = concat("Hello", "World");

alert(newstring);

function triProduct(x, y, z) {
	alert(x*y*z)
}
alert(triProduct(10,11,12))
*/

function slide() {
	$(".carousel-inner").slideToggle();
	$("#div1").slideToggle();
	$("title").slideToggle();
}

function change() {
	$("#p1").html("HELLO!")
	$("#p1").css("font-size", "100px")
	$("#p1").css("color", "darkblue")
}

/*function alertValue() {
	alert($("#name").val())
}*/

function validate() {

	var missing = []

	if($("#name").val() == "")
		missing.push("name")
	if($("#email").val() == "")
		missing.push("email")
	if($("#message").val() == "")
		missing.push("message")

	if(missing.length>0) {

		$("#errormessage").css("color", "red")

		$("#errormessage").html("You are missing: " + missing)

	   } else {

                  $("#errormessage").css("color", "green")

     $("#errormessage").html("Thank you for submitting!")

}	

}


