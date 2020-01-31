const basePrice = 24999
const salesTax = 13/100
const fixedAdminFees = 1200
const variableAdminFees = 0.02
const maxAddOnPriceBeforeDiscount = 8000
const addOnDiscount = 0.5

const fixture = [
	{
		"add_on" : "AWD Drivetrain",
		"price" : 2500
	},
	{
		"add_on" : "Sport Package",
		"price" : 3500
	}
]

const fixture2 = [
  {
    add_on: "AWD Drivetrain",
    price: 2500
  },
  {
    add_on: "GPS Navigation",
    price: 2000
  },
  {
    add_on: "Winter Tire Package",
    price: 2000
  },
  {
    add_on: "Sport Package",
    price: 3500
  },
  {
    add_on: "Live Traffic Updates",
    price: 1500
  },
  {
    add_on: "Roadside Assistance",
    price: 2500
  }
]

// calculates addOn price before potential discount
const calculateAddOnRecursive = function(input) {
  if(input.length === 1) {
    return input[0].price
  } else {
    return input[0].price + calculateAddOnRecursive(input.slice(1))
  }
}
// determines if the addOnPrice is eligible for discount and returns the amount
const calculateAddOnTotal = function(input) {

  if (calculateAddOnRecursive(input) > maxAddOnPriceBeforeDiscount) {
    return  maxAddOnPriceBeforeDiscount + (calculateAddOnRecursive(input) - maxAddOnPriceBeforeDiscount)  * addOnDiscount
  } 
  return calculateAddOnRecursive(input)
}

const result = function (data) {
  let configs = []
  for (const addOn of data) {
    const { add_on, price } = addOn
    // this gives me the output sentence
    configs.push(add_on)
  }
  
  configs.splice(configs.length - 1, 0, "and")
  let configSentence = (configs.join(", "))
  const fullyConfiguredPrice = basePrice + calculateAddOnTotal(data)
  const finalCost = (fullyConfiguredPrice + fixedAdminFees + (fullyConfiguredPrice * variableAdminFees) + (fullyConfiguredPrice * salesTax)).toFixed(2)
  return `The cost for this car is $${finalCost} with the following configurations ${configSentence}.`
}

console.log(result(fixture2))