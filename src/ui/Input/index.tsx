interface IInput {
    name: string
    label: string, 
    type: string, 
    placeholder: string
    register: any;
}
const Input = ({name, label, type, placeholder, register}: IInput) => {
    return (
        <label className="p-2 flex flex-col relative">
            <span className="bg-white text-xs absolute left-5 top-0 px-1">{label}</span>
            <input className="border-black border border-solid border rounded p-2" {...{type, placeholder}}  {...register(name)}/>
        </label>
    )
}
export default Input