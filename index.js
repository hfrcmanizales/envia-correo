import api from "./api.js"


api.listen(process.env.PUERTO,()=>{
   console.log("servidor en puerto 4000")
})
