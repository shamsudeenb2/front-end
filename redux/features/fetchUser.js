import { useRetrieveProfileQuery, useRetrieveUserQuery } from './authApiSlice';
import { setUser, setError } from '../features/authSlice';
import { useAppDispatch } from '@/redux/hooks';

export const fetchDataFromEndpoints = async (id) => {
    const dispatch = useAppDispatch();
      
       const {data: user }= useRetrieveUserQuery()
       const { data: profile } =useRetrieveProfileQuery()
       console.log('data endpoint', user, profile[0])
    //    const concatenatedData = user.concat(profile);

       dispatch(setUser(user));
       return  user, profile ;
};


// export const fetchDataAndConcatenate = () => async (dispatch) => {
    
//   try {
//     // dispatch(fetchDataStart());
//     const { data1, data2 } =fetchDataFromEndpoints();
//     console.log('data fetch', data1, data2)

//     // Here, you can concatenate the data as needed
    
//   } catch (error) {
//     // console.log(error)
//   }
// };