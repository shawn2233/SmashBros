const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 6400

app.use(cors())

const characters = {
    'Mario': {
        'name': "Mario",
        'firstLook': 'Smash bros N64',
        "franchise":"Mario",
        "url" : "https://www.smashbros.com/wiiu-3ds/sp/images/character/mario/main.png"
    },
    'Donkey kong':{
        'name': "Donkey Kong",
        'firstLook': 'Smash bros Brawl',
        "franchise":"Donkey Kong",
        "url": "https://www.smashbros.com/assets_v2/img/fighter/donkey_kong/main.png"
    },
    'Fox':{
        'name': "Fox",
        'firstLook': 'Smash bros N64',
        "franchise":"Star Fox",
        "url": "https://ssb.wiki.gallery/images/7/74/Fox_SSB4.png"
    },
    'Ike':{
        'name': "Ike",
        'firstLook': 'Smash bros Brawl',
        "franchise":"Fire Emblem",
        "url": "https://www.smashbros.com/assets_v2/img/fighter/ike/main8.png"
    },
    'Little Mac':{
        'name': "Little Mac",
        'firstLook': 'Smash bros 3DS/Wii U',
        "franchise":"Punch Out",
        "url": "https://www.smashbros.com/assets_v2/img/fighter/little_mac/main.png"
    },
    'Mega Man':{
        'name': "Mega Man",
        'firstLook': 'Smash bros 3DS/Wii U',
        "franchise":"Mega Man",
        "url": "https://ssb.wiki.gallery/images/3/30/MM11-MegaMan.png"
    },
    'Lucario':{
        'name': "Lucario",
        'firstLook': 'Smash bros Brawl',
        "franchise":"Pokemon",
        "url": "https://ssb.wiki.gallery/images/thumb/0/08/Lucario_SSBU.png/1200px-Lucario_SSBU.png"
    },
    'Sephiroth':{
        'name': "Sephiroth",
        'firstLook': 'Smash bros Ultimate',
        "franchise":"Final Fantasy",
        "url": "https://www.smashbros.com/assets_v2/img/fighter/sephiroth/main8.png"
    },
    'Link':{
        'name': "Link",
        'firstLook': 'Smash bros N64',
        "franchise":"The Legend of Zelda",
        "url": "https://www.smashbros.com/assets_v2/img/fighter/link/main.png"
    },
    'Marth':{
        'name': "Marth",
        'firstLook': 'Smash bros Melee',
        "franchise":"Fire Emblem",
        "url": "https://www.smashbros.com/assets_v2/img/fighter/marth/main.png"
    },
    'Ryu':{
        'name': "Ryu",
        'firstLook': 'Smash bros 3DS/Wii U',
        "franchise":"Street Fighter",
        "url": "https://www.smashbros.com/wiiu-3ds/sp/images/character/ryu/main.png"
    },
    'Ness':{
        'name': "Ness",
        'firstLook': 'Smash bros N64',
        "franchise":"EarthBound",
        "url": "https://www.smashbros.com/assets_v2/img/fighter/ness/main2.png"
    },
    'unknown':{
        'name':"unknown",
        'firstLook': 'unknown',
        'franchise': 'unknown'
    }
}
app.get('/api/allCharacters', (request, response) => {
    response.json(characters)
})

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})
app.get('/main.css', (request, response)=>{
    response.sendFile(__dirname + '/main.css')
})

app.get('/api/:charname',(request,response)=>{
    const characterName = request.params.charname

    if(characters[characterName] ){
        response.json(characters[characterName])
    }else{
        response.json(characters['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})