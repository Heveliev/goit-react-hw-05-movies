import { fetchReviews } from "getApi/getApi"
import { useState } from "react";
import { useEffect } from "react"
import { useParams } from "react-router-dom"


 const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews(movieId).then(resp => setReviews(resp))
    }, [movieId]);
    return (
        <>
            {reviews.length ? <ul>{reviews.map(review => <li key={review.id}>
                <h5>{review.author}</h5>
                <p>{review.content}</p>
            </li>)}</ul> : <p>Sorry but i don't know who author this film</p>}
            
        </>
    )
}

export default Reviews