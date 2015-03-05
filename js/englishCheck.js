$(function englishCheck() {
	  
	  // Get the form fields and hidden div
	  var checkbox = $("#trigger");
	  var hidden = [$("#hidden_MasterTitle"), $("#hidden_MasterText"), $("#hidden_N2Title")];
	  var index;
	  
	  for	(index = 0; index < hidden.length; index++) {
	  // Hide the fields.
	  // Use JS to do this in case the user doesn't have JS 
	  // enabled.
	  hidden[index].hide();
	  
	  // Setup an event listener for when the state of the 
	  // checkbox changes.
	  checkbox.change(function () {
	    // Check to see if the checkbox is checked.
	    // If it is, show the fields and populate the input.
	    // If not, hide the fields.
	    if (checkbox.is(':checked')) {
	      // Show the hidden fields.
	      hidden[index].show();
	    } else {
	      // Make sure that the hidden fields are indeed
	      // hidden.
	      hidden[index].hide();
	      
	      // You may also want to clear the value of the 
	      // hidden fields here. Just in case somebody 
	      // shows the fields, enters data to them and then 
	      // unticks the checkbox.
	      //
	      // This would do the job:
	      //
	      //$("#hidden_fields").val("");
	    }
	  });
	}
});
