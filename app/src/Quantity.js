import FoodData from './FoodData.js';

const quantityArr = FoodData.map(item => ({
  id: item.id,
  quantity: 0
}));


export  {quantityArr}