import express, { Application } from "express"
import { Routes } from "./interfaces/routes.interface"
import  {PORT} from "./config"

class mainApp{
    public app: Application;
    public env: string;
    public port: string | number | any;

    constructor(routes: Routes[]) {
        this.app = express()
        // this.env = 
        this.port = PORT
            
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`📌💻 app is listing to post ${this.port}`)
        })
    }
}


export default mainApp