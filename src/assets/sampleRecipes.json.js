import uuidv4 from 'uuid/v4'

export default [
    {
        id: uuidv4(),
        name: 'Plain Chicken',
        servings: 3,
        cookTime: '1:45',
        instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
        ingredients: [
            {
                id: 1,
                name: 'Chicken',
                amount: '2 Pounds'
            },
            {
                id: 2,
                name: 'Salt',
                amount: '1 Tbs'
            }
        ]
    },
    {
        id: uuidv4(),
        name: 'Plain Pork',
        servings: 5,
        cookTime: '0:45',
        instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
        ingredients: [
            {
                id: 1,
                name: 'Pork',
                amount: '3 Pounds'
            },
            {
                id: 2,
                name: 'Paprika',
                amount: '2 Tbs'
            }
        ]
    }
]