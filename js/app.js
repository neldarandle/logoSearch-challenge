$(document).ready(function(){

	// <--* variables to obtain values from first drop-down menu *-->

	var programType = document.getElementById("scholarships");
	var scholarshipOptions = programType.options[programType.selectedIndex].value;
	var selectAllPrograms = programType.options[programType.options.length-3].value;
	var scholarshipProgram = programType.options[programType.options.length-2].value;
	var loanProgram = programType.options[programType.options.length-1].value;
	

	//<--* variables to obtain values from second drop-down menu *-->

	var educationLevel = document.getElementById("educationalLevel");
	var levelOptions = educationLevel.options[educationLevel.selectedIndex].value;
	var selectAllLevels = educationLevel.options[educationLevel.options.length-3].value;
	var kindergartenLevel = educationLevel.options[educationLevel.options.length-2].value;
	var highSchoolLevel = educationLevel.options[educationLevel.options.length-1].value;

	//<--* object constructor with method that indicates when an object is chosen by user*-->

	var LogoObject = function(programType, educationalLevel,imgBW, imgColor){
		this.programType = programType;
		this.educationalLevel = educationalLevel;
		this.imgBW = imgBW;
		this.imgColor = imgColor;
		this.activationFunction = function(programTypeInput, educationalLevelInput){
			if((programTypeInput === programType && educationalLevelInput === educationalLevel) || (programTypeInput === selectAllPrograms && educationalLevelInput === educationalLevel) || (programTypeInput === programType && educationalLevelInput === selectAllLevels) || (programTypeInput === selectAllPrograms && educationalLevelInput === selectAllLevels)){
				return true
			}
			else{
				return false
			}
		}
	}

	var logoArray = []
	
	//<--* 8 new objects for each institution logo *-->

	var aci = new LogoObject(scholarshipProgram, kindergartenLevel,"images/aci.png","images/aciColor.png")
		console.log(aci)
	var acm = new LogoObject(loanProgram, highSchoolLevel, "images/acm.png","images/acm-color.png");
	var afe = new LogoObject(scholarshipProgram, highSchoolLevel,"images/AFE.png", "images/AFE-color.png");
	var aci2 = new LogoObject(loanProgram, kindergartenLevel,"images/aci.png", "images/aciColor.png");
	var aci3 = new LogoObject(scholarshipProgram, highSchoolLevel,"images/aci.png", "images/aciColor.png");
	var acm2 = new LogoObject(loanProgram, kindergartenLevel,"images/acm.png", "images/acm-color.png"); 
	var afe2 = new LogoObject(scholarshipProgram, kindergartenLevel,"images/AFE.png", "images/AFE-color.png");
	var aci4 = new LogoObject(loanProgram, highSchoolLevel,"images/aci.png", "images/aciColor.png");

	//<--* made the logoArray contain all the new objects, then added to the objects an id *-->

	logoArray.push(aci, acm, afe, aci2, aci3, acm2, afe2, aci4)
	var logoArrayWithIds = logoArray.map(function (item, index) {
		item.id = index
		return item
	})
	console.log(logoArray)
	console.log(logoArrayWithIds)

	//<--* this adds all the initial B&W images to the DOM *-->

	logoArrayWithIds.map(function (item, index) {
		$("#programLogos").append("<li class='specificLogo'>" + "<img id='" + item.id + "' src='" + item.imgBW + "'>" + "</li>")
	})

	//<--* function to run when user clicks the search button *-->

	document.getElementById("search").onclick = function (event) {
		event.preventDefault()

		//<--* variables to obtain the user's input from drop-down menus *-->
		
		var userInput1 = programType.options[programType.selectedIndex].value;
		console.log(userInput1)
		var userInput2 = educationLevel.options[educationLevel.selectedIndex].value;
		console.log(userInput2)

		console.log(userInput1)
		console.log(userInput2)

		//<--* added an acitivity property to the objects to know if activationFunction() is true or false *-->

		var activeArray = logoArray.map(function(item){
			item.activity = item.activationFunction(userInput1, userInput2)
			return item
		});
		console.log(activeArray)

		//<--* function to change the logo's color *-->

		activeArray.map(function(item){
			if(item.activity === true){
				document.getElementById(item.id).src = item.imgColor
			}
			else{
				document.getElementById(item.id).src = item.imgBW
			}
		})

	}


});