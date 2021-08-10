import React from 'react'
import { useParams } from 'react-router';
export default function Page3(){
    let urlID = useParams()
    console.log(urlID)
    return(
        <>
        <h2>Page 3</h2>
         Your UR Search is: {urlID.id}
        </>
    );
}