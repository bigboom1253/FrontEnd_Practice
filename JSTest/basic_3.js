'use static'
// 1.
// Character클래스를만들어주세요
// Character클래스는health속성을추가해주세요(생성시200)
// Character클래스는move()메서드를추가하고메서드사용시health가-10이됩니다.
// Character클래스는rest()메서드를추가하고메서드사용시health가+10됩니다.
// 현재Health를리턴해주는checkHealth()메서드를추가해주세요

class Character{
    constructor(health = 200){
        this.health = health;
    }

    move(){
        this.health -= 10;
    };
    rest(){
        this.health += 10;
    }
    checkHealth(){
        console.log(`HP : ${this.health}`);
    };
}

const character_1 = new Character();
character_1.checkHealth();

character_1.move()
character_1.checkHealth();

character_1.rest()
character_1.checkHealth();

// 2.
// Knight와Healer클래스만들어주세요
// Knight와Healer클래스는Charcter클래스를상속합니다.
// Knight클래스는move()사용시health가-5더소모
// Knight클래스는attack()추가하고실행시“공격합니다”를출력해주세요
// Healer클래스는mana속성을추가해주세요(생성시100)
// Healer클래스는heal(character)메서드를추가하고메서드는character객체들을매개변수로받습니다.

// Healer클래스는Heal(character)메소드실행시본인의Mana가-10되고
// 전달받은character객체의rest()메소드를두번실행합니다.

// Healer클래스는현재mana를리턴해주는checkMana()메서드를추가해주세요

class Knight extends Character{
    constructor(health = 200){
        super(health);
    }
    move(){
        super.move()
        this.health -= 5;
    };
    attack(){
        console.log('공격합니다.');
    };

}

class Healer extends Character{
    constructor(health, mana = 100){
        super(health);
        this.mana = mana;
    }

    heal(character){
        this.mana -= 10;
        character.rest();
        character.rest();
    };

    checkMana(){
        console.log(`MP : ${this.mana}`);
    };
    
}

const knight_1 = new Knight();

knight_1.move();
knight_1.move();
knight_1.checkHealth();
knight_1.attack();
knight_1.checkHealth();

const healer_1 = new Healer();
healer_1.checkMana();
healer_1.heal(knight_1);
knight_1.checkHealth();
healer_1.checkMana();


