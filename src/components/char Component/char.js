import React from 'react';

const char=(props)=>{

    const style1={
        display:'inline-block',
        padding:'16px',
        textAlign:'center',
        margin:'16px',
        border:'1px solid black'
    }
    return(
        <div style={style1} onClick={props.delete}>
            {props.character} 
        </div>
    )
}
export default char;