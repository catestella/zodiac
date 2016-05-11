var zodiac = [
	{
		sign: "aquarius",
		fortune: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
		image: "img/aquarius.png"
	},
	{
		sign: "aries",
		fortune: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
		image: "img/aries.png"
	},
	{
		sign: "cancer",
		fortune: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
		image: "img/cancer.png"
	},
	{
		sign: "capricorn",
		fortune: "Determination, Dominance, Perserving, Practica;, Willful",
		image: "img/capricorn.png"
	},
	{
		sign: "gemini",
		fortune: "Communication, Indecision, Inquisitive, Intelligent, Changeable",
		image: "img/gemini.png"
	},
	{
		sign: "leo",
		fortune: "Ruling, Warmth, Generosity, Faithful, Initiative",
		image: "img/leo.png"
	},
	{
		sign: "libra",
		fortune: "Balance, Justice, Truth, Beauty, Perfection",
		image: "img/libra.png"
	},
	{
		sign: "pisces",
		fortune: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
		image: "img/pisces.png"
	},
	{
		sign: "sagittarius",
		fortune: "Philosophical, Motion, Experiementation, Optimism",
		image: "img/sagittarius.png"
	},
	{
		sign: "scorpio",
		fortune: "Transient, Self-Willed, Purposeful, Unyielding",
		image: "img/scorpio.png"
	},
	{
		sign: "taurus",
		fortune: "Security, Subtle strength, Appreciation, Instruction, Patience",
		image: "img/taurus.png"
	},
	{
		sign: "virgo",
		fortune: "Analyzing, Practical, Reflective, Observation, Thoughtful",
		image: "img/virgo.png"
	}
]

function horoscope () {
	var sign = document.getElementById("sign").value.toLowerCase()

	for(i = 0; i < zodiac.length; i++) {
		if(sign === zodiac[i].sign) {
			document.getElementById("yourSign").innerHTML = zodiac[i].sign
			document.getElementById("icon").src = zodiac[i].image
			document.getElementById("yourHoroscope").innerHTML = "Your best attributes are: " + zodiac[i].fortune
			return
		} else {
			document.getElementById("yourSign").innerHTML = "That's not one of the signs. Try Again!"
			document.getElementById("yourHoroscope").innerHTML = ""
			document.getElementById("icon").src = ""
		}
	}
}




