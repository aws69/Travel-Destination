
import Tour from "./tour/Tour";
import ".tours/Tours.css";

function Tours(props) {

    return (
        <div className='mainlist'>
            {props.DATA1.map(element => {
                return (
                    <div className='tour'>
                        <Tour image={element.image} id={element.id} name={element.name} />
                    </div>
                )
            })}

        </div>
    );
}
export default Tours;