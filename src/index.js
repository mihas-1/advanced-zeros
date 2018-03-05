module.exports = function getcurrZeroCount(number, base) {
    // your implementation
    var currentBase = base;
	var MinOfZero = 1000000000;
   

    for (var d = 2; d <= base; d++) {
		if (currentBase % d !== 0) continue; 
		var nuberOfDevide=0;
		var currZero=0;

		//Определяем количество повторений делителя d для числа number
		for (var i=0; i<10; i++)
		if (currentBase % d === 0) {nuberOfDevide++; currentBase=currentBase/d;}
		//	console.log(nuberOfDevide);
		//	console.log(currentBase);
				
        //Определяем количество нулей для делителя d 
        for (var i = d; i <= number; i=i*d) 
		currZero += Math.trunc(number/i);
		//console.log(currZero);
		
         MinOfZero = Math.min(MinOfZero, (currZero / nuberOfDevide))
		console.log(MinOfZero);
    }
    return Math.trunc(MinOfZero);
}



