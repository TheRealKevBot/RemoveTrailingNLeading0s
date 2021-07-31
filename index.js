function removeLeadingTrailing(n) {
	
} 

console.log(removeLeadingTrailing("230.000"), "230")
console.log(removeLeadingTrailing("00402"), "402")
console.log(removeLeadingTrailing("03.1400"), "3.14")
console.log(removeLeadingTrailing("30"), "30")
console.log(removeLeadingTrailing("30.0000"), "30")
console.log(removeLeadingTrailing("24340"), "24340")
console.log(removeLeadingTrailing("0404040"), "404040")
console.log(removeLeadingTrailing("0"), "0")
console.log(removeLeadingTrailing("00"), "0")
console.log(removeLeadingTrailing("0.000000"), "0")
console.log(removeLeadingTrailing("0000.000"), "0")
console.log(removeLeadingTrailing("00.0001"), "0.0001")
console.log(removeLeadingTrailing("10000"), "10000")
console.log(removeLeadingTrailing("1345"), "1345")
console.log(removeLeadingTrailing("30.000020"), "30.00002")
console.log(removeLeadingTrailing("00200.1900001"), "200.1900001")