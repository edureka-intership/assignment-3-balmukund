// Question-1. Create a JavaScript restaurantManager class with the following properties:
// ⮚ restaurantList
// ⮚ printAllRestaurantNames function
// ⮚ filterRestaurantByCity function 

class restaurantManager {
  restaurantList = [
    {
      id: 1,
      restaurantName: "KFC",
      address: "Anand Vihar",
      city: "Delhi",
    },
    {
      id: 2,
      restaurantName: "Domino",
      address: "Savita Vihar",
      city: "Delhi",
    },
    {
      id: 3,
      restaurantName: "Burger King",
      address: "Civil Lines",
      city: "Pune",
    },
    {
      id: 4,
      restaurantName: "Subway",
      address: "Cantonment",
      city: "Mumbai",
    },
  ];

  printAllRestaurantNames = () => {
    return this.restaurantList.map((restaurant) => restaurant.restaurantName
    );
  };

  filterRestaurantByCity = (cityName) => {
    return this.restaurantList.filter(
      (restaurant) => restaurant.city == cityName
    );
  };
}

const restaurantObj = new restaurantManager();
restaurantObj.printAllRestaurantNames(); // ['KFC', 'Domino', 'Burger King']
restaurantObj.filterRestaurantByCity("Pune"); // [{},{}]

//---------------------------------------------------------------------------------------
// Question-2. Please find order details for Punjabi Tadka restaurant in Delhi as : 

// orderData = {
//   'Below 500': 20,
//   '500-1000': 29,
//   '1000-1500': 30,
//   '1500-2000': 44,
//   'Above 2000': 76
// };

// a. Calculate the total number of orders placed for the restaurant.
// b. Calculate the number of order proportion options.
// c. Calculate the percentage of each proportion in below format - 

// [{
//   id: 1,
//   order: "Below 500",
//   order percentage: "10.05",
//   restaurant: "Punjabi Tadka"
// }, {
//   id: 2,
//   order: "500-1000",
//   order percentage: "14.57",
//   restaurant: "Punjabi Tadka"
// }, {
//   id: 3,
//   order: "1000-1500",
//   order percentage: "15.08",
//   restaurant: "Punjabi Tadka"
// }, {
//   id: 4,
//   order: "1500-2000",
//   order percentage: "22.11",
//   restaurant: "Punjabi Tadka"
// }, {
//   id: 5,
//   order: "Above 2000",
//   order percentage: "38.19",
//   restaurant: "Punjabi Tadka"
// }]


const orderData = {
  "Below 500": 20,
  "500-1000": 29,
  "1000-1500": 30,
  "1500-2000": 44,
  "Above 2000": 76,
};


const total = Object.values(orderData).reduce((prev, next) => prev + next); // Calculating the total of all key values


const headers = Object.keys(orderData); // Computing all keys of the Object


const response = headers.map((item, index) => {
  return {
    id: index + 1,
    restaurant: "Punjabi Tadka",
    order: item,
    "order percentage": ((orderData[item] / total) * 100).toFixed(2),
  };
});
