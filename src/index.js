module.exports = function toReadable (number) {

  list = ['zero',
          'one',
          'two',
          'three',
          'four',
          'five',
          'six',
          'seven',
          'eight',
          'nine',
          'ten',
          'eleven',
          'twelve',
          'thirteen',
          'fourteen',
          'fifteen',
          'sixteen',
          'seventeen',
          'eighteen',
          'nineteen',
         ]
  
  teens = ['fail',
           'fail',
           'twenty',
           'thirty',
           'forty',
           'fifty',
           'sixty',
           'seventy',
           'eighty',
           'ninety',
          ];

  result = '';

  const lessThan19 = (n) => {
    return list[n];
  }

  const from20to99 = (n) => {
    arr = String(n).split('');
    if (+arr[1] === 0) {
      return `${teens[+arr[0]]}`
    } else {
    return `${teens[+arr[0]]} ${list[+arr[1]]}`
    };
  }

  const from100to999 = (n) => {
    first = +String(n).slice(0,1);
    last = +String(n).slice(1,3);
    if (last === 0) {
      return `${list[first]} hundred`
    } else if (last <= 19) {
      return `${list[first]} hundred ${lessThan19(last)}`
    } else {
      return `${list[first]} hundred ${from20to99(last)}`
    };
  }

  if (number <= 19) {
    return lessThan19(number)
  } else if (number <= 99) {
    return from20to99(number)
  } else {
    return from100to999(number)
  }

}


