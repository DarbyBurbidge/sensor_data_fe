import { useCallback, useEffect, useState } from "react";

const placeholder = <></>

export const Home = () => {
    const [fetching, setFetching] = useState(false);
    const [data, setData] = useState([{timeStamp: 0, temp: 0, hum: 0}])
    const awaitFetch = useCallback(async () => {
        if (fetching) {
            return;
        }
        setFetching(true);
        fetch("http://localhost:5000/harvest", {
            method: 'GET',
            credentials: 'include'
        }).then(async res => {
            const data = await res.json()
            console.log(data)
            setData(data);
            setFetching(false);
        })
    }, [fetching])

    useEffect(() => {
        awaitFetch();
    }, [])

    return (
        <div>
            {fetching ? placeholder : data.map((timeSlice) => {
            return (
            <div key={timeSlice.timeStamp}>
                <div>
                    {`Time: ${new Date(timeSlice.timeStamp).toLocaleTimeString()}`}
                </div>
                <div>
                    {`Temperature outside: ${timeSlice.temp}`}
                </div>
                <div>
                    {`Humidity: ${timeSlice.hum}`}
                </div>
            </div>
            )
            })}
            <button onClick={() => {awaitFetch()
            }}>What about now?</button>
        </div>
    );
}