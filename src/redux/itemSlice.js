import { createSlice } from "@reduxjs/toolkit";
import productsData from '../products.json'
export const itemSlice = createSlice({
    name: "items",
    initialState: {
        id:"",
        prods: [],
        money:100000000000,
        sellButton:false,
        buyButton:true,
        sayac:[]

    },
    reducers: {
        setProds: (state, action) => {    

            //id gönderiyorum bu gelen id'yi datadan bulup prods'a yazıyorum
            state.id = action.payload;
            const filtered=productsData.filter(item=>item.id==state.id);
            if(state.prods.length!==0){
                state.prods=[...state.prods,filtered[0]]
            }
            else
            state.prods=filtered

            var sayac=0
            state.prods.map(item=>(
                item.id===state.id?
                sayac=sayac+1:""
               
            )
            )
            state.prods.filter(item=>item.id===state.id? 
            
            
            state.sayac=[{name:item.ProdName,price:item.ProdPrice,quantity:sayac}]
            
            :"");
            console.log("state.sayac:",state.sayac)
        },
        setId: (state, action) => {
           

          

            // const price=parseInt(filtered[0].ProdPrice)
            // const mny=parseInt(state.money)
            // state.money=mny-price




            // if(state.id===item.id){
            //     item.quantity=item.quantity+1
        },
        DeleteProd: (state, action) => {
            // state.id = action.payload;
            // const deleteData=state.prods.filter(item=>item.id!==state.id);
            // state.prods=deleteData

            // const filtered=productsData.filter(item=>item.id==state.id);
            // const price=parseInt(filtered[0].ProdPrice)
            // const mny=parseInt(state.money)
            // state.money=mny+price
            
        },
        setMoney: (state, action) => {
            // state.money = action.payload;
        }
    },
});

export const { setProds,setId,DeleteProd } = itemSlice.actions;

export default itemSlice.reducer;