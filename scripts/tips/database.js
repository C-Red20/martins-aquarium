const database = {
    TipList: [
        {
            tip: "Make sure water is correct for the type of fish you have."
        },
        {
            tip: "Lighting needs to be correct for fish"
        },
        {
            tip: "Wash your feet with your fish"
        }

    ]
}

export const getTipList = () => {
    return database.tip.map(tips => ({...tips}))
}