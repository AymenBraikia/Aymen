// confirm("Are you Ready ?");
let lis = document.querySelectorAll("ul li")
lis.forEach((li) =>
{
    li.addEventListener("click", (e) =>
    {
        lis.forEach((li) =>
        {
            li.classList.remove("active")
        })
        li.classList.add('active')
        localStorage.setItem("id", li.textContent)
    })
})
if (window.localStorage.getItem("id"))
{
    let sec = document.getElementById(localStorage.getItem("id"))
    sec.classList.add("active")
}
document.getElementById("explorebtn").onclick = function ()
{
    window.alert("This is not working yet")
}
let plzwork = document.getElementById("options")
let justwork = document.getElementById("settings")
plzwork.onclick = function ()
{
    justwork.classList.toggle("active")
    plzwork.classList.toggle("active")
}
let timerspan = document.getElementById("endingtime")
let startingmunites = 50
let time = startingmunites * 60
let myTimerEl = setInterval(() =>
{
    updatetime()
}, 1000)
function updatetime()
{
    const munites = Math.floor(time / 60)
    let seconds = time % 60
    seconds = seconds < 10 ? '0' + seconds : seconds
    timerspan.innerHTML = `${munites}m:${seconds}s`
    --time
}
let bell = document.getElementById("bell")
let myMsgDiv = document.getElementById("anything")
bell.onclick = function ()
{
    myMsgDiv.classList.toggle("actv")
    setTimeout(() =>
    {
        myMsgDiv.classList.remove("actv")
    }, 2500)
}

let bid = document.querySelector(".placeBid")
let bided = document.querySelector(".bidplaced")
bid.addEventListener("click", (e) =>
{
    bided.classList.add("activated")
})
let bid1 = document.querySelector(".bid2")
bid.addEventListener("click", (e) =>
{
    bided.classList.add("activated")
})
let bid2 = document.querySelector(".bid3")
bid2.addEventListener("click", (e) =>
{
    bided.classList.add("activated")
})
let bid3 = document.querySelector(".bid4")
bid3.addEventListener("click", (e) =>
{
    bided.classList.add("activated")
})
let bid4 = document.querySelector(".bid5")
bid4.addEventListener("click", (e) =>
{
    bided.classList.add("activated")
})
let bid5 = document.querySelector(".bid6")
bid5.addEventListener("click", (e) =>
{
    bided.classList.add("activated")
})
let bid6 = document.querySelector(".bid7")
bid6.addEventListener("click", (e) =>
{
    bided.classList.add("activated")
})
let confirmbid = document.getElementById("confirming")
let cancelbid = document.getElementById("canceling")
let msgPlace = document.querySelector(".msgplace")
cancelbid.onclick = function ()
{
    bided.classList.remove("activated")
}

confirmbid.onclick = function ()
{
    setTimeout(() =>
    {
        bided.classList.remove("activated")
    }, 2000)
    let themessage = document.createElement("p")
    themessage.textContent = "Your Bid has been placed successfully"
    setTimeout(() =>
    {
        msgPlace.classList.add("perfect")
        msgPlace.appendChild(themessage)
    }, 1000)
    setTimeout(() =>
    {
        msgPlace.classList.remove("perfect")
        msgPlace.removeChild(themessage)
    }, 2500)
}
let key = document.getElementById("keys")
let myul = document.getElementById("myul")
key.onclick = function () {
    key.classList.toggle("active")
    myul.classList.toggle("active")
}
let artists = document.getElementById("artists")
let dumb = document.getElementById("accpfp")
dumb.onclick = function () {
    dumb.classList.toggle("active")
    artists.classList.toggle("active")
}