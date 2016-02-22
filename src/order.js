function Order(){
  this.items = [];
}

Order.prototype.add = function(item, qty){
  var choice = {};
  choice[item] = qty;
  this.items.push(choice);
};
