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

const basePrice = 24999
const salesTax = 13/100
const fixedAdminFees = 1200
const variableAdminFees = 0.02
const maxAddOnPriceBeforeDiscount = 8000
const addOnDiscount = 0.5

const addOns = [
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
 

             
const carCalculator = function(arrayData) {

  let totalCost = 0
  let addOnTotal = 0
  let configs = ""
  for (const addOn of arrayData) {
    const { add_on, price } = addOn
    // this gives me the output sentence
    configs += `${add_on}: $${price}, `

    addOnTotal += price
    
  }

  listOfConfigs = `${(configs.slice(configs[0], (configs.length-2)))}.`
  

  // handles the add on discount 
  let addOnTotalWithDiscount = 0
  if(addOnTotal > maxAddOnPriceBeforeDiscount) {
    difference = addOnTotal - maxAddOnPriceBeforeDiscount
    addOnTotalWithDiscount = difference * addOnDiscount + maxAddOnPriceBeforeDiscount
    addOnTotal = addOnTotalWithDiscount
  }
  const fullyConfiguredVehiclePrice = basePrice + addOnTotal
   
  
  console.log(basePrice + addOnTotal + fixedAdminFees + (fullyConfiguredVehiclePrice * variableAdminFees) + (fullyConfiguredVehiclePrice * salesTax))
}

console.log(carCalculator(fixture))