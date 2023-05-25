

import Restaurant from '../model/restaurantModel.js'

export  async function createRestaurant (req, res) {
    try {
        const { restaurant_name, address, vegOnly, cost, cusineTypes, isOpen } = req.body;
        const restaurant = new Restaurant({
            restaurant_name,
            address,
            vegOnly,
            cost,
            cusineTypes,
            isOpen
        });

        await restaurant.save();
        res.json(restaurant);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

export  async function getAllRestaurantasync (req, res) {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function getRestaurantById  (req, res) {
    try {
        const { id } = req.params;
        const restaurant = await Restaurant.findById(id);
        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        res.json(restaurant);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function updateRestaurantById (req, res) {
    try {
            const { id } = req.params;
            const { restaurant_name, address, vegOnly, cost, cusineTypes, isOpen } = req.body;
            const restaurant = await Restaurant.findByIdAndUpdate(
            id,
        {
            restaurant_name,
            address,
            vegOnly,
            cost,
            cusineTypes,
            isOpen,
            updatedAt: Date.now()
        },

        { new: true }
    );

    if (!restaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
    }
        res.json(restaurant);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function deleteRestaurantById  (req, res){
    try {
        const { id } = req.params;
        const restaurant = await Restaurant.findByIdAndDelete(id);
    if (!restaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
    }
        res.json({ message: 'Restaurant deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

export default [getAllRestaurantasync, createRestaurant, getRestaurantById, deleteRestaurantById,updateRestaurantById ]