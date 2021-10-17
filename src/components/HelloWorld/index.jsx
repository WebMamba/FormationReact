export default function HelloWorld() {
    const name = "Tom";

    if (name !== "Arthur") {
        return (
            <h1>T'es pas le bienvenu gamin !</h1>
        )
    }

    return (
        <>
            <h1>Bienvenu sur React { name }!</h1>
        </>
    );
}