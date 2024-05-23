
import {useForm } from 'react-hook-form'
import CalFunc from './calFunc'


type inputs ={
    weight : number


}

const Form = () => {
    
    const {register,handleSubmit, watch} = useForm<inputs>()
    const onSubmit =(data:any) => console.log(data.weight)
    const wathcwieght  = watch('weight')

   
    

  return (
    <>
  <CalFunc weight={wathcwieght} />
    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="weight">Weight Kg.</label>
      <input type='number' {...register('weight')} id='weight' name='weight'/>
    </form>
    
    </>
  )
}

export default Form
