


// returns a random integer in the range [m, n] (inclusive)
function rand(m, n) {
return m + Math.floor((n - m + 1)*Math.random());
}
// randomly returns a string representing one of the six
// Crown and Anchor faces
function randFace() {
return ["crown", "anchor", "heart", "spade", "club", "diamond"]
[rand(0, 5)];
}

let funds = 50,
	rounds = 0;

while (funds > 0 && funds < 100){
	rounds++;

	console.log(`round ${rounds	}:`);
	console.log(`\tstarting funds: ${funds}p`);
	// place bets

	const bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };
	let totalBet = rand(1, funds);
	
	funds = funds - totalBet;
	
	if (new Date().getDay() === 3){

		totalBet = 1;

	} else if (totalBet === 7) {
		totalBet = funds;
		bets.heart = totalBet;
	} else {

		console.log("No superstition here!");
		let remaining = totalBet;
		do {
			let bet = rand(1,remaining),
				face = randFace();
				bets[face] = bets[face] + bet;
				remaining = remaining - bet;	
		} while (remaining > 0);

	}

	console.log('\tbets: ' +
	Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ') +
	` (total: ${totalBet} pence)`);

	// roll dice

	const hand = [];

	for (let roll=0; roll<3; roll++) {
		hand.push(randFace());
	}

	console.log(`\thand: ${hand.join(', ')}`);

	// collect winnings


	let winnings = 0;
	for (let die = 0; die < hand.length; die++ ) {
		let face = hand[die];
		if (bets[face] > 0){
			winnings = winnings + bets[face];
		}
	}
	funds = funds + winnings;

	console.log(`\twinnings: ${winnings}`);
};

console.log(`\tending funs: ${funds}`);