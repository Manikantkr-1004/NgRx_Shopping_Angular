import { createAction } from "@ngrx/store";
import { Product } from "../reducers/app.reducers";

export const addProductAction = createAction('[Product] Store api products data', (product: Product[])=> ({product}));
export const addCartAction = createAction('[Cart] Add proudct to cart', (product: Product[])=> ({product}));
export const loginAction = createAction('[Auth] Login');
export const logoutAction = createAction('[Auth] Logout');