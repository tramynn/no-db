const conflictStyles = [
    {
        id: 1,
        name: "Collaborating",
        description: ""
    },
    {
        id: 2,
        name: "Competing",
        description: ""
    },
    {
        id: 3,
        name: "Avoiding",
        description: ""
    },
    {
        id: 4,
        name: "Accommodating",
        description: ""
    },
    {
        id: 5,
        name: "Compromising",
        description: ""
    }
]

const getConflictStyles = (req, res) => {
    res.status(200).json(conflictStyles);
}

module.exports = {
    getConflictStyles
}