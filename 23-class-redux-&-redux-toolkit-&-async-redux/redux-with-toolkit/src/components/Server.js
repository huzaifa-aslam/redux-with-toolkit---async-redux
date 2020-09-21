import {Server} from 'miragejs'

export const makeServer=({environment='test'}={})=>{
    let server=new Server(
        {
            routes(){
                this.get('api/randomnumber',()=>{

                    return Math.ceil(Math.random()*10)
                });
            }

        }

    )
    return server
}