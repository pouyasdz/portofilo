export function getParameter(param){
    const parameters = new URLSearchParams(window.location.search);
    return parameters.get(param);
}

export function scrollAnimation(elements, className){
    const revals = document.querySelectorAll(elements);

    revals.forEach((reval, index) => {
        const windowHeight = window.innerHeight;
        const elementTop = revals[index].getBoundingClientRect().top;
        const elementVisible = 150;
        if(elementTop < windowHeight - elementVisible){
            revals[index].classList.add(className)
        }
        else{
            revals[index].classList.remove(className)
        }
    })
}