import filledStar from '../../../assets/images/home/star.svg';
import { FaRegStar } from "react-icons/fa";

const StarRating = ({ rating, maxStars=5}) => {


    const renderStars = () => {
        const stars = [];
        for( let i=1; i<= maxStars; i++) {
            if( i<= rating) {
                stars.push(<img src={filledStar} alt="filled star" key={i} className="w-3 md:w-auto" />); // Filled star
            }
            else if (i === Math.ceil(rating) && rating % 1 !== 0) {
                stars.push(<img src={outlinedStar} alt="half star" key={i} className="w-3 md:w-auto"/>); // Half-filled star
            } else {
                stars.push(<FaRegStar alt="empty star" key={i} className="w-3 md:w-auto text-[#FFC250]" />); // Empty star
            }
        }
        return stars;
    }

    return (
        <div className='flex items-center gap-1 mt-1.5 md:mt-0 -ml-1.5 md:-ml-0'>
            {renderStars()}
        </div>
    );
};

export default StarRating;