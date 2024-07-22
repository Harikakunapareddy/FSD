function Review(){
    let nameReview={"Harika":"Good","Lakshmi":"Excellent"};

    return(
        <div colspan="2">
            <ul>
                {Object.keys(nameReview).map((key)=>(<li key={key}>{key}:<br/>{nameReview[key]}</li>))}
            </ul>
            <img src="../image.avif" width="50" height="50"/>
        </div>
    )
}
export default Review;