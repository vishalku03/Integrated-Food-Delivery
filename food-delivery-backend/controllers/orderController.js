exports.updateOrderStatus = async(req,res)=>{

 const { orderId, status } = req.body;

 const order = await Order.findByIdAndUpdate(
  orderId,
  { status },
  { new:true }
 );

 io.emit("orderStatusUpdated",order);

 res.json(order);

};