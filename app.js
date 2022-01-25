var thanosDamage = 0;
var mainEle = document.createElement("div");
var thanosDamageEle = document.createElement("div");
var catchphraseele = document.createElement("div");

function damageTaker (damage,catchphrase){
    thanosDamage = thanosDamage + damage;
    thanosDamageEle.innerHTML= "Thanos Damage" + thanosDamage;
    catchphraseele.innerHTML= "Catchphrase" + catchphrase;

mainEle.appendChild(thanosDamageEle);
mainEle.appendChild(catchphraseele);
document.body.appendChild(mainEle);
}

document.body.querySelector(".ResetButton").addEventListener("click",function () {
    thanosDamage = 0;
    thanosDamageEle.innerHTML= "Thanos Damage" + thanosDamage;
    catchphraseele.innerHTML= "Catchphrase";
    mainEle.appendChild(thanosDamageEle);
    mainEle.appendChild(catchphraseele);
    document.body.appendChild(mainEle);
})

document.body.querySelector(".Captain").addEventListener("click",function () {
    mainEle.innerHTML="";
    damageTaker(5,"Avengers Assemble");
})

document.body.querySelector(".BlackButton").addEventListener("click",function () {
    mainEle.innerHTML="";
    damageTaker(15,"I’m Always Picking Up After You Boys");
})

document.body.querySelector(".IronButton").addEventListener("click",function () {
    mainEle.innerHTML="";
    damageTaker(30,"Give me a scotch. I’m starving.");
})

document.body.querySelector(".ScarletButton").addEventListener("click",function () {
    mainEle.innerHTML="";
    damageTaker(50,"It's time to play mind games");
})


