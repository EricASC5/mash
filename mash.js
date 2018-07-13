//const dad = getHome();
let home =["mansion", "home", "shack", "hotel"]

//console.log(house);

function getHome(){
const decimal = Math.random()*home.length;
const round = Math.floor(decimal);
const getHome = home[round];
return getHome;

}
 function mash(){
    console.log("You will live in a " + getHome() + ",and you will have "+ getChildrenCount() + " kids!" + "and you'll drive a" + getCar());
}



mash();

function getChildrenCount(){
    const child = Math.random()*100;
    const land = Math.floor(child);
    return land;
}

function getCar(){
    let vehical =["lambo", "8 wheeler", "scootscoot", "space pod"]
    const car = Math.random()*vechical.length;
    const road = Math.floor(car);
}