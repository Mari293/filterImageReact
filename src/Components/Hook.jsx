import React,{useState} from 'react';
import imageChange from '../../src/Images/image.jpg';
import './Hook.css';


export const Hook = () => {
    const [count, setCount] = useState(0);

    // function stateImage(){
    //     if (count>0){
    //         img.classList.add("normalImage")
    //     }
    //     else{
    //         img.classList.remove("normalImage")
    //         img.classList.add("grayImage")
    //     }
    // }

    return(
        <div>
            <h1 id="number">{count}</h1>
            <img className='grayImage' src={imageChange} alt="Sunset" />
            <div class="buttons">
                <button onClick={()=> setCount(count-1)}>-</button>
                <button onClick={()=> setCount(0)}>Reset</button>
                <button onClick={()=> setCount(count+1)}>+</button>
            </div>
        </div>
    )
}