import { createContext } from 'react';

// Calling createContext creates a Provider and a Consumer
// Provider and Consumer must be components
export const CartContext = createContext();
console.log({ CartContext });
