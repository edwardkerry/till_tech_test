describe('Order', function(){

  var order;

  beforeEach(function(){
    order = new Order;
  });

  it('should initialize with an empty order', function(){
    expect(order.items).toEqual([]);
  });

});
