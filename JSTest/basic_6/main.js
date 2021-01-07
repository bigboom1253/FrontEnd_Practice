window.onload = () => {

    function mk_computer_card(){
        computer_card = Math.floor(Math.random()*3) + 1

        let computer_card_image_node = document.createElement("img");
        computer_card_image_node.setAttribute("id","computer_card");
        
        // 컴퓨터 카드 이미지 변경
        if(computer_card === 1){
            computer_card_image_node.setAttribute("src","./resource/1.png");
        }
        else if(computer_card === 2){
            computer_card_image_node.setAttribute("src","./resource/2.png");
        }
        else if(computer_card === 3){
            computer_card_image_node.setAttribute("src","./resource/3.png");
        }

        let computer_card_image = document.querySelector(".battle_image");

        //computer_card_image_node 중복생성 방지 
        let check = document.querySelector('.battle_image #computer_card');
        
        if(check){
            check.parentNode.removeChild(check)
        }

        computer_card_image.appendChild(computer_card_image_node);
    }

    function print_result(player_card, computer_card){
        let result;
        switch (player_card){
            case 1 :
                if(player_card === computer_card){
                    result = "비겼습니다.";
                }
                else if(computer_card === 2){
                    result = "졌습니다.";
                }
                else if(computer_card=== 3){
                    result = "이겼습니다!";
                }
                break;
            case 2 :
                if(player_card === computer_card){
                    result = "비겼습니다.";
                }
                else if(computer_card === 1){
                    result = "이겼습니다!";
                }
                else if(computer_card=== 3){
                    result = "졌습니다.";
                }
                break;
            case 3 :
                if(player_card === computer_card){
                    result = "비겼습니다.";
                }
                else if(computer_card === 1){
                    result = "졌습니다.";
                }
                else if(computer_card=== 2){
                    result = "이겼습니다!";
                }
                break;
        }

        let battle_result_text_node = document.createElement('span');
        battle_result_text_node.setAttribute('id','result_text');
        let battle_result_text = document.createTextNode(result)
        battle_result_text_node.appendChild(battle_result_text);

        let battle_result = document.querySelector('.battle_result_text');

        let check = document.querySelector('.battle_result_text #result_text');
        
        if(check){
            check.parentNode.removeChild(check)
        }
        battle_result.appendChild(battle_result_text_node);

        // return result;
    }
    
    let computer_card = -1;
    let player_card = -1;
    let player_card_image_node = document.createElement("img");
    let battle_image = document.querySelector(".battle_image");

    document.querySelector('#scissor').onclick = (event) =>{
        player_card = 1; 
        console.log("Player : 가위! 클릭!")
        player_card_image_node.setAttribute("src","./resource/1.png");
        battle_image.appendChild(player_card_image_node);
        mk_computer_card();
        print_result(player_card, computer_card);
    }
    document.querySelector('#rock').onclick = (event) =>{
        // console.log(event);
        player_card = 2;
        console.log("Player : 바위! 클릭!")
        player_card_image_node.setAttribute("src","./resource/2.png");
        battle_image.appendChild(player_card_image_node);
        mk_computer_card();
        print_result(player_card, computer_card);
    }
    document.querySelector('#paper').onclick = (event) =>{
        // console.log(event);
        player_card = 3;
        console.log("Player : 보! 클릭!")
        player_card_image_node.setAttribute("src","./resource/3.png");
        battle_image.appendChild(player_card_image_node);
        mk_computer_card();
        console.log(print_result(player_card, computer_card));


    }



}