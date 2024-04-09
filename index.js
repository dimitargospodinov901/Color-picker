const colorInfoElement = document.getElementById("colorInfo")
let hexVal = document.getElementById("hexVal")   


function fetchColor(){
        const getColor = document.getElementById("head")
        const getScheme = document.getElementById("dropdown")      
        
        const colorPicked = getColor.value.slice(1)
            fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicked}&mode=${getScheme.value}&count=5`)
            .then(res => res.json())
            .then(data => displayColorInfo(data))         
             
    }    


 function displayColorInfo(data) {
     colorInfoElement.innerHTML = '';
     hexVal.innerHTML = '';
        const selectedColor = data.colors.map(color => {                
            colorInfoElement.innerHTML +=`         
                <div 
                    class="colorRender" style="background-color:${color.hex.value}">                
                </div>                             
                `  
            hexVal.innerHTML += `
            <section 
                id="hex" data-color="${color.hex.value}">${color.hex.value}
            </section>
            `        
        })
        document.addEventListener("click", (e) => {
                if (e.target.id.includes("hex")) {
                 navigator.clipboard.writeText(e.target.dataset.color)
            }
        })                
}

 
