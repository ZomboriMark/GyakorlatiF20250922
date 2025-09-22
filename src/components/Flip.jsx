import styles from '../css/flip.module.css'

function Piros(){
    return <div className={styles.piros}>Piros</div>
}
function Fekete(){
    return <div className={styles.fekete}>Fekete</div>
}

function Flip(){
    var hit = Math.random() < 0.5;

    return (
        <>
            {hit ? <Piros/> : <Fekete />}
        </>
    )
}
export default Flip