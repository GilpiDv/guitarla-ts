import { ActionDispatch, useMemo } from "react";
import type { CartItem } from "../types";
import { CartActions } from "../reducers/cart-reducer";

type HeaderProps = {
    cart: CartItem[]
    dispatch: ActionDispatch<[action: CartActions]>
}

function Header ({ cart, dispatch } : HeaderProps) {

    const logoUrl = "/img/logo.svg";
    const cartIconUrl = "/img/carrito.png"

    // Derived State
    // const isCartEmpty = cart.length === 0;

    // If using braces {} for the useMemo function, use return.
    const isCartEmpty = useMemo(() => {
        return cart.length === 0;
    }, [cart]);

    // Otherwise, omit braces and doesn't need the return.
    const cartTotal = useMemo(() => 
        cart.reduce((total, item) => total + (item.quantity * item.price), 0), 
    [cart])

    const totalItems = useMemo(() => 
        cart.reduce((total, item) => total + (item.quantity), 0), 
    [cart])

    return (
        <>
            <header className="py-5 header">
                <div className="container-xl">
                    <div className="row justify-content-center justify-content-md-between">
                        <div className="col-8 col-md-3">
                            <a href="index.html">
                                <img className="img-fluid" src={logoUrl} alt="imagen logo" />
                            </a>
                        </div>
                        <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                            <div 
                                className="carrito"
                            >
                                <span className='cart-elements'>{totalItems}</span>
                                <img className="img-fluid" src={cartIconUrl} alt="imagen carrito" />

                                <div id="carrito" className="bg-white p-3">
                                    {isCartEmpty ? 
                                    (
                                        <p className="text-center">Cart is empty</p>
                                    ) : (
                                        <>                                    
                                            <table className="w-100 table">
                                                <thead>
                                                    <tr>
                                                        <th>Image</th>
                                                        <th>Model</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cart.map(guitar => (
                                                        <tr key={guitar.id}>
                                                            <td>
                                                                <img className="img-fluid" src={`/img/${guitar.image}.jpg`} alt="imagen guitarra" />
                                                            </td>
                                                            <td>{guitar.name}</td>
                                                            <td className="fw-bold">
                                                                    ${guitar.price}
                                                            </td>
                                                            <td className="flex align-items-start gap-4">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-dark"
                                                                    onClick={() => dispatch({type: 'decrease-quantity', payload: {id: guitar.id}})}
                                                                >
                                                                    -
                                                                </button>
                                                                    {guitar.quantity}
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-dark"
                                                                    onClick={() => dispatch({type: 'increase-quantity', payload: {id: guitar.id}})}
                                                                >
                                                                    +
                                                                </button>
                                                            </td>
                                                            <td>
                                                                <button
                                                                    className="btn btn-danger"
                                                                    type="button"
                                                                    onClick={() => dispatch({type: 'remove-from-cart', payload: {id: guitar.id}})}
                                                                >
                                                                    X
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <p className="text-end">Total: <span className="fw-bold">${cartTotal}</span></p>
                                        </>
                                    )}
                                    <button className="btn btn-dark w-100 mt-3 p-2" onClick={() => dispatch({type: 'restart-cart'})}>Empty cart</button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;