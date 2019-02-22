const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    EAT:  Symbol("eat"),
    OUTSIDE: Symbol("outside"),
    FOOD_TYPE: Symbol("foodtype"),
    DECIDE: Symbol("decide"),
    PIZZA: Symbol("pizza"),
    TORTILLA: Symbol("tortilla"),
    LARGE: Symbol("large"),
    SMALL: Symbol("small"),
    NONVEG:Symbol("nonveg"),
    VEG : Symbol("veg"),
    CARD: Symbol("card"),
    CASH: Symbol("cash"),
    PAY: Symbol("pay"),
    CREDIT: Symbol("credit"),
    DEBIT: Symbol("debit"),
    PAYMENT: Symbol("payment"),
    DINNER:Symbol("dinner"),
    LTOPPINGS: Symbol("largetoppings"),
    STOPPINGS: Symbol("smalltoppings"),
    CREAM: Symbol("cream"),
    SAUCE: Symbol("sauce"),
    JUICE:Symbol("juice"),
    SOFT: Symbol("soft")
    

});

var largepizza = 45;
var smallpizza = 56;
var nonvegb = 12;
var vegb = 15;
var mangojuice = 28;
var applejuice = 30;
var onion = 41;
var greenp = 66;
var cream = 33;
var bbqs = 47;
var coke = 23;
var canadadry = 13;
var Price = 0;

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "Welcome to the hotel sir! would you like to order something? Please type Yes Or No";
                this.stateCur = GameState.EAT;
                break;
            case GameState.EAT:
                if(sInput.toLowerCase().match("no")){
                    sReply = "Are you sure you want to wait? we are closing our kitchen soon.";
                }else if (sInput.toLowerCase().match("yes")) {
                    sReply ="Would you like to go and see around or stay where you are? Please type Go or Stay";
                    this.stateCur = GameState.OUTSIDE;
                }else{
                    sReply="Please enter right input! Yes or No";
                    this.stateCur=GameState.EAT;
                }
                break;
            case GameState.OUTSIDE:
                if(sInput.toLowerCase().match("go")){
                    sReply = "We have three choices of food for you sir! We serve Pizza, Tortillas and Beverages. What would you like to have sir? Pizza or Tortilla or Beverages"
                    this.stateCur = GameState.FOOD_TYPE;
                }else if(sInput.toLowerCase().match("stay")){
                    sReply = "You will be hungry sir if you want to stay because we will be closing our kitchen soon. Are you sure you want to stay and hold on?" ;
                    this.stateCur = GameState.DECIDE;

                }else{
                    sReply="Please enter Correct input! Either type Go or type Stay";
                    this.stateCur=GameState.OUTSIDE;
                }
                break;
            case GameState.FOOD_TYPE:
                if(sInput.toLowerCase().match("pizza")){
                    sReply = "Sir, how big or small you would like to have. We serve large and small) Pizzas. Please type Large or Small";
                    this.stateCur = GameState.PIZZA;

                }else if (sInput.toLowerCase().match("tortilla")){
                    sReply = "Tortillas comes in 2 varients. Which one do you want to order? Meat or vegetarian";
                    this.stateCur = GameState.TORTILLA;
    
                }else if (sInput.toLowerCase().match("beverage")){

                    sReply="We have 2 types of beverages. Which one you want to order? Freshly squezzed Juices or Aerated carbonated SoftDrink. Type juice or softdrink";
                    this.stateCur=GameState.Beverages;
                }
                else{
                    sReply="Please enter Correct input! Pizza, Tortilla or Beverages";
                    this.stateCur=GameState.FOOD_TYPE;
                }
                break;
            case GameState.PIZZA:
                if(sInput.toLowerCase().match("large")){
                    sReply = `Mushrooms & cheeze Bigger size pizza is $${largepizza}. Can be served with any of your favourite toppings? Onion $${onion} or Green Peppers $${greenp}`;
                    this.stateCur = GameState.LTOPPINGS;

                }else if(sInput.toLowerCase().match("small")){
                    sReply =`Mushroom and Cheeze small pizza is $${smallpizza}. Can be served with any of your favourite toppings? Onion $${onion} or Green Peppers $${greenp}`;
                    this.stateCur = GameState.STOPPINGS;
    
                }
                else{
                    sReply="Please enter Correct input! Large or Small";
                    this.stateCur=GameState.PIZZA;
                }
                break;
            case GameState.LTOPPINGS:
                if(sInput.toLowerCase().match("onion")){
                    Price = largepizza + onion;
                    sReply = `Onions are added to your pizza. Which totels upto $${Price}. How would you like to pay? Cash or Card. `;
                    this.stateCur = GameState.PAY;

                }else if(sInput.toLowerCase().match("green peppers")){
                    Price = largepizza + greenp;
                    sReply =`Green Peppers are added to your pizza. which totels upto $${Price}. How would you like to pay? Cash or Card.`;
                    this.stateCur = GameState.PAY;
    
                }else{
                    sReply="Please enter Correct input! Onion or Green Peppers";
                    this.stateCur=GameState.LTOPPINGS;
                }
                break;
            case GameState.STOPPINGS:
                if(sInput.toLowerCase().match("onion")){
                    Price = smallpizza + onion;
                    sReply = `Onions are added to your pizza. which totels upto $${Price}. How would you like to pay? Cash or Card. `;
                    this.stateCur = GameState.PAY;

                }else if(sInput.toLowerCase().match("green peppers")){
                    Price = smallpizza + greenp;
                    sReply =`Green Peppers are added in your pizza. Which tottels upto $${Price}. How would you like to pay? Cash or Card.`;
                    this.stateCur = GameState.PAY;
    
                }else{
                    sReply="Please enter Correct input! Onion or Green Peppers";
                    this.stateCur=GameState.STOPPINGS;
                }
  
                break;
            case GameState.TORTILLA:
                if(sInput.toLowerCase().match("meat")){
                    sReply = `Price of meat Tortilla is $${nonvegb}. Do you want to add any extra cheeze or dipping sauce? Please type cream or BBQ`;
                    this.stateCur = GameState.NONVEG;

                }else if (sInput.toLowerCase().match("veg")){
                    sReply = `Price of Vegetarian Tortilla is $${vegb}. Do you want to add any extra cheeze or dipping sauce? Please type cream or BBQ`;
                    this.stateCur = GameState.VEG;
    
                }else{
                    sReply="Please enter Correct input! Meat or Veg";
                    this.stateCur=GameState.TORTILLA;
                }
                break;
            case GameState.NONVEG:
                if(sInput.toLowerCase().match("cream")){
                    Price = nonvegb + cream;
                    sReply = `Extra cream is added in your TORTILLA. Now your bill is $${Price}. How would you like to pay? Cash or Card. `;
                    this.stateCur = GameState.PAY;

                }else if(sInput.toLowerCase().match("bbq")){
                    Price = nonvegb + bbqs;
                    sReply =`Extra BBQ sauce is added in your tortilla. Now your bill is $${Price}. How would you like to pay? Cash or Card.`;
                    this.stateCur = GameState.PAY;
    
                }else{
                    sReply="Please enter Correct input! Cream or BBQ";
                    this.stateCur=GameState.NONVEG;
                }

                break;
            case GameState.VEG:
                if(sInput.toLowerCase().match("cream")){
                    Price = vegb + cream;
                    sReply = `Extra cream is added in your tortilla. Now your bill is $${Price}. How would you like to pay? Cash or Card. `;
                    this.stateCur = GameState.PAY;

                }else if(sInput.toLowerCase().match("bbq")){
                    Price = vegb + bbqs;
                    sReply =`Extra BBQ sauce is added in your tortilla. Now your bill is $${Price}. How would you like to pay? Cash or Card.`;
                    this.stateCur = GameState.PAY;

                }else{
                    sReply="Please enter Correct input! Cream or BBQ";
                    this.stateCur=GameState.VEG;
                }
                break;
                
            case GameState.Beverages:
                if(sInput.toLowerCase().match("juice")){
                    sReply = "They have two types of juice. Which one do you want? Mango or Apple";
                    this.stateCur = GameState.JUICE;

                }else if(sInput.toLowerCase().match("softdrink")){
                    sReply = "They have two types of beverages. Which one do you want? Coke or Canada Dry";
                    this.stateCur = GameState.SOFT;
    
                }else{
                    sReply="Please enter Correct input! healthy fresh juices or Aerated carbonated Softdrink";
                    this.stateCur=GameState.Beverages;
                }

                break;
            case GameState.JUICE:
                if(sInput.toLowerCase().match("mango")){
                    sReply = `Price of Mango juice is $${mangojuice}.How do you want to pay? Cash or Card `;
                    this.stateCur = GameState.PAY;

                }else if(sInput.toLowerCase().match("apple")){
                    sReply = `Price of Apple juice is $${applejuice}.How do you want to pay? Cash or Card `;
                    this.stateCur = GameState.PAY;
    
                }else{
                    sReply="Please enter Correct input! Mango or Apple";
                    this.stateCur=GameState.JUICE;
                }
                break;
            case GameState.SOFT:
                if(sInput.toLowerCase().match("coke")){
                    sReply = `Price of Coke is $${coke}.How do you want to pay? Cash or Card `;
                    this.stateCur = GameState.PAY;

                }else if(sInput.toLowerCase().match("canadadry")){
                    sReply = `Price of Canada Dry is $${canadadry}.How do you want to pay? Cash or Card `;
                    this.stateCur = GameState.PAY;
    
                }else{
                    sReply="Please enter Correct input! Coke or Canadadry";
                    this.stateCur=GameState.SOFT;
                }
                break;
            case GameState.PAY:
                if(sInput.toLowerCase().match("card")){
                    sReply = "Debit will cost you $2 extra fees. From which card do you want to pay? Debit Or Credit";
                    this.stateCur = GameState.CARD;

                }else if(sInput.toLowerCase().match("cash")){
                    sReply = "You don't have enough cash to pay a bill.. you have to pay by card.";
                    this.stateCur = GameState.PAY;
    
                }else{
                    sReply="Please enter Correct input! Cash or Card";
                    this.stateCur=GameState.PAY;
                }
                break;
            case GameState.CARD:
                if(sInput.toLowerCase().match("credit")){
                    sReply = "Good choice! Save money is a good idea. Your payment is done. Do you want to take away any item for dinner? Yes Or no ";
                    this.stateCur = GameState.DINNER;

                }else if(sInput.toLowerCase().match("debit")){
                    sReply = "Bad choice! It cost you $2 extra. Your payment is done. Do you want to take away any item for dinner? Yes Or no";
                    this.stateCur = GameState.DINNER;
    
                }else{
                    sReply="Please enter Correct input! Credit or Debit";
                    this.stateCur=GameState.CARD;
                }
                break;
            case GameState.DINNER:
                if(sInput.toLowerCase().match("yes")){

                    sReply = "Eating same item in luch and dinner is not good. Try something new. Type Go.";
                    this.stateCur = GameState.OUTSIDE;

                }else{
                    sReply = "Ok, As you Wish. Bye"
                    ;
                
    
                }
                break;
           
        }
        return([sReply]);
    }
}