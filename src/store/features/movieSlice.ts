import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export interface Modal<T>{
  data: T[] | T
  total: number
}
export interface MovieState {
  list: object
  totals: number
}
type Data = {name: string; age: number}
const initialState: MovieState = {
  totals: 0,
  list: []
}


const getMovieListApi = (): Promise<Modal<Data>> => 
  new Promise((resolve, reject)=> {
    setTimeout(()=> {
      resolve({
        data: [
          {name: '1', age:1},
          {name: '1', age:1},
          {name: '1', age:1},
          {name: '1', age:1},
          {name: '1', age:1},
          {name: '1', age:1},
          {name: '1', age:1},
          {name: '1', age:1},
          {name: '1', age:1}
        ],     
        total: 9
      })
    },4000)
  })  

export const getMovieData =  createAsyncThunk('moviegetMovie',
  async () => {
    const res = await getMovieListApi()
    console.log('res', res);
    return res
  }
)

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    loadData: (state, { payload }) => {
      state.list = payload
      state.totals = payload.length
    }
  },
  extraReducers(builder) {
    builder
    .addCase(getMovieData.pending, (state)=> {
      console.log("🚀 ~ 进行中！")
    })
    .addCase(getMovieData.fulfilled, (state, { payload })=> {
      console.log("🚀 ~ 完成！")
      console.log('payload', payload);
      
      state.list = payload.data
      state.totals = payload.total
    })
    .addCase(getMovieData.rejected, (state, err) => {
      console.log("🚀 ~ 失败！",err)
    })
  }

})
export type ListType = typeof movieSlice.name

export const { loadData } = movieSlice.actions
export default movieSlice.reducer