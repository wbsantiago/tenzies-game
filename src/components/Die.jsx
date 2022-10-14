import './die.css'

export default function Die(props) {

    const styles = {
        backgroundColor: props.held ? "var(--bg-dicehold)" : "#FFFFFF"
    }

    return (
        <div>
            <h2 
                className="die-dices" 
                style={styles} 
                onClick={props.holdDice}
            > {props.value} </h2>
        </div>
    )
}