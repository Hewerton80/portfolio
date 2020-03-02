export default (query,interval,content) =>{
    
    const element = document.querySelector(query)
    console.log("elemento: ",element)
    const textArray = String(content).split("");
    console.log("textArray: ",textArray)
    if(element){
        element.innerHTML = "" 
        textArray.forEach((c,i)=>{
            setTimeout(()=>{
                element.innerHTML+=c;
            },i*Number(interval))
        })
    }

    
}