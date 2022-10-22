import helloString from "../data/hello.json"

var helloList = helloString.map((language) => `${language.hello}`);

function displayHellos(value: string[]) {
    var i, result = [];
    for (i = 0; i < value.length; i++) {
        result.push(value[i], <br />);
    }
    return result;
}

export function Home() {
    return (
        <>
            <h1>Home</h1>
            <div id="hellos">{displayHellos(helloList)}</div>
        </>
    )
}