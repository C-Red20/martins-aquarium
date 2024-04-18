/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Bart",
            species: "Gooper",
            food: "crustaceans",
            length: 10,
            location: "Pacific Ocean",

        },
        {
            name: "Gerald",
            species: "Bass",
            food: "Bugs",
            length: 3,
            location: "Lake Uto",

        },
        {
            name: "Susan",
            species: "Alligator Gar",
            food: "fish &crustaceans",
            length: 52,
            location: "Rivers near Gulf of Mexico",

        }
        
    ]
}


export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const lengths of length) {
        if (lengths / 3 === 0 ) {
            console.log(number)
        }
    }

    return mostHolyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
   const soldiers = []

   for (const lengths of length) {
    if (lengths / 5 === 0 ) {
        console.log(number)
    }
}
   
    return soldierFish
}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const lengths of length) {
        if ((lengths / 3 !== 0) || (lengths / 5 !== 0 )) {
            console.log(number)
        }
    return regularFish
};





export const mostHolyFish = () => {
    return database.fish.map(fish => ({...fish}))
};

export const getsoldiers = () => {
    return database.fish.map(fish => ({...fish}))
};

export const getregularFish = () => {
    return database.fish.map(fish => ({...fish}))
}
