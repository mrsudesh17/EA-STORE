import { useStore } from '../store/useStore';

export const productService = {
  getProducts: () => {
    return useStore.getState().products;
  },
  
  getProductById: (id) => {
    return useStore.getState().products.find(p => p.id === id);
  },
  
  addProduct: (data) => {
    useStore.getState().addProduct(data);
  },
  
  updateProduct: (id, data) => {
    useStore.getState().updateProduct(id, data);
  },
  
  deleteProduct: (id) => {
    useStore.getState().deleteProduct(id);
  }
};
