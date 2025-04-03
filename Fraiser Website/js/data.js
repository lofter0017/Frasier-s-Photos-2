// Photo inventory data
const photoInventory = {
    photos: [
        {
            id: 1,
            title: "Spring Bloom",
            description: "Fraisure playing among cherry blossoms",
            price: 29.99,
            category: "seasonal",
            season: "spring",
            image: "photos/photo1.jpg",
            inStock: true
        },
        {
            id: 2,
            title: "Summer Beach Day",
            description: "Fraisure enjoying the waves",
            price: 34.99,
            category: "seasonal",
            season: "summer",
            image: "photos/photo2.jpg",
            inStock: true
        },
        {
            id: 3,
            title: "Autumn Leaves",
            description: "Fraisure in a pile of colorful leaves",
            price: 29.99,
            category: "seasonal",
            season: "autumn",
            image: "photos/photo3.jpg",
            inStock: true
        },
        {
            id: 4,
            title: "Winter Wonderland",
            description: "Fraisure playing in the snow",
            price: 34.99,
            category: "seasonal",
            season: "winter",
            image: "photos/photo4.jpg",
            inStock: true
        },
        {
            id: 5,
            title: "Christmas Spirit",
            description: "Fraisure with Santa hat",
            price: 39.99,
            category: "holiday",
            season: "winter",
            image: "photos/photo5.jpg",
            inStock: true
        },
        {
            id: 6,
            title: "Halloween Fun",
            description: "Fraisure in a cute pumpkin costume",
            price: 39.99,
            category: "holiday",
            season: "autumn",
            image: "photos/photo6.jpg",
            inStock: true
        },
        {
            id: 7,
            title: "Easter Bunny",
            description: "Fraisure with bunny ears",
            price: 39.99,
            category: "holiday",
            season: "spring",
            image: "photos/photo7.jpg",
            inStock: true
        },
        {
            id: 8,
            title: "Birthday Celebration",
            description: "Fraisure with party hat",
            price: 44.99,
            category: "special",
            season: "summer",
            image: "photos/photo8.jpg",
            inStock: true
        }
    ],
    orders: [
        {
            id: "ORD001",
            date: "2024-03-15",
            customer: {
                name: "John Doe",
                email: "john@example.com"
            },
            items: [
                {
                    photoId: 1,
                    quantity: 1,
                    price: 29.99
                }
            ],
            total: 29.99,
            status: "completed"
        },
        {
            id: "ORD002",
            date: "2024-03-20",
            customer: {
                name: "Jane Smith",
                email: "jane@example.com"
            },
            items: [
                {
                    photoId: 3,
                    quantity: 2,
                    price: 29.99
                },
                {
                    photoId: 6,
                    quantity: 1,
                    price: 39.99
                }
            ],
            total: 99.97,
            status: "completed"
        },
        {
            id: "ORD003",
            date: "2024-04-05",
            customer: {
                name: "Robert Johnson",
                email: "robert@example.com"
            },
            items: [
                {
                    photoId: 2,
                    quantity: 1,
                    price: 34.99
                }
            ],
            total: 34.99,
            status: "pending"
        },
        {
            id: "ORD004",
            date: "2024-04-10",
            customer: {
                name: "Emily Davis",
                email: "emily@example.com"
            },
            items: [
                {
                    photoId: 5,
                    quantity: 1,
                    price: 39.99
                },
                {
                    photoId: 7,
                    quantity: 1,
                    price: 39.99
                },
                {
                    photoId: 8,
                    quantity: 1,
                    price: 44.99
                }
            ],
            total: 124.97,
            status: "pending"
        },
        {
            id: "ORD005",
            date: "2024-04-15",
            customer: {
                name: "Michael Wilson",
                email: "michael@example.com"
            },
            items: [
                {
                    photoId: 4,
                    quantity: 1,
                    price: 34.99
                }
            ],
            total: 34.99,
            status: "cancelled"
        },
        {
            id: "ORD006",
            date: "2024-04-20",
            customer: {
                name: "Sarah Brown",
                email: "sarah@example.com"
            },
            items: [
                {
                    photoId: 1,
                    quantity: 1,
                    price: 29.99
                },
                {
                    photoId: 2,
                    quantity: 1,
                    price: 34.99
                },
                {
                    photoId: 3,
                    quantity: 1,
                    price: 29.99
                },
                {
                    photoId: 4,
                    quantity: 1,
                    price: 34.99
                }
            ],
            total: 129.96,
            status: "completed"
        }
    ]
};

// Helper functions for inventory management
function getPhotoById(id) {
    return photoInventory.photos.find(photo => photo.id === id);
}

function getPhotosBySeason(season) {
    return photoInventory.photos.filter(photo => photo.season === season);
}

function getPhotosByCategory(category) {
    return photoInventory.photos.filter(photo => photo.category === category);
}

function updatePhotoStock(id, inStock) {
    const photo = getPhotoById(id);
    if (photo) {
        photo.inStock = inStock;
    }
}

// Helper functions for order management
function getOrderById(id) {
    return photoInventory.orders.find(order => order.id === id);
}

function createOrder(customer, items) {
    const order = {
        id: `ORD${String(photoInventory.orders.length + 1).padStart(3, '0')}`,
        date: new Date().toISOString().split('T')[0],
        customer,
        items,
        total: items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        status: "pending"
    };
    photoInventory.orders.push(order);
    return order;
}

function updateOrderStatus(orderId, status) {
    const order = getOrderById(orderId);
    if (order) {
        order.status = status;
    }
} 