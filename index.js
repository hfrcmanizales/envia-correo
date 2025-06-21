import api from "./api.js"


const PORT = process.env.PORT || 4000;
api.listen(PORT, () => {
   console.log(`Servidor corriendo en el puerto ${PORT}`);
});
