$(document).ready(function() {

  $("#dropdown").change(function() {
    var selectedValue = $(this).val()
    var label = $(this).next('.other-option')
    if (selectedValue == "none") {
      label.show()
    } else {
      label.hide()
    }
  });

  $("#cb-other").change(function(){
    var checked = this.checked
    var divchecked = $(".describe-fav")
    if(checked){
      divchecked.show()
    }else{
      divchecked.hide()
    }
  })

})
