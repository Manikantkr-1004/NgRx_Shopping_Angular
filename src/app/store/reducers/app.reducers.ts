import { createReducer, on} from "@ngrx/store"
import { addProductAction, addCartAction, loginAction, logoutAction } from "../actions/app.actions";

export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {rate: number, count: number}
}

export interface State {
    products: Product[],
    cart: Product[],
    authenticated: boolean
}

const initialState: State = {
    products: [],
    cart: [], 
    authenticated: false
}

export const productReducer = createReducer(
    initialState,
    on(addProductAction, (state, {product})=>{
        return {...state, products: product}
    }),
    on(addCartAction, (state, {product})=>{
        return {...state, cart: product};
    }),
    on(loginAction,(state)=>({...state, authenticated: true})),
    on(logoutAction, (state)=> ({...state, authenticated: false}))
)

// const authReducer = createReducer(
//     initialState,
//     on(loginAction,(state)=>({...state, authenticated: true})),
//     on(logoutAction, (state)=> ({...state, authenticated: false}))
// )

// export function reducers(state: State, action: Action): State{
//     return {
//         products: productReducer(state.products, action),
//         cart: productReducer(state.cart, action),
//         authenticated: authReducer(state.authenticated, action)
//     }
// }
