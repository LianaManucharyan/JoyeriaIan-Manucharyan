import {object, string, mixed} from "yup"

let userSchema = object({
    fullname: string().required("Nombre Completo es un campo requerido"),
    phone: mixed().required("Numero es un campo requerido"),
    email: string().email().required("Mail es un campo requerido")
})

const validateForm = async(dataForm) => {
    try{
        await userSchema.validate(dataForm)
        return {status: "success"}
    }catch(error){
        return{status: "error", message: error.message}
    }
    
}

export default validateForm