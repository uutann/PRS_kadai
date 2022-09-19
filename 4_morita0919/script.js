console.log("nakamitsu");
function addTax(price,func){
  const taxPrice = Math.round(price*1.10);
  func(taxPrice);
}
function tomato(taxPrice){
  console.log("トマトの税込み価格は"+taxPrice+"です。")
}
function onion(taxPrice){
  console.log("玉ねぎの税込み価格は"+taxPrice+"です。")
}
addTax(100,tomato);
addTax(120,onion);