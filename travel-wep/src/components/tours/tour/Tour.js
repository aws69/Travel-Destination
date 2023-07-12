import { Link } from 'react-router-dom';
import "./Tour.css";

function Tour(props) {
    return (

        <div className='card'>
            <Link to={`/city/${props.id}`} >
                <div key={props.id}>
                    <h2>{props.name}</h2>
                    <img src={props.image} alt={props.name} />
                </div>
            </Link>
        </div>

    );
}

export default Tour;