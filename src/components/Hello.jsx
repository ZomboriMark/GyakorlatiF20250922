function Hello(){
const sayHello = () => {
    window.alert('Helló Világ')
}
    return(
        <>
            <button onClick={sayHello}>Helló</button>
        </>
    )
}
export default Hello