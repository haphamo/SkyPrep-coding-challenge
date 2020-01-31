// Car price variables
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
           
let totalCost = 0
let configs = []
let addOnTotal = 0

const carCalculator = function(arrayData) {

  for (const addOn of arrayData) {
    const { add_on, price } = addOn
    // this gives me the output sentence
    configs.push(add_on)
    addOnTotal += price
  }
  
  configs.splice(configs.length - 1, 0, "and")
  let configSentence = (configs.join(", "))

  // handles the add on discount 
  if(addOnTotal > maxAddOnPriceBeforeDiscount) {
    difference = addOnTotal - maxAddOnPriceBeforeDiscount
    addOnTotal = difference * addOnDiscount + maxAddOnPriceBeforeDiscount
  }

  const fullyConfiguredVehiclePrice = basePrice + addOnTotal
  
  totalCost = (basePrice + addOnTotal + fixedAdminFees + (fullyConfiguredVehiclePrice * variableAdminFees) + (fullyConfiguredVehiclePrice * salesTax)).toFixed(2)
  
  let output = `The cost for the car is $${totalCost} with the following configurations ${configSentence}.`
  return output
}

console.log(carCalculator(fixture2))