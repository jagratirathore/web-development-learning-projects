let form=document.querySelector("form");

form.addEventListener("submit",function(event){//(event)-agr /action vaale url pe ja rhe usko rokhna h vha nhi jaaye to hm use krte h event ka or event.preventDefault() to hm us hi page pe rehte h ./action pe nhi jaate vo rokh leta usko jaane se
  event.preventDefault();//us hi page pe rhenge vo action vaale url pe nhi jaayenge hm
  alert("Form Submitted");
});