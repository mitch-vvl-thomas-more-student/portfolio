import { ArrowReturnRight } from 'react-bootstrap-icons';


export const ScrollToNavigate = () => {
    return (
        <div>
            <h3>
                <ArrowReturnRight size={40} />
                Scroll om te navigeren<br />
                <span className='small'>(of maak gebruik van de navigatie pijltjes link en rechts onderaan)</span>
            </h3>
        </div>
    );
}