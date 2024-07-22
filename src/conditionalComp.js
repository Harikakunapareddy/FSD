function Cond(){
    const cars=["RR","LB","BH"];
    const colors=["Blue","Green","Red"];
    let enter=false;
    const carsList=cars.map((car,index)=> <li key={index}>{car}</li>);
    const colorsList=colors.map((color,index)=> <li key={index}>{color}</li>);
    return(
        <div>
            {enter ? <h1>Truee</h1> : <div>Falsee</div>}
        </div>
    )
    //return (enter ? <h1>Hi</h1> : <h1>Bye</h1>);
    // if(enter){
    //     return(
    //         <div>
    //             <h1>List of cars</h1>
    //             <ul>{carsList}</ul>
    //         </div>
    //     )
    // }else{
    //     return(
    //         <div>
    //             <h1>List of colors</h1>
    //             <ul>{colorsList}</ul>
    //         </div>
    //     )
    // }
}
export default Cond;