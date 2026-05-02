import { useStore } from '../store/useStore';

export const reviewService = {
  getReviews: () => {
    return useStore.getState().reviews;
  },
  
  addReview: (data) => {
    useStore.getState().addReview(data);
  },
  
  updateReview: (id, data) => {
    useStore.getState().updateReview(id, data);
  },
  
  deleteReview: (id) => {
    useStore.getState().deleteReview(id);
  }
};
