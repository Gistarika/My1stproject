const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")

const mybtn= document.getElementById("mybtn")

mybtn.style.backgroundColor = "red";
mybtn.style.padding="15px 40px"
mybtn.style.borderRadius="20px"
mybtn.style.color="blue"
mybtn.style.border="none"


function btnwork() {
    alert("ismingiz:"+input1.value+"\n"+"yoshingiz:"+input2.value)
}
