import {defineStore} from "pinia";

export const initLinkStore = defineStore('linkStore',{
    state: ()=>({
       link: '' as string,
    }),
    actions: {
       setLink(link: string){
           this.link = link
       }
    },
})