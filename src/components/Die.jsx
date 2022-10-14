import './die.css'

export default function Die(props) {
    return (
        <div >
            <h2 className="die-dices">{props.value}</h2>
        </div>
    )
}