$(document).ready(function(){
	var LogoObject = function(programType, educationalLevel, img){
		this.programType = programType;
		this.educationalLevel = educationalLevel;
		this.img = img;
		this.activationFunction = function(programTypeInput, educationalLevelInput){
			if(programTypeInput === programType && educationalLevelInput === educationalLevel) || (programTypeInput === "search all" && educationalLevelInput === educationalLevel) || (programTypeInput === programType && educationalLevelInput === "search all") || (programTypeInput === "search all" && educationalLevelInput === "search all"){
				return true
			}
			else{
				return false
			}
		}
	}

	var logoObjectsArray = []


	document.getElementById("search").onclick = function (event) {
		event.preventDefault()

		// <--* variable to obtain values from first drop-down menu *-->

		var programType = document.getElementById("scholarships");
		var scholarshipOptions = programType.options[programType.selectedIndex].value;
		var selectAllPrograms = programType.options[programType.options.length-3].value;
		var scholarshipProgram = programType.options[programType.options.length-2].value;
		var loanProgram = programType.options[programType.options.length-1].value;
	

		//<--* variable to obtain values from second drop-down menu *-->

		var educationLevel = document.getElementById("educationalLevel");
		var levelOptions = educationLevel.options[educationLevel.selectedIndex].value;
		var selectAllLevels = programType.options[programType.options.length-3].value;
		var kindergartenLevel = programType.options[programType.options.length-2].value;
		var highSchoolLevel = programType.options[programType.options.length-1].value;
		
		var aci = new LogoObject(scholarshipProgram, kindergartenLevel, + "<img id= 'aciLogo' src='images/aciColor.png'>" + activationFunction(scholarshipProgram,kindergartenLevel));
		var acm = new LogoObject(loanProgram, highSchoolLevel), + "<img id= 'acmLogo' src='images/acm.png'>"


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