$(document).ready(function(){

	// <--* variable to obtain values from first drop-down menu *-->

	var programType = document.getElementById("scholarships");
	var scholarshipOptions = programType.options[programType.selectedIndex].value;
	var selectAllPrograms = programType.options[programType.options.length-3].value;
	var scholarshipProgram = programType.options[programType.options.length-2].value;
	var loanProgram = programType.options[programType.options.length-1].value;
	

	//<--* variable to obtain values from second drop-down menu *-->

	var educationLevel = document.getElementById("educationalLevel");
	var levelOptions = educationLevel.options[educationLevel.selectedIndex].value;
	var selectAllLevels = educationLevel.options[educationLevel.options.length-3].value;
	var kindergartenLevel = educationLevel.options[educationLevel.options.length-2].value;
	var highSchoolLevel = educationLevel.options[educationLevel.options.length-1].value;

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
		
	var aci = new LogoObject(scholarshipProgram, kindergartenLevel,"images/aci.png","images/aciColor.png")
		console.log(aci)
	var acm = new LogoObject(loanProgram, highSchoolLevel, "images/acm.png","images/acm-color.png");
	var afe = new LogoObject(scholarshipProgram, highSchoolLevel,"images/AFE.png", "images/AFE-color.png");
	var aci2 = new LogoObject(loanProgram, kindergartenLevel,"images/aci.png", "images/aciColor.png");
	var aci3 = new LogoObject(scholarshipProgram, highSchoolLevel,"images/aci.png", "images/aciColor.png");
	var acm2 = new LogoObject(loanProgram, kindergartenLevel,"images/acm.png", "images/acm-color.png"); 
	var afe2 = new LogoObject(scholarshipProgram, kindergartenLevel,"images/AFE.png", "images/AFE-color.png");
	var aci4 = new LogoObject(loanProgram, highSchoolLevel,"images/aci.png", "images/aciColor.png");

	logoArray.push(aci, acm, afe, aci2, aci3, acm2, afe2, aci4)
	var logoArrayWithIds = logoArray.map(function (item, index) {
		item.id = index
		return item
	})
	console.log(logoArray)
	console.log(logoArrayWithIds)

	logoArrayWithIds.map(function (item, index) {
		$("#programLogos").append("<li class='specificLogo'>" + "<img id='" + item.id + "' src='" + item.imgBW + "'>" + "</li>")
	})

	document.getElementById("search").onclick = function (event) {
		event.preventDefault()
		
		var userInput1 = programType.options[programType.selectedIndex].value;
		console.log(userInput1)
		var userInput2 = educationLevel.options[educationLevel.selectedIndex].value;
		console.log(userInput2)

		console.log(userInput1)
		console.log(userInput2)

		var activeArray = logoArray.map(function(item){
			item.activity = item.activationFunction(userInput1, userInput2)
			return item
		});
		console.log(activeArray)


		activeArray.map(function(item){
			if(item.activity === true){
				document.getElementById(item.id).src = item.imgColor
				// $("#programLogos").toggle("<li class='specificLogo'>" + "<img id='" + item.id + "' src='" + item.imgColor + "'>" + "</li>")
			}
			else{
				document.getElementById(item.id).src = item.imgBW
			}
		})




		// for(var i = 0; i<logoArray.length; i++){
		// 	i.activationFunction(userInput1, userInput2)
		// 	if(item.activationFunction() === true){
		// 		return "ooiii"
		// 	}
		// 	else{
		// 		return "nooo"
		// 	}
		// };
		// // <--* variable to obtain values from first drop-down menu *-->

		// var programType = document.getElementById("scholarships");
		// var scholarshipOptions = programType.options[programType.selectedIndex].value;
		// var selectAllPrograms = programType.options[programType.options.length-3].value;
		// var scholarshipProgram = programType.options[programType.options.length-2].value;
		// var loanProgram = programType.options[programType.options.length-1].value;
	

		// //<--* variable to obtain values from second drop-down menu *-->

		// var educationLevel = document.getElementById("educationalLevel");
		// var levelOptions = educationLevel.options[educationLevel.selectedIndex].value;
		// var selectAllLevels = educationLevel.options[educationLevel.options.length-3].value;
		// var kindergartenLevel = educationLevel.options[educationLevel.options.length-2].value;
		// var highSchoolLevel = educationLevel.options[educationLevel.options.length-1].value;
		
		// var aci = new LogoObject(scholarshipProgram, kindergartenLevel, "<img id= 'aciLogo' src='images/aciColor.png'>")
		// // aci.activationFunction(scholarshipProgram,kindergartenLevel);
		// console.log(aci)
		// var acm = new LogoObject(loanProgram, highSchoolLevel, "<img id= 'acmLogo' src='images/acm.png'>");
		// // acm.activationFunction(loanProgram, highSchoolLevel);
		// // console.log(acm)
		// var afe = new LogoObject(scholarshipProgram, highSchoolLevel, "<img id= 'afeLogo' src='images/AFE.png'>");
		// // afe.activationFunction(scholarshipProgram, highSchoolLevel);
		// var aci2 = new LogoObject(loanProgram, kindergartenLevel, "<img id= 'aciLogo' src='images/aciColor.png'>");
		// 	// aci2.activationFunction(loanProgram, kindergartenLevel);
		// var aci3 = new LogoObject(scholarshipProgram, highSchoolLevel, "<img id= 'aciLogo' src='images/aciColor.png'>");
		// // aci3.activationFunction(scholarshipProgram, highSchoolLevel);
		// var acm2 = new LogoObject(loanProgram, kindergartenLevel, "<img id= 'acmLogo' src='images/acm.png'>");
		// // acm2.activationFunction(loanProgram, kindergartenLevel); 
		// var afe2 = new LogoObject(scholarshipProgram, kindergartenLevel, "<img id= 'afeLogo' src='images/AFE.png'>");
		// // afe2.activationFunction(scholarshipProgram, kindergartenLevel); 
		// var aci4 = new LogoObject(loanProgram, highSchoolLevel, "<img id= 'aciLogo' src='images/aciColor.png'>");
		// // aci4.activationFunction(loanProgram, highSchoolLevel);

		// logoArray.push(aci, acm, afe, aci2, aci3, acm2, afe2, aci4)
		// console.log(logoArray)

		
		
		

		


		// if((levelOptions === "searchAll" || scholarshipOptions === "searchAll") || (levelOptions === "searchAll" && scholarshipOptions === "searchAll"){
		// 	// remove classes first line			
		// 	$(".aci").removeClass("aciColor");
		// 	$(".acm").removeClass("acmColor");
		// 	$(".afe").removeClass("afeColor");
		// 	$(".aci2").removeClass("aciColor");
		// 	// remove classes second line
		// 	$(".acm2").removeClass("acmColor");
		// 	$(".aci3").removeClass("aciColor");
		// 	$(".afe2").removeClass("afeColor");
		// 	$(".aci4").removeClass("aciColor");
		// 	// Add classes first line
		// 	$(".aci").toggleClass("aciColor");
		// 	$(".acm").toggleClass("acmColor",300);
		// 	$(".afe").toggleClass("afeColor",300);
		// 	$(".aci2").toggleClass("aciColor",300);
		// 	// event.stopPropagation
		// 	// add classes second line
		// 	$(".acm2").toggleClass("acmColor");
		// 	$(".aci3").toggleClass("aciColor");
		// 	$(".afe2").toggleClass("afeColor");
		// 	$(".aci4").toggleClass("aciColor");
		// 	// event.stopPropagation
		// }
		// else if(levelOptions === "kindergarten" || scholarshipOptions === "scholarship" || levelOptions  === "kindergarten" && scholarshipOptions  === "scholarship"){
		// 	// remove classes first line			
		// 	$(".aci").removeClass("aciColor");
		// 	$(".acm").removeClass("acmColor");
		// 	$(".afe").removeClass("afeColor");
		// 	$(".aci2").removeClass("aciColor");
		// 	// remove classes second line
		// 	$(".acm2").removeClass("acmColor");
		// 	$(".aci3").removeClass("aciColor");
		// 	$(".afe2").removeClass("afeColor");
		// 	$(".aci4").removeClass("aciColor");
		// 	// add class
		// 	$(".aci").toggleClass("aciColor");
		// 	$(".aci4").toggleClass("aciColor");
		// 	$(".aci3").toggleClass("aciColor");
		// 	$(".afe2").toggleClass("afeColor");
		// 	event.stopPropagation
		// }

		// else if(levelOptions === "highSchool" || scholarshipOptions === "scholarship" || levelOptions  === "highSchool" && scholarshipOptions  === "scholarship"){
		// 	// remove classes first line			
		// 	$(".aci").removeClass("aciColor");
		// 	$(".acm").removeClass("acmColor");
		// 	$(".afe").removeClass("afeColor");
		// 	$(".aci2").removeClass("aciColor");
		// 	// remove classes second line
		// 	$(".acm2").removeClass("acmColor");
		// 	$(".aci3").removeClass("aciColor");
		// 	$(".afe2").removeClass("afeColor");
		// 	$(".aci4").removeClass("aciColor");
		// 	// add class
		// 	$(".afe").toggleClass("afeColor");
		// 	$(".acm2").toggleClass("acmColor");
		// 	event.stopPropagation
		// }

		// else if(levelOptions  === "kindergarten" && scholarshipOptions  === "scholarship"){
		// 	// // remove classes first line			
		// 	// $(".aci").removeClass("aciColor");
		// 	// $(".acm").removeClass("acmColor");
		// 	// $(".afe").removeClass("afeColor");
		// 	// $(".aci2").removeClass("aciColor");
		// 	// // remove classes second line
		// 	// $(".acm2").removeClass("acmColor");
		// 	// $(".aci3").removeClass("aciColor");
		// 	// $(".afe2").removeClass("afeColor");
		// 	// $(".aci4").removeClass("aciColor");
		// 	// add class
		// 	$(".aci").toggleClass("aciColor",300);
		// 	$(".aci4").toggleClass("aciColor");
		// 	$(".aci3").toggleClass("aciColor");
		// 	event.stopPropagation
		// }
		// else if(levelOptions === "highSchool" || scholarshipOptions === "loan" || levelOptions  === "highSchool" && scholarshipOptions  === "loan"){
		// 	$(".aci").removeClass("aciColor");
		// 	$(".acm").removeClass("acmColor");
		// 	$(".afe").removeClass("afeColor");
		// 	$(".aci2").removeClass("aciColor");
		// 	// remove classes second line
		// 	$(".acm2").removeClass("acmColor");
		// 	$(".aci3").removeClass("aciColor");
		// 	$(".afe2").removeClass("afeColor");
		// 	$(".aci4").removeClass("aciColor");
		// 	// add class
		// 	$(".acm").toggleClass("acmColor",300);
		// 	$(".afe2").toggleClass("afeColor");
		// }

		// else{
		// 	$(".aci").removeClass("aciColor");
		// 	$(".acm").removeClass("acmColor");
		// 	$(".afe").removeClass("afeColor");
		// 	$(".aci2").removeClass("aciColor");
		// 	// remove classes second line
		// 	$(".acm2").removeClass("acmColor");
		// 	$(".aci3").removeClass("aciColor");
		// 	$(".afe2").removeClass("afeColor");
		// 	$(".aci4").removeClass("aciColor");		
		// }
	}


});