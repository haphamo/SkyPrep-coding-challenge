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

const addOns = [
  {
    addOn: "AWD Drivetrain",
    price: 2500
  },
  {
    addOn: "GPS Navigation",
    price: 2000
  },
  {
    addOn: "Winter Tire Package",
    price: 2000
  },
  {
    addOn: "Sport Package",
    price: 3500
  },
  {
    addOn: "Live Traffic Updates",
    price: 1500
  },
  {
    addOn: "Roadside Assistance",
    price: 2500
  }
]
 

             

const carCalculator = function(data) {
  return `The cost for this car is X with the following configurations`
}

console.log(carCalculator(fixture))