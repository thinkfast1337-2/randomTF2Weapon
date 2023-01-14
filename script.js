const json ={
    
    "classes": [
       {
          "name": "Scout",
          "weapons": {
             "Primary": [
                "Scattergun",
                "Force-A-Nature",
                "Shortstop",
                "Soda Popper",
                "Baby Face's Blaster",
                "Back Scatter"
             ],
             "Secondary": [
                "Pistol",
                "Winger",
                "Pretty Boy's Pocket Pistol",
                "Flying Guillotine",
                "Bonk! Atomic Punch",
                "Crit-a-Cola",
                "Mad Milk"
             ],
             "Melee": [
                "Bat",
                "Sandman",
                "Candy Cane",
                "Boston Basher",
                "Sun-on-a-Stick",
                "Fan O'War",
                "Atomizer",
                "Wrap Assassin"
             ]
          }
       },
       {
          "name": "Soldier",
          "weapons": {
             "Primary": [
                "Rocker Launcher",
                "Direct Hit",
                "Black Box",
                "Rocket Jumper",
                "Liberty Launcher",
                "Cow Mangler 5000",
                "Beggar's Bazooka",
                "Air Strike"
             ],
             "Secondary": [
                "Shotgun",
                "Reserve Shooter",
                "Panic Attack",
                "Righteous Bison",
                "Gunboats",
                "Mantreads",
                "Buff Banner",
                "Battalion's Backup",
                "Concheror",
                "B.A.S.E. Jumper"
             ],
             "Melee": [
                "Shovel",
                "Equalizer",
                "Escape Plan",
                "Pain Train",
                "Half-Zatoichi",
                "Disciplinary Action",
                "Market Gardener"
             ]
          }
       },
       {
          "name": "Pyro",
          "weapons": {
             "Primary": [
                "Flame Thrower",
                "Backburner",
                "Degreaser",
                "Phlogistinator",
                "Dragon's Fury"
             ],
             "Secondary": [
                "Shotgun",
                "Reserve Shooter",
                "Panic Attack",
                "Flare Gun",
                "Detonator",
                "Scorch Shot",
                "Manmelter",
                "Thermal Thruster",
                "Gas Passer"
             ],
             "Melee": [
                "Fire Axe",
                "Axtinguisher",
                "Homewrecker",
                "Powerjack",
                "Back Scratcher",
                "Sharpened Volcano Fragment",
                "Third Degree",
                "Neon Annihilator",
                "Hot Hand"
             ]
          }
       },
       {
          "name": "Demoman",
          "weapons": {
             "Primary": [
                "Grenade Launcher",
                "Lock-n-Load",
                "Loose Cannon",
                "Iron Bomber",
                "Ali Baba's Wee Booties",
                "B.A.S.E. Jumper"
             ],
             "Secondary": [
                "Stickybomb Launcher",
                "Scottish Resistance",
                "Quickiebomb Launcher",
                "Sticky Jumper",
                "Chargin' Targe",
                "Splendid Screen",
                "Tide Turner"
             ],
             "Melee": [
                "Bottle",
                "Pain Train",
                "Ullapool Caber",
                "Eyelander",
                "Scotsman's Skullcutter",
                "Claidheamh Mòr",
                "Half-Zatoichi",
                "Persain Persuader"
             ]
          }
       },
       {
          "name": "Heavy",
          "weapons": {
             "Primary": [
                "Minigun",
                "Natascha",
                "Brass Beast",
                "Tomislav",
                "Huo-Long Heater"
             ],
             "Secondary": [
                "Shotgun",
                "Panic Attack",
                "Family Business",
                "Sandvich",
                "Dalokohs Bar",
                "Buffalo Steak Sandvich",
                "Second Banana"
             ],
             "Melee": [
                "Fists",
                "Killing Gloves of Boxing",
                "Gloves of Running Urgently",
                "Warrior's Spirit",
                "Fists of Steel",
                "Eviction Notice",
                "Holiday Punch"
             ]
          }
       },
       {
          "name": "Engineer",
          "weapons": {
             "Primary": [
                "Shotgun",
                "Frontier Justice",
                "Widowmaker",
                "Pomson 6000",
                "Rescue Ranger",
                "Panic Attack"
             ],
             "Secondary": [
                "Pistol",
                "Wrangler",
                "Short Circut"
             ],
             "Melee": [
                "Wrench",
                "Gunslinger",
                "Southern Hospitality",
                "Jag",
                "Eureka Effect"
             ],
            
          }
       },
       {
          "name": "Medic",
          "weapons": {
             "Primary": [
                "Syringe Gun",
                "Blutsauger",
                "Crusader's Crossbow",
                "Overdose"
             ],
             "Secondary": [
                "Medi Gun",
                "Kritzkrieg",
                "Quick-Fix",
                "Vaccinator"
             ],
             "Melee": [
                "Bonesaw",
                "Übersaw",
                "Vita-Saw",
                "Amputator",
                "Solemn Vow"
             ]
          }
       },
       {
          "name": "Sniper",
          "weapons": {
             "Primary": [
                "Sniper Rifle",
                "Huntsman",
                "Sydney Sleeper",
                "Bazaar Bargain",
                "Machina",
                "Hitman's Heatmaker",
                "Classic"
             ],
             "Secondary": [
                "SMG",
                "Cleaner's Carbine",
                "Jarate",
                "Razorback",
                "Darwin's Danger Shield",
                "Cozy Camper"
             ],
             "Melee": [
                "Kukri",
                "Tribalman's Shiv",
                "Bushwacka",
                "Shahanshah"
             ]
          }
       },
       {
          "name": "Spy",
          "weapons": {
             "Primary": [
                "Revolver",
                "Ambassador",
                "L'Etranger",
                "Enforcer",
                "Diamondback"
             ],
             "Melee": [
                "Knife",
                "Your Eternal Reward",
                "Conniver's Kunai",
                "Big Earner",
                "Spy-cicle"
             ],
             "Secondary": [
                "Sapper",
                "Red-Tape Recorder"
             ]
          }
       }
    ]
 }



