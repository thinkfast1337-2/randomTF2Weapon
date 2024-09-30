function typesFromChecked(){
    types = []

    if(document.getElementById("pri").checked == true) { types.push("Primary"); }
    if(document.getElementById("sec").checked == true) { types.push("Secondary"); }
    if(document.getElementById("mel").checked == true) { types.push("Melee"); }

    return types;
}

function allclasstypes() {
    types = typesFromChecked()
    let filteredItems = weapons.classes.map(aClass => 
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
    let class1 = weapons.classes.filter(aClass => aClass.name === Class);
    let filteredItems2 = class1.map(aClass => 
        Object.entries(aClass.weapons)
        .filter(([key]) => types.includes(key))
        .map(([, value]) => value)
        .reduce((prev, current) => prev.concat(current))
    );
    return filteredItems2;
}

function getClass(item) {
    let className = weapons.classes.filter(aClass => 
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
