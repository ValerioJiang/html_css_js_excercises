window.onload = function(){
    document.getElementById("add").addEventListener('click', addItem);
    document.getElementById("delete").addEventListener('click', removeItem);

    var ul = document.getElementById("ul");   
    function createCheckbox(){
        let el = document.createElement('input');
        el.type = 'checkbox';
        el.setAttribute('id','check');
        return el;
    }

    function addItem(){                         
        var input = document.getElementById('input')        
        var item = input.value;                 
        var textNode = document.createTextNode(item)
        if (item == '') {       
            msg= "Enter your Task"
            alert(msg)
            return false
            
        } else {
                         
            li = document.createElement('li');     
            let checkbox = createCheckbox();       
           
            let label = document.createElement('label')         
    
            ul.appendChild(label)                       
            li.appendChild(checkbox)
            label.appendChild(textNode)
            li.appendChild(label)
            ul.append(li)
            setTimeout(()=>{
                li.className = 'visual'
            },5)
            input.value = " "               
        }
    }

    
        function removeItem(){              //line 18
            li=ul.children
            for (let index = 0; index < li.length; index++) {   //line 19
                const element = li[index];              //line 20
                while(li[index] && li[index].children[0].checked){      //line 21
                    ul.removeChild(li[index])
                }
                
            }   
        }
    
}