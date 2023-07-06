function writeCards(names, eventName) {
    let newArr = []
    for (let i = 0; i < names.length; i++) {
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return newArr;
}
writeCards(names, eventName);


function countDown(){
    for (let i = 10; i >= 0; i-- ) {
        console.log(i);
    }
}

countDown(); 
