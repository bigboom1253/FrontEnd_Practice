window.onload = () => {
    
    function mk_node (node_name, input_text, id =''){
        let node = document.createElement(node_name);
        let text = document.createTextNode(input_text);
        if(id){
            node.setAttribute('id',id)
        }
        node.appendChild(text);
        return node;
    }

    function mk_gugudan(number_dan){
        let mk_dan = mk_node('li',`${number_dan}단`,`dan_${number_dan}`);
        let class_dan = document.querySelector("#gugudan");
        class_dan.appendChild(mk_dan);

        for(let i =1; i<10; i++){
            let mk_sik = mk_node('li',`${number_dan} x ${i} = ${number_dan*i}`,`sik_${number_dan}`);
            // let selector = document.querySelector("#gugudan");
            let selector = document.querySelector(`#gugudan li#dan_${number_dan}`);
            selector.appendChild(mk_sik);    
        }
    }
    
    for(let i= 2; i<10; i++){
        mk_gugudan(i)
    }

}