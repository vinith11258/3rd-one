import React from 'react'

const Hcomp = (OriginalComponent) => {
        class NewComponent extends React.Component{
            render(){
                return(
                    <div>
                        <OriginalComponent name = 'Vinith'/>
                    </div>
                );
            }
        }
        return NewComponent
}

export default Hcomp