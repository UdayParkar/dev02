// Order Controller

exports.createOrder = (req, res) => {
    // Extract order data from request body
    const { userId, items, shippingAddress, paymentInfo } = req.body;

    // TODO: Validate input, save order to DB, process payment, etc.

    // Temporary response for scaffold
    res.status(201).json({
        message: 'Order placed successfully!',
        order: {
            userId,
            items,
            shippingAddress,
            paymentInfo
        }
    });
};