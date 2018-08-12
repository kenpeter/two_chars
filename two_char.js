var _ = require('lodash');

function buildHashMap(ar) {

	var hm = _.reduce(ar, function(hash, value) {
    if(typeof hash[value] === 'undefined') {
      hash[value] = 1;
    } else {
      hash[value]++;
    }

    // return hash
    return hash;
    // obj  
  }, {});

	return hm;
}


function getRemainItems(ar, iItem, jItem) {
	var buf = [];

	for(var i=0; i<ar.length; i++) {
		var item = ar[i];
		if(item == iItem) {
			buf.push(iItem);
		} else if(item == jItem) {
			buf.push(jItem);
		} else {

		}
	}

	return buf.join('');
}


function isConsec(str) {
	var arr = str.split('');
	for(var i=1; i<arr.length; i++) {
		var curr = arr[i];
		var prev = arr[i-1];

		if(curr == prev) {
			return true;
		}	
	}

	return false;	
}


function solve(s) {
	var ar = s.split('');
	var hm = buildHashMap(ar);
	var ka = Object.keys(hm);
	var needLen = 0;
	var needStr = '';

	for(var i=0; i<ka.length; i++) {
		var iItem = ka[i];

		for(var j=i+1; j<ka.length; j++) {
			var jItem = ka[j];

			var newStr = getRemainItems(ar, iItem, jItem);
			var condi = isConsec(newStr);		
			if(condi) {
				// not good, no remember
			} else {
				// good, remember the length
				if(newStr.length > needLen) {
					needLen = newStr.length;
					needStr = newStr;	
				}	
			}	
		} // loop
	} // loop

	return needLen;
}

var s = 'beabeefeab';
var out = solve(s);
console.log(out);
