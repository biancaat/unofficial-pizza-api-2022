const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 8000

app.use(cors())



let pizza = {
    'chicago' :{
        'crust' : 'thick, crispy' ,
        'traditional toppings' : 'ground beef, sausage, pepperoni, onion, mushrooms, green peppers' ,
        'variations' : 'unknown' ,
        'Degrees in F' : 'unknown' ,
        'Cook time in min' : 35 ,
        'Perfered method of baking' : 'Deep dish pan'
    } ,
    'neapolitan' :{
        'crust' : 'thin' ,
        'traditional toppings' : 'fresh mozzarella, tomatoes, basil leaves, oregano, olive oil' ,
        'variations' : ['Marinara', 'Margherita', 'Margherita extra'] ,
        'Degrees in F' : 1000 ,
        'Cook time in min' : 1.5 ,
        'Perfered method of baking' : 'wood/coal burning oven'
    } ,
    'new York' :{
        'crust' : 'crispy' ,
        'traditional toppings' : 'tomato sauce, mozzarella cheese' ,
        'variations' : 'unknown' ,
        'Degrees in F' : 'unknown' ,
        'Cook time in min' : 'unknown' ,
        'Perfered method of baking' : 'wood/coal burning oven'
    } ,
    'sicilian' :{
        'crust' : 'thick, crunchy' ,
        'traditional toppings' : 'tomato, onion, anchovies, herbs' ,
        'variations' : 'unknown' ,
        'Degrees in F' : 425 ,
        'Cook time in min' : 15 ,
        'Perfered method of baking' : 'oven'
    } ,
    'greek' :{
        'crust' : 'puffy, chewy' ,
        'traditional toppings' : 'heavy sauce, mozarella, provolone, cheddar, black olives, onions, feta cheese' ,
        'variations' : 'unknown' ,
        'Degrees in F' : 'unknown' ,
        'Cook time in min' : 'unknown' ,
        'Perfered method of baking' : 'oven in shallow round pan'
    } ,
    'california' :{
        'crust' : 'thick or thin' ,
        'traditional toppings' : 'Anything goes' ,
        'variations' : 'unknown' ,
        'Degrees in F' : 'unknown' ,
        'Cook time in min' : 'unknown' ,
        'Perfered method of baking' : 'unknown'
    } ,
    'detroit' :{
        'crust' : 'thick, extra crispy crust that is tender and airy on the inside' ,
        'traditional toppings' : 'pepperoni, brick cheese, tomato sauce, mushrooms and olives' ,
        'variations' : 'unknown' ,
        'Degrees in F' : 550 ,
        'Cook time in min' : '15' ,
        'Perfered method of baking' : 'push air out of dough'
    } ,
    'st. louis' :{
        'crust' : 'firm',
        'traditional toppings' : 'Provel cheese, sweeter tomato sauce, oregano' ,
        'variations' : 'unkown' ,
        'Degrees in F' : 'unknown' ,
        'Cook time in min' : 'unknown' ,
        'Perfered method of baking' : 'thin baking sheet; place on the lowest rack position'
    } ,
    'unknown' :{
        'crust' : 'unknown',
        'traditional toppings' : 'unknown' ,
        'variations' : 'unkown' ,
        'Degrees in F' : 'unknown' ,
        'Cook time in min' : 'unknown' ,
        'Perfered method of baking' : 'unknown'
    } 


}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const pizzaStyle = request.params.name.toLowerCase()
    if (pizza[pizzaStyle]){
        response.json(pizza[pizzaStyle])
    } else{
        response.json(pizza['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`This sever is running on Port ${PORT}`)
})