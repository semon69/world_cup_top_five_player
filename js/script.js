
// .btn
// select all dom
const buttons = document.querySelectorAll('#card_btn .btn');
const selectedPlayer = document.getElementById('selected');


// Button click and selected player update
function addPlayer(playerName){
    const li = document.createElement('li');
    li.innerText = playerName;
    selectedPlayer.appendChild(li);
}

for(const button of buttons){
    // console.log(button);
    button.addEventListener('click' , (e)=>{
        if(selectedPlayer.children.length <= 4){
            button.classList.add('disabled');
            addPlayer(button.parentNode.children[0].innerText);
        } else{
            button.classList.remove('disabled');
            // addPlayer(button.parentNode.children[0].innerText)
            alert('5 Played already Selected');
        }
    })
} 

// A common function for getInput value
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputFieldNumber = parseInt(inputFieldValue)
    inputField.value = '';
    return inputFieldNumber;
};

function getValueOfElement(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}



// Budgets add event listeners
document.getElementById('calculate_budget').addEventListener('click', function(){
    const perPlayerBudget = getInputValue('per_player_budget');
    // let totalPlayerExpense =  perPlayerBudget * 5;
    if(perPlayerBudget > 0 && perPlayerBudget != ''){
        let totalPlayerExpense =  perPlayerBudget * selectedPlayer.children.length;
        getValueOfElement( 'player_expense', totalPlayerExpense) 
    } else{
        alert('Please Write a positive number')
    }
})
document.getElementById('calculate_total_budget').addEventListener('click', function(){
    const perPlayerBudget = document.getElementById('player_expense');
    const playerTotalBudget = parseFloat(perPlayerBudget.innerText)
    const managerBudget = getInputValue('manager_budget');
    const coachBudget = getInputValue('coach_budget');

    let totalExpense = playerTotalBudget + managerBudget + coachBudget;
        getValueOfElement( 'player_total_expense', totalExpense)
})

