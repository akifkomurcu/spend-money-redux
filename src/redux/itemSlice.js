import { createSlice } from "@reduxjs/toolkit";
import productsData from "../products.json";
export const itemSlice = createSlice({
  name: "items",
  initialState: {
    id: "",
    prods: [],
    money: 100000000000,
    sellButton: false,
    buyButton: true,
  },
  reducers: {
    setProds: (state, action) => {
      //id gönderiyorum bu gelen id'yi datadan bulup prods'a yazıyorum
      state.id = action.payload;

      const filtered = productsData.filter((item) => item.id === state.id);

      var filtreliItem = {
        id: state.id,
        ProdName: filtered[0].ProdName,
        ProdPrice: filtered[0].ProdPrice,
        quantity: filtered[0].quantity,
      };

      if (state.prods.length === 0) {
        state.prods.push(filtreliItem);
      }

      var sonuc = state.prods.some((item) => item.id === state.id);

      if (sonuc) {
        state.prods.filter((item, index) =>
          item.id === state.id
            ? (state.prods[index].quantity =
                parseInt(state.prods[index].quantity) + 1)
            : console.log("id eşit değil")
        );
      } else {
        state.prods.push(filtreliItem);
        state.prods.filter((item, index) =>
          item.id === state.id
            ? (state.prods[index].quantity =
                parseInt(state.prods[index].quantity) + 1)
            : console.log("id eşit değil")
        );
      }

      //satın alma
      const price = parseInt(filtreliItem.ProdPrice);
      const mny = parseInt(state.money);
      state.money = mny - price;
      state.sellButton = true;
    },

    DeleteProd: (state, action) => {
      state.id = action.payload;
      state.prods.filter((item) =>
        item.id === state.id
          ? (item.quantity = item.quantity - 1)
          : console.log("id eşit değil")
      );

      if (state.prods.filter((item) => item.quantity === 0)) {
        state.prods.filter((item) =>
          item.quantity === 0
            ? state.prods.splice(state.prods.indexOf(item), 1)
            : ""
        );
      }
      const filtered = productsData.filter((item) => item.id === state.id);

      var filtreliItem = {
        id: state.id,
        ProdName: filtered[0].ProdName,
        ProdPrice: filtered[0].ProdPrice,
        quantity: filtered[0].quantity,
      };

      //satma
      const price = parseInt(filtreliItem.ProdPrice);
      const mny = parseInt(state.money);
      state.money = mny + price;
      if (state.money === 100000000000) {
        state.sellButton = false;
      }
    },
  },
});

export const { setProds, setId, DeleteProd } = itemSlice.actions;

export default itemSlice.reducer;
