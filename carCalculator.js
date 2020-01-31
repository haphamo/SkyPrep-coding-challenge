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

const carCalculator = function(data) {
  return `The cost for this car is X with the following configurations`
}

console.log(carCalculator(fixture))