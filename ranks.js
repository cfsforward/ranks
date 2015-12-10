$(document).ready(function () {
    //Check if we are on a Rank page
    //If we are disable the continue button
    //If not then exit script
    if ($('select').hasClass('Rank1')) {
        $('input[name="btnSubmit"]').prop("disabled", true);
        //set Select Size
        $('select').css('width', '350px');
        //disable dropdowns
        if ($(".Rank1").val() == "") {
            $(".Rank2").prop("disabled", true);
        }
        if ($(".Rank2").val() == "") {
            $(".Rank3").prop("disabled", true);
        }
		//copy the second select, so we can easily reset it
		var cloneRank2 = $('.Rank2').clone();
		var cloneRank3 = $('.Rank3').clone();
		var cloneTemp;
    } else {
        return;
    }



    // hide 3rd option if didn't select 3 options

     if ($('.Rank1 option').size() <= 3) {
         if ($(".Rank2").val() != "") {
             $('input[name="btnSubmit"]').prop("disabled", false);
         } else {
             $('input[name="btnSubmit"]').prop("disabled", true);
         }
         $('.Rank3').hide();
     } else {
        if ($(".Rank3").val() != "") {
             $('input[name="btnSubmit"]').prop("disabled", false);
         } else {
             $('input[name="btnSubmit"]').prop("disabled", true);
         }
     }
	
	
	
	if($(".Rank2").val() != ""){
		var selectedvalue = $(".Rank1 option:selected").val();
        var selectedtext = $(".Rank1 option:selected").text();
        var elementA = $(".Rank2 option[value='" + selectedvalue + "']");
        var elementB = $(".Rank3 option[value='" + selectedvalue + "']");
        elementA.remove();
        elementB.remove();
		cloneTemp = $('.Rank3').clone();
	}
	
	if($(".Rank3").val() != ""){
		 var selectedvalue1 = $(".Rank2 option:selected").val();
        var selectedtext1 = $(".Rank2 option:selected").text();
        var elementB1 = $(".Rank3 option[value='" + selectedvalue1 + "']");
        elementB1.remove();
	}
	

    

    $(".Rank1").change(function () {
		$(".Rank1 option[value='']").prop('disabled', true);
        $(".Rank2").prop("disabled", false);
        $('.Rank2').html(cloneRank2.html());
        $('.Rank3').html(cloneRank3.html());
        var selectedvalue = $(".Rank1 option:selected").val();
        var selectedtext = $(".Rank1 option:selected").text();
        var elementA = $(".Rank2 option[value='" + selectedvalue + "']");
        var elementB = $(".Rank3 option[value='" + selectedvalue + "']");
        elementA.remove();
        elementB.remove();

        cloneTemp = $('.Rank3').clone();

		

    });

    $(".Rank2").change(function () {
		$(".Rank2 option[value='']").prop('disabled', true);
        $(".Rank3").prop("disabled", false);
        $('.Rank3').html(cloneTemp.html());

        var selectedvalue1 = $(".Rank2 option:selected").val();
        var selectedtext1 = $(".Rank2 option:selected").text();
        var elementB1 = $(".Rank3 option[value='" + selectedvalue1 + "']");
        elementB1.remove();
		if ($('.Rank1 option').size() <= 3) {
			if ($(".Rank2").val() != "") {
				$('input[name="btnSubmit"]').prop("disabled", false);
			} else {
				$('input[name="btnSubmit"]').prop("disabled", true);
			}
		}
    });


    $(".Rank3").change(function () {
		$(".Rank3 option[value='']").prop('disabled', true);
        if ($(".Rank3").val() != "") {
            $('input[name="btnSubmit"]').prop("disabled", false);
        } else {
            $('input[name="btnSubmit"]').prop("disabled", true);
        }
    });
	
	if($('.Rank1').val() != ""){
		$(".Rank1 option[value='']").prop('disabled', true);
		$(".Rank2 option[value='']").prop('disabled', true);
		$(".Rank3 option[value='']").prop('disabled', true);
	}

});
