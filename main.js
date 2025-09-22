const submit = document.getElementById("form");
const subCard = document.getElementById("card-subscribe")

submit.addEventListener("submit",(e) =>{
    e.preventDefault()
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
  
    if(!data.email.includes("@")){
        console.log("email not corect!");
    }
});