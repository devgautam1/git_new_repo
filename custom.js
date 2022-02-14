function formvalidation() {
  /* name validation */
  var regName = /^[a-zA-Z ]{3,50}$/;
  var name = document.reg_form.studentname.value;
  if (name==null || name==""){  
    alert("Name can't be blank");
    document.reg_form.studentname.focus();  
    return false;  
  }else{
    sdfsddsfsdfsdfsdfsdfsdf
    var con = regName.test(name);
    if(con == false){
      alert('Invalid name given.');
      document.reg_form.studentname.focus();
      return false;
    }sdfsdf
  }
}