alert ("The truth revealed")


const observer = new IntersectionObserver((entries)=> {
    console.log("intersecting")
entries.forEach((entry) => {
    if (entry.isIntersecting) {
      
        entry.target.classList.add("in-view")
        entry.target.classList('remove-in-view')
    } else {
        entry.target.remove("in-view")
        entry.target.classList.add("not-in-view")
    }
})
}, 
{
rootMargin: "0px",
threshold: [0,0.1,1]
},
)
alert ("more truth")
console.log(observer)
const tags = document.querySelectorAll("figure, h2, div")

tags.forEach((tag)=> {
    observer.observe(tag)
})


