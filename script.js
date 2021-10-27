"use strict"

let dogs=[]

dogs.push({name:"Fluffy",Breed:"Poodle",picture:"https://better-bred-cdn.azureedge.net/wp-content/uploads/2020/01/83215170_490716638301586_2674939789823705088_n-scaled.jpg",age:"5"})
dogs.push({name:"Otto",Breed:"Chihuahua",picture:"https://static.independent.co.uk/2021/04/13/00/photojoiner_photo%20%282%29.jpeg?width=982&height=726&auto=webp&quality=75",age:"8"})
dogs.push({name:"Alfie",Breed:"French Bulldog",picture:"https://www.pitpat.com/wp-content/uploads/2021/07/alexandru-sofronie-5mR3z8PcCOQ-unsplash-1-1024x768.jpg",age:"6"})
dogs.push({name:"Bucky",Breed:"Cocker Spaniel",picture:"https://www.pdsa.org.uk/media/8264/cocker-spaniel-outdoors-gallery-1-min.jpg?anchor=center&mode=crop&quality=100&height=500&bgcolor=fff&rnd=132204646460000000",age:"7"})
dogs.push({name:"Cookie",Breed:"German Shepard",picture:"https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg",age:"3"})
dogs.push({name:"Buster",Breed:"Siberian Husky",picture:"https://www.pdsa.org.uk/media/7892/husky-gallery-outdoors-1-min.jpg?anchor=center&mode=crop&quality=100&height=500&bgcolor=fff&rnd=132179622120000000",age:"4"})

//6 dogs - on 300*400 pixel cards (with nice padding and margins, and a nice background colour)
// An image for each dog
// Display Breed
// Add an age property for every dog
// add an 'Adopt Now' button on each dog

for(let i=0;i<dogs.length;i++){

    let card = document.createElement("div")
    document.body.appendChild(card)
    let dogName=document.createElement("h1")
    card.appendChild(dogName)
    dogName.innerHTML=dogs[i].name
    let image=document.createElement("img")
    image.src=dogs[i].picture
    card.appendChild(image)


}