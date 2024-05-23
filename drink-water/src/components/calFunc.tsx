import '../index.css'
type InputProps = {
    weight : number 
}

const calFunc = ({weight}: InputProps) => {
     
    const WaterPerDay = Math.floor(weight *2.2*30/2);
  return (
    <div>
        <h1>ควรดื่มน้ำวันละ</h1>
        <h1>{WaterPerDay} Ml</h1>
    </div>
  )
}

export default calFunc

