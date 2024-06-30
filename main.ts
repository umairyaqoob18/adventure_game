
import inquirer from 'inquirer';
class player{
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name =name;
    }
    fueldecrease(){
        let fuel = this.fuel -25
        this.fuel = fuel
    }
    fuelincrease(){
        this.fuel = 100
    }
}

class opponent{
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name =name;
    }
    fueldecrease(){
        let fuel = this.fuel -25
        this.fuel = fuel
    }
}
let players = await inquirer.prompt([
    {
        name:"name",
        type:"input",
        message:"please enter your name"

    }
])
let opponents = await inquirer.prompt([
    {
        name:"select",
        type:"list",
        message:"select your opponent",
        choices:["skeleton","zombie","alien"]
    }
]) 
let p1 = new player(player.name)
let o1 = new opponent(opponents.select)

do{
    if(opponents.select =="skeleton" ){
        let ask = await inquirer.prompt([
            {
                name:'opt',
                type:"list",
                message:"what would you like to attack",
                choices:["attack","drink porotion","run for life"]
            }
        ]);
        if(ask.opt=="attack"){
            let num = Math.floor(Math.random()*2)
            if(num > 0){
                p1.fueldecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`)
                console.log(`${o1.name} fuel is ${o1.fuel}`)
            }
            if (num<=0){
                o1.fueldecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`)
                console.log(`${o1.name} fuel is ${o1.fuel}`)
            }
        }
        if(ask.opt == "drink porotion"){
           p1.fuelincrease()
           console.log(`you drink healty porition your fuel is ${p1.fuelincrease}`);
           
        }
        if(ask.opt =="run for life"){
            console.log("you lose match try again")
        }
    }
}
while(true)