import React from 'react';

import StarRatings from 'react-star-ratings';





const AggregateRating = ({rev}) => {
    const [star,changeStar]=React.useState(0);
    const [review,changeReview]=React.useState(rev);
console.log('rev',review);
   
 React.useEffect(()=>{

        
    var total=0;
        
        if(review.some(e=>e.stars>0)){
          console.log('if',review.stars);
          
          review.map(m=> total=total+m.stars);
        
          console.log('staar',total);
        changeStar(total);
        
        }
        if(review.length!=0){
        
        changeStar(total/review.length);
        }
        
        
            },[]);


    return ( 
        
        <React.Fragment>
        <StarRatings
        starDimension='35px'  
        rating={star}
          starRatedColor="red"
          isAggregateRating={true}
          numberOfStars={5}
          name='rating'
          
        /> </React.Fragment>);
}
 
export default AggregateRating;