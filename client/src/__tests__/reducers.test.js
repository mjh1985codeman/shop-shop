// import our actions
import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../utils/actions";

import { reducer } from "../utils/reducers";

// create a sample of what our global state will look like
const initialState = {
  products: [],
  categories: [{ name: "Food" }],
  currentCategory: "1",
};

// As we can see, we have an empty list of products, a single category that's in a list, and our current category, which refers to the index of the categories array.
//First, we'll write a test for updating that products list. This mean's we'll be testing the UPDATE_PRODUCTS action to see if we can add a product to the products array.
test("UPDATE_PRODUCTS", () => {
  let newState = reducer(initialState, {
    type: UPDATE_PRODUCTS,
    products: [{}, {}],
  });

  expect(newState.products.length).toBe(2);
  expect(initialState.products.length).toBe(0);
});

test("UPDATE_CATEGORIES", () => {
  let newState = reducer(initialState, {
    type: UPDATE_CATEGORIES,
    categories: [{}, {}],
  });

  expect(newState.categories.length).toBe(2);
  expect(initialState.categories.length).toBe(1);
});

test("UPDATE_CURRENT_CATEGORY", () => {
  let newState = reducer(initialState, {
    type: UPDATE_CURRENT_CATEGORY,
    currentCategory: "2",
  });

  expect(newState.currentCategory).toBe("2");
  expect(initialState.currentCategory).toBe("1");
});
