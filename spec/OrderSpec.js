describe('Order', function(){

  var order;

  beforeEach(function(){
    order = new Order();
  });

  it('should initialize with an empty order', function(){
    expect(order.items).toEqual([]);
  });

  it('should allow items to be added to the order', function(){
    order.add('Tea', 1);
    expect(order.items[0]).toEqual({'Tea': 1});
  });


});
