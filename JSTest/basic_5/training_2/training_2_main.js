window.onload = () =>{
    function mk_node (node_name, input_text){
        let node = document.createElement(node_name);
        let text = document.createTextNode(input_text);
        node.appendChild(text);
        return node;
    }
    let id_hello = document.querySelector("#hello");
    id_hello.appendChild(mk_node('span','안녕하세요'));
    id_hello.appendChild(mk_node('span','안녕하세요'));
    id_hello.appendChild(mk_node('span','안녕하세요'));
    id_hello.appendChild(mk_node('span','안녕하세요'));
    id_hello.appendChild(mk_node('span','안녕하세요'));

}