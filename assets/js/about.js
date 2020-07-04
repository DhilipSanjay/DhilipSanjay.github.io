const skills=
[
    80, //c/c++
    70, //HTML
    60, //CSS
    40, //JS
    40, //PHP
    60  //Web Security
];

const skillLength = skills.length;

function skillPercentage()
{
    for(i = 0; i< skillLength; i++)
    {   
        const elementclass = ".skill" + (i+1);
        const element = document.querySelector(elementclass);
        element.innerHTML = skills[i] +"%";

        const varname = "--skill" +  (i+1);
        document.documentElement.style.setProperty(varname, skills[i] +"%")
    }
}

skillPercentage();


const flowIns = document.querySelectorAll('.skill-bar');

const flowInOptions = {
    root: null, // it is the viewport
    threshold: 0,
    rootMargin: "0px" //negative pulls the margin inside from the corner
};

const flowInScroll = new IntersectionObserver(function(entries, flowInScroll ){
    entries.forEach(entry =>{
        if(entry.isIntersecting)
        {
            entry.target.classList.add("flow-in");
            flowInScroll.unobserve(entry.target);
        }
        else
            return;
        });
}, flowInOptions);

flowIns.forEach(flowIn =>
    {
        flowInScroll.observe(flowIn);
    });
