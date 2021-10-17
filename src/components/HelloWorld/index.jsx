export default function HelloWorld() {
    const name = <script>{`console.log("hello world")`}</script>;

    return (
        <>
            <h1>Bienvenu sur React { name } !</h1>
        </>
    );
}