const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

function orderByProps(obj, order) {
  ordered = [];
  unordered = [];

  for (key of order) {
    if (key in obj) {
      ordered.push({ key, value: obj[key] })
    } 
  }

  for (key in obj) {
    if (!order.includes(key)) {
      unordered.push({ key, value: obj[key] })
    }
  }

  unordered.sort((a,b) => a.key.localeCompare(b.key));
  
  return [...ordered, ...unordered]
}
  

console.log(orderByProps(obj, [ 'name', 'level' ]));