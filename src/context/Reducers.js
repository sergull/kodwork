// export default function (state, action) {
//     switch (action.type) {
//         case "ADD_FAV":

//             const fav = [...state.favList, action.payload.favorite]
//             return { ...state, favList: fav }

//         case 'DELETE_FAVORİTED':
//             const mydata = action.payload.item;

//             const newData = state.favList.filter(data => {
//                 if (data.id !== mydata.id) return true;
//             });
//             return { ...state, JobsDetailId: newData };

//         default:
//             return state;
//     }
// }

// export default function (state, action) {
//     switch (action.type) {
//         case "ADD_FAV":

//             const fav = [...state.favList, action.payload.favorite]
//             return { ...state, favList: fav }

//         case 'DELETE_FAVORİTED':
//             const mydata = action.payload.item;

//             const newData = state.favList.filter(data => {
//                 if (data.id !== mydata.id) return true;
//             });
//             return { ...state, JobsDetailId: newData };

//         default:
//             return state;
//     }
// }

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