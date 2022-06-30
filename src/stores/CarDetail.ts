import { defineStore } from 'pinia';
import CarInfo from '../Interfaces/StoreInterfaces';

export const CarDetail = defineStore({
    id: 'CarDetail',
    state:() => ({
         vehicle:{
            name:"",
            price:"",
            img:""
         }
    }),
    getters:{
        getVehicle(state):CarInfo{
            return state.vehicle;    
        }
    },
    actions:{
        setVehicle(car:CarInfo){
            this.vehicle = car;
        }
    }
})