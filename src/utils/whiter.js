export default (query,interval) =>{
    
    const element = document.querySelector(query)
    console.log("elemento: ",element)
    const textArray = String(element.innerHTML).split("");
    console.log("textArray: ",textArray)
    element.innerHTML = "" 
    textArray.forEach((c,i)=>{
        setTimeout(()=>{
            element.innerHTML+=c;
        },i*Number(interval))
    })
    
}