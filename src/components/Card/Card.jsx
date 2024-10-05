import { useEffect, useState, useRef } from 'react';
import { StyledCard, StyledText, StyledValue, StyledTotal} from './style';
import PropTypes from 'prop-types'; 

const Card = ({ bgColor }) => {

    const [mounted, setMount] = useState(false);
    const nameField = useRef('Tom');

    useEffect(()=> {
        console.log('card mounted');

        return console.log('card unmounted');
    },[mounted])

    const inputChange = () => {
        console.log(nameField)
    }

    return(<>
    <button onClick={()=>{setMount(!mounted)}}>Click!</button>
        {mounted && <StyledCard bgColor={bgColor}>
            <StyledText>руб.</StyledText> 
            <StyledTotal>
                <input type="text" ref={nameField} onChange={inputChange} />
                <StyledValue>500</StyledValue>
                <StyledText end>/мес</StyledText>
            </StyledTotal>           
        </StyledCard>}
    </>)
}

Card.propTypes = {
    bgColor: PropTypes.string,
}


export default Card