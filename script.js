
const navDropDownTopics = document.querySelector("ul.topics")
const navDropDownMore = document.querySelector('ul.more-section')
const headlines =document.querySelector('.header ul.top-headlines')
const searchDiv= document.querySelector(".nav-header .search-input")
const windowWith = window.innerWidth;
console.log(windowWith, "width")

function loadNavDropDownText(url, navDropDownTopics) {
    fetch(url)
    .then (resp => resp.text())
    .then(data => {
        let navTopics = data.split("\r\n").map(word => word.trim())
        navTopics = navTopics.sort()
        navTopics.forEach((word) => {
            const li = document.createElement('li')
                const a = document.createElement('a')
                a.innerHTML = word
                a.href = "#" + word.split(' ')[0]
                li.appendChild(a)
                navDropDownTopics.appendChild(li)
        })
    })
    .catch(error => console.error("Error loading file: ", error))
}

loadNavDropDownText("./utils/topics.txt", navDropDownTopics)
loadNavDropDownText("./utils/more.txt", navDropDownMore)
loadNavDropDownText("./utils/headlines.txt", headlines)

document.querySelector(".search-icons").addEventListener(
  "click", () => {
    if(getComputedStyle(searchDiv).display === "none") {
    console.log("search-icons none")

        document.querySelectorAll(".nav-header .long-menu ul").forEach((element) => {
            element.style.display = "none"
        } )
        searchDiv.style.display = "flex"
        document.querySelector(".search-icon").style.display = "none"
         document.querySelector(".search-cancle").style.display = "block";
         document.querySelector(".signin").style.display = "none"
    } else if(getComputedStyle(searchDiv).display === "flex") {

    console.log("search-icons flex", document.getElementsByClassName("search-input")[0], document.querySelectorAll(".nav-header .long-menu ul"))

        document.getElementsByClassName("search-input")[0].style.display = "none"
        if (windowWith >= 700) {
        document.querySelector(".nav-header .long-menu ul").style.display = "flex"
        }
        document.querySelector(".search-icon").style.display = "block"
        document.querySelector(".search-cancle").style.display = "none"
        document.querySelector(".signin").style.display = "flex"
    } 
  }
)

document.querySelector(".menu-icons").addEventListener(
    "click", () => {
        
        if (getComputedStyle( document.querySelector(".menu-icons .menu")).display === "flex") {
            document.querySelector(".nav-dropdown").style.display = "flex";
            document.querySelector(".menu-icons .menu").style.display = "none"
            document.querySelector(".menu-icons .menu-cancle").style.display ="flex";
            document.querySelector(".content").style.display = "none"
        } else if (getComputedStyle( document.querySelector(".menu-icons .menu")).display === "none") {
            document.querySelector(".nav-dropdown").style.display = "none";
            document.querySelector(".menu-icons .menu").style.display = "flex"
            document.querySelector(".menu-icons .menu-cancle").style.display ="none"
            document.querySelector(".content").style.display = "flex"
        }
    }
)