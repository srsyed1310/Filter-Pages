// Get All Buttons and Cards

const All_buttons = document.querySelectorAll(".button_section button");

const filterable_cards = document.querySelectorAll('.card');


console.log(All_buttons, filterable_cards);


// Add and remove active class for all buttons


const filterCard = (e) =>{

    console.log(e);

    document.querySelector(".active").classList.remove('active');

    e.target.classList.add('active');

    console.log(e.target);




// Put for Each loop in the card for add and remove the card items


filterable_cards.forEach((card)=>{

    card.classList.add('hide');

    if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all")
    {

        card.classList.remove('hide');
    };

});

}


// Add EventListener in Buttons


All_buttons.forEach((button)=>{

    button.addEventListener('click', filterCard);


})











