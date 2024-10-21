import { z } from "zod"
import Input from "../../ui/Input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const employeeSchema = z.object({
    name: z.string()
})
type EmployeeSchema = z.infer<typeof employeeSchema>

const AddEmployee = () => {
    const {register, handleSubmit} = useForm<EmployeeSchema>({
        resolver: zodResolver(employeeSchema)
    })
    function submit(data: EmployeeSchema){
        console.log(data)
    }
    return(
        <div className="fixed top-1/2 left-1/2 translate-x-center translate-y-center">
            <div className="">
                <form onSubmit={handleSubmit(submit)}>
                        <Input name="name" label="Nome" type="text" placeholder="Adicione o nome" register={register}/>
                        <Input name="position" label="Cargo" type="text" placeholder="Adicione o cargo" register={register}/>
                        <Input name="level" label="nivel" type="text" placeholder="Adicione o nivel" register={register}/>
                        <Input name="stack" label="Stack" type="text" placeholder="Adicione o Stack" register={register}/>
                        <Input name="salary" label="Salario" type="text" placeholder="Adicione o Salario" register={register}/>
                        <button type="submit">submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddEmployee