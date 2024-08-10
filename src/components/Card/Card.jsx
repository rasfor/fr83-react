import { StyledCard, StyledText, StyledValue, StyledTotal} from './style';
import PropTypes from 'prop-types'; 

const Card = ({ bgColor }) => {
    return(
        <StyledCard bgColor={bgColor}>
            <StyledText>руб.</StyledText> 
            <StyledTotal>
                <StyledValue>500</StyledValue>
                <StyledText end>/мес</StyledText>
            </StyledTotal>           
        </StyledCard>
    )
}

Card.propTypes = {
    bgColor: PropTypes.string,
}


export default Card