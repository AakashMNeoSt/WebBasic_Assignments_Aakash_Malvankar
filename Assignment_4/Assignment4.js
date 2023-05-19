// Book Price Array
const bookPrices = [567.50,345.40,767.45,567.60,600,400,230,450,350.50,560.40,800.56,890.9];

// Find all prices less than 500
const pricesLessThan500 = bookPrices.filter(price => typeof price === 'number' && price < 500);

// Find the first price greater than 600
const firstPriceGreaterThan600 = bookPrices.find(price => typeof price === 'number' && price > 600);

// Find all prices between 500 and 600
const pricesBetween500and600 = bookPrices.filter(price => typeof price === 'number' && price >= 500 && price <= 600);

// Display sum of all prices
const sumOfAllPrices = bookPrices.reduce((total, price) => typeof price === 'number' ? total + price : total, 0);

// Display sum of all prices but initial value of sum should be 100
const sumOfAllPricesWithInitialValue = bookPrices.reduce((total, price) => typeof price === 'number' ? total + price : total, 100);

// Double every price from array and display new prices
const doubledPrices = bookPrices.map(price => typeof price === 'number' ? price * 2 : price);

// Display sum of prices which are less than 500
const sumOfPricesLessThan500 = pricesLessThan500.reduce((total, price) => total + price, 0);

// Book Names Array
const bookNames = ['Learn Java', 'Basics of Python', 'Advanced Java Concepts', 'Web Basics', 'Easy learning Python', 'Web Fundamentals', 'JAVA fundamentals'];

// Find all books starting with 'Web'
const booksStartingWithWeb = bookNames.filter(name => name.startsWith('Web'));

// Find all books which are related to Java
const booksRelatedToJava = bookNames.filter(name => name.includes('Java'));

// Prepend 'Neo-' to every Book Name and Display new book name
const modifiedBookNames = bookNames.map(name => 'Neo-' + name);

// Display sum of length of every book name
const sumOfBookNameLengths = bookNames.reduce((total, name) => total + name.length, 0);

console.log('Prices less than 500:', pricesLessThan500);
console.log('First price greater than 600:', firstPriceGreaterThan600);
console.log('Prices between 500 and 600:', pricesBetween500and600);
console.log('Sum of all prices:', sumOfAllPrices);
console.log('Sum of all prices with initial value 100:', sumOfAllPricesWithInitialValue);
console.log('Doubled prices:', doubledPrices);
console.log('Sum of prices less than 500:', sumOfPricesLessThan500);
console.log('Books starting with "Web":', booksStartingWithWeb);
console.log('Books related to Java:', booksRelatedToJava);
console.log('Modified book names:', modifiedBookNames);
console.log('Sum of book name lengths:', sumOfBookNameLengths);