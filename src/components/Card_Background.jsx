import "../App.css"

function CardBackground(props) {
    return ( 
        <div className="card_background">
            {props.children}
        </div> );
}

export default CardBackground;