const submit = document.getElementById("form");
const subCard = document.getElementById("card-subscribe");
const disCard =document.getElementById("card-dismiss");
const alert = document.getElementById("alert");
const emailInfo = document.getElementById("guestEmail");
const emailInput = document.getElementById("email");

emailInput.addEventListener("click", (e)=>{
    e.preventDefault();
    emailInput.classList.remove("alert-style");
    alert.classList.add("hidden");
})

submit.addEventListener("submit",(e) =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
  
    if(!data.email.includes("@")){
        emailInput.classList.add("alert-style");
        alert.classList.remove("hidden");
    }else{
        emailInfo.textContent = data.email;
        subCard.classList.toggle("hidden");
        disCard.classList.toggle("hidden");
    };
});