exports.createOrder = (req, res) => {
    const {
        fullName,
        address,
        city,
        state,
        postalCode,
        country,
        paymentMethod,
        subtotal,
        shipping,
        total
    } = req.body;

    // TODO: Validate input, save order to DB, process payment, etc.

    // Temporary response for scaffold
    res.status(201).json({
        message: 'Order placed successfully!',
        order: {
            fullName,
            address,
            city,
            state,
            postalCode,
            country,
            paymentMethod,
            subtotal,
            shipping,
            total
        }
    });
};