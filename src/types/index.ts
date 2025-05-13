export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

// Inherit Guitar type into the CartItem type
export type CartItem = Guitar & {
    quantity: number
}


/* Syntax using interface instead of type */
// export interface CartItem extends Guitar {
//     quantity: number
// }


/* Utility Type (Pick) */
// export type CartItem = Pick<Guitar, 'id' | 'name'> & {
//     quantity: number;
// } 


/* Utility Type (Omit) */
// export type CartItem = Omit<Guitar, 'image' | 'description'> & {
//     quantity: number;
// }