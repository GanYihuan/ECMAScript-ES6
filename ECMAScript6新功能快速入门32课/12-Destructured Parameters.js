'use strict';

// Destructured Parameters
/**
 *
 * @param dessert: need
 * @param drink: need
 * @param location: option, default {}
 * @param restaurant: option, default {}
 */
function breakfast2(dessert, drink, {location, restaurant} = {}) {
  console.log(dessert, drink, location, restaurant);
}

breakfast2('a', 'b', {location: 'c', restaurant: 'd'});