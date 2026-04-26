import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:3001/products";

export const fetchProducts = createAsyncThunk("fetch", async () => {
  const res = await axios.get(API);
  return res.data;
});

export const addProduct = createAsyncThunk("add", async (product) => {
  const res = await axios.post(API, product);
  return res.data;
});

export const deleteProduct = createAsyncThunk("delete", async (id) => {
  await axios.delete(`${API}/${id}`);
  return id;
});

export const updateProduct = createAsyncThunk(
  "update",
  async ({ id, data }) => {
    const res = await axios.put(`${API}/${id}`, data);
    return res.data;
  }
);

const slice = createSlice({
  name: "products",
  initialState: { list: [], search: "" },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.list = action.payload;
    });

    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.list.push(action.payload);
    });

    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.list = state.list.filter(p => p.id !== action.payload);
    });

    builder.addCase(updateProduct.fulfilled, (state, action) => {
      const index = state.list.findIndex(p => p.id === action.payload.id);
      state.list[index] = action.payload;
    });
  }
});

export const { setSearch } = slice.actions;
export default slice.reducer;