function typesFromChecked(){
    types = []

    if(document.getElementById("pri").checked == true) { types.push("Primary"); }
    if(document.getElementById("sec").checked == true) { types.push("Secondary"); }
    if(document.getElementById("mel").checked == true) { types.push("Melee"); }

    return types;
}

function allclasstypes() {
    types = typesFromChecked()
    let filteredItems = json.classes.map(aClass => 
        Object.entries(aClass.weapons)
        .filter(([key]) => types.includes(key))
        .map(([, value]) => value)
        .reduce((prev, current) => prev.concat(current))
    );
    let mergedItems = [].concat(...filteredItems);
    return mergedItems;
}



function oneclasstypes(Class){
    types = typesFromChecked()
    let class1 = json.classes.filter(aClass => aClass.name === Class);
    let filteredItems2 = class1.map(aClass => 
        Object.entries(aClass.weapons)
        .filter(([key]) => types.includes(key))
        .map(([, value]) => value)
        .reduce((prev, current) => prev.concat(current))
    );
    return filteredItems2;
}

function getClass(item) {
    let className = json.classes.filter(aClass => 
        aClass.weapons.Primary.includes(item) ||
        aClass.weapons.Secondary.includes(item) ||
        aClass.weapons.Melee.includes(item)
    );
    
if (className.length > 1) {
    className = "Multi-Class";
} else {
    className = className[0].name;
}
return className;
}



function randomClassItem(Class){
    let items = oneclasstypes(Class)[0]
    console.log(items)
    let randomIndex = Math.floor(Math.random() * items.length);
   
    let randomItem = items[randomIndex];
    setItem(randomItem);
    return randomItem;
}
function randomItem(){
    let items = allclasstypes()
    let randomIndex = Math.floor(Math.random() * items.length);
    let randomItem = items[randomIndex];
    setItem(randomItem);
    return randomItem;
}

function setItem(item){
    classtf2 = getClass(item);
    document.getElementById("itemname").innerHTML = item;
    document.getElementById("itemclass").innerHTML = classtf2;
}
