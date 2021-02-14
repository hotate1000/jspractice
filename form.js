'use strict';

const btn = document.getElementById('btn');
btn.addEventListener("click", function() {
  const form = document.forms.formTest;
  console.log(form.name.value);
  console.log(form.email.value);
  console.log(form.age.value);
  // console.log(form.os.vale);
  
  form.os.forEach(item => {
      if(item.checked) console.log(item.value);
    });
});