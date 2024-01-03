export function getPrice(val){
    return val.split(',').join('');
}

export function toNumber(val){
    return parseInt(val);
}

export function formatToPrice(num){
    let formattedPrice = num.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR'
    });
    return formattedPrice;
}

export function generateRandomNumber() {
    // Generate a random number between 0 and 1, multiply by the range, and add the minimum value
    return Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
  }