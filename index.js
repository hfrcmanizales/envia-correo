import api from "./api.js"


const PORT = process.env.PORT || 8080;
api.listen(PORT, () => {
   console.log(`Servidor corriendo en el puerto ${PORT}`);
});
