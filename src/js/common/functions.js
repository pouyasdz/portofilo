export function getParameter(param){
    const parameters = new URLSearchParams(window.location.search);
    return parameters.get(param);
}