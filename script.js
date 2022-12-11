const bread = 15.678;
const salmon = 123.965;
const salami = 90.2345;

const maxValue = Math.max(bread, salmon, salami);
console.log("Максимальна вартість: ", maxValue);

const minValue = Math.min(bread, salmon, salami);
console.log("Мінімальна вартість: ", minValue);

const sumOfProducts = (bread + salmon + salami);
console.log("Сума вартості продуктів: ", sumOfProducts);

const sumOfProductsMin = (Math.floor(bread) + Math.floor(salmon) + Math.floor(salami));
console.log("Сума вартості округлена в меньшу сторону: ", sumOfProductsMin);

console.log("Сума вартості товарів округлена до сотень: ", Math.round(sumOfProducts / 100) * 100);

const evenNumber = sumOfProductsMin % 2 == 0;
console.log("Перевірка числа на парність: ", evenNumber);

const rest = 500 - sumOfProducts;
console.log("Решта з 500 гривень: ", Number(rest.toFixed(2)));

const averageValue = sumOfProducts / 3;
console.log("Середнє значення цін округлене до другого знаку після коми: ", Number(averageValue.toFixed(2)));

const discount = (Math.random() * 100).toFixed(0);
console.log(`Випадкова знижка: ${discount}%`);

const priceWithDiscount = (sumOfProducts - (sumOfProducts / 100 * discount)).toFixed(2);
console.log(`Сума до оплати зі знижкою: ${priceWithDiscount} грн`);

const netProfit = (priceWithDiscount - sumOfProducts / 2).toFixed(2);
console.log(`Чистий прибуток: ${netProfit} грн`);

console.log(`
Максимальна вартість: ${maxValue}
Мінімальна вартість: ${minValue}
Сума вартості продуктів: ${sumOfProducts}
Сума вартості округлена в меньшу сторону: ${sumOfProductsMin}
Сума вартості товарів округлена до сотень:  ${(Math.round(sumOfProducts / 100) * 100)}
Перевірка числа на парність: ${evenNumber}
Решта з 500 гривень:  ${rest.toFixed(2)}
Середнє значення цін округлене до другого знаку після коми: ${Number(averageValue.toFixed(2))}
Випадкова знижка: ${discount}%
Сума до оплати зі знижкою: ${priceWithDiscount} грн
Чистий прибуток: ${netProfit} грн `);

