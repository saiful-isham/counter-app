import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'

function Counter() {
    const [amount ,setAmount] = useState(0)
    const dispatch = useDispatch()
    const { count } = useSelector(state => state.counterReducer)
    const handleIncrementAmount= ()=>{
        if(amount){
            dispatch(incrementByAmount(Number(amount)))
    
        }else{
            alert("enter a valid number")
        }
    }
   


    return (
        <div>
            <h1 className='text-center'>Counter</h1>
            <div style={{ width: '800px' }} className="border p-5 rounded">
                <h1 style={{ fontSize: '80px' }} className='text-center text-warning'>{count}</h1>
                <div className="d-flex justify-content-between align-items-center mt-3  w-100">
                    <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>DECREMENT</button>
                    <button onClick={()=>dispatch(reset())} className='btn btn-danger'>RESET</button>

                    <button onClick={()=>dispatch(increment())} className='btn btn-success'>INCREMENT</button>

                </div>
                <div className="p-5 ">

                    <div className="d-flex justify-content-between mt-5 w-100 align-items-center">
                        <input  onChange={(e)=>setAmount(e.target.value)} className='form-control' type="text" placeholder='incremented amount' />

                        <button onClick={handleIncrementAmount} className='btn btn-primary ms-2'>INCREMENT BY amount</button>

                    </div>

                </div>



            </div>

        </div>
    )
}

export default Counter
