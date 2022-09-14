function fruit (fruit,weight,moneyfor1kg){


    let kg = weight / 1000
    let money = kg * moneyfor1kg

    console.log(`I need $${money.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`
    )















}fruit('orange', 2500, 1.80)