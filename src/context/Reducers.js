

export default function (state, action) {
    switch (action.type) {
      case 'ADD_FAV_LIST':
        const {favoriteJob} = action.payload;
        return {
          ...state,
          favoriteJob: [...state.favoriteJob, favoriteJob],
        };
  
      case 'REMOVE_FAV':
        return {
          favoriteJob: [
            ...state.favoriteJob.filter(job => job !== action.payload.job),
          ],
        };
  
      default:
        return state;
    }
  }