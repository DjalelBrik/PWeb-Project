export const store={
    products:[
        {
      id: 1001,
      image: "https://via.placeholder.com/100",
      title: "iPhone 13 Pro",
      quantity: 10,
      category: "Phone",
      price: 999,
      description: "Apple smartphone with A15 chip"
    },
    {
      id: 1002,
      image: "https://via.placeholder.com/100",
      title: "Samsung Galaxy S22",
      quantity: 15,
      category: "Phone",
      price: 850,
      description: "Android flagship with great camera"
    },
    {
      id: 1003,
      image: "https://via.placeholder.com/100",
      title: "MacBook Air M2",
      quantity: 5,
      category: "Laptop",
      price: 1200,
      description: "Lightweight laptop with M2 chip"
    },
    {
      id: 1004,
      image: "https://via.placeholder.com/100",
      title: "Dell XPS 13",
      quantity: 7,
      category: "Laptop",
      price: 1100,
      description: "Premium ultrabook design"
    },
    {
      id: 1005,
      image: "https://via.placeholder.com/100",
      title: "Apple Watch Series 8",
      quantity: 20,
      category: "Watch",
      price: 399,
      description: "Smartwatch with health tracking"
    }

    ],
    Order:[{
      id: 5001,
      customerName: "Ahmed Ali",
      productName: "iPhone 13 Pro",
      quantity: 1,
      totalPrice: 999,
      status: "Pending",
      date: "2026-04-01"
    },
    {
      id: 5002,
      customerName: "Sara Ben",
      productName: "Samsung Galaxy S22",
      quantity: 2,
      totalPrice: 1700,
      status: "Shipped",
      date: "2026-04-02"
    },
    {
      id: 5003,
      customerName: "Youssef Karim",
      productName: "MacBook Air M2",
      quantity: 1,
      totalPrice: 1200,
      status: "Delivered",
      date: "2026-04-03"
    },
    {
      id: 5004,
      customerName: "Lina Zahra",
      productName: "Dell XPS 13",
      quantity: 1,
      totalPrice: 1100,
      status: "Cancelled",
      date: "2026-04-04"
    }],
    User:[ {
    id: 1,
    name: "Ahmed Ali",
    email: "ahmed.ali@gmail.com",
    phone: "+212 612345678",
    role: "Admin",
    status: "Active"
  },
  {
    id: 2,
    name: "Sara Ben",
    email: "sara.ben@gmail.com",
    phone: "+212 623456789",
    role: "Customer",
    status: "Active"
  },
  {
    id: 3,
    name: "Youssef Karim",
    email: "youssef.karim@gmail.com",
    phone: "+212 634567890",
    role: "Customer",
    status: "Inactive"
  },
  {
    id: 4,
    name: "Lina Zahra",
    email: "lina.zahra@gmail.com",
    phone: "+212 645678901",
    role: "Manager",
    status: "Active"
  },
  {
    id: 5,
    name: "Omar Tazi",
    email: "omar.tazi@gmail.com",
    phone: "+212 656789012",
    role: "Customer",
    status: "Blocked"
  }]
};
export const Client={
  Cart:[
    {
      id: 1001,
      image: "https://via.placeholder.com/100",
      title: "iPhone 13 Pro",
      category: "Phone",
      description: "Apple smartphone with A15 chip",
      price: 999,
      quantity: 1
    },
    {
      id: 1003,
      image: "https://via.placeholder.com/100",
      title: "MacBook Air M2",
      category: "Laptop",
      description: "Lightweight laptop with M2 chip",
      price: 1200,
      quantity: 2
    },
    {
      id: 1005,
      image: "https://via.placeholder.com/100",
      title: "Apple Watch Series 8",
      category: "Watch",
      description: "Smartwatch with health tracking",
      price: 399,
      quantity: 1
    }
  ],
};
