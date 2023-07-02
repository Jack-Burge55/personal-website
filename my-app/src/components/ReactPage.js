import React, { useState, useEffect } from 'react'
const ReactPage = () => {
    const [newItem, setNewItem] = useState("")
    const [checkoutQueues, setCheckoutQueues] = useState(Array(3).fill([]))
    const [scanRate, setScanRate] = useState(1)

    const addNewItem = () => {
        if (newItem) {
            let smallestQueueTotal = Infinity
            let smallestQueueIndex 
            checkoutQueues.forEach((checkout, checkoutIndex) => {
                const checkoutSum = checkout.reduce((partialSum, trolley) => partialSum + trolley, 0)
                if (checkoutSum < smallestQueueTotal) {
                    smallestQueueTotal = checkoutSum
                    smallestQueueIndex = checkoutIndex
                }
            })
            checkoutQueues[smallestQueueIndex] = checkoutQueues[smallestQueueIndex].concat([newItem])
            setCheckoutQueues(checkoutQueues)
            setNewItem("")
        }
    }

    const workThroughQueues = (queues) => {
        const newQueues = queues.map(queue => {
            if (queue.length) {
            const firstElement = queue[0]
            const rest = queue.slice(1)
            return firstElement === 1 ? rest : [firstElement - 1].concat(rest)}
            else return []
        })
        return newQueues
    }

    const changeQueueCount = (change) => {
        let result 
        if (change === 1) {
            result = [...checkoutQueues, []]
            setCheckoutQueues(result)
        } else if (change === -1 && checkoutQueues.length > 1) {
            let emptyQueueFound = false
            let indexToRemove
            checkoutQueues.forEach((queue, index) => {
                if (queue.length === 0 && !emptyQueueFound) {
                    emptyQueueFound = true
                    indexToRemove = index
                }
            })
            result = [...checkoutQueues]
            if (0 <= indexToRemove) {
                result.splice(indexToRemove, 1)
                const tempVar = [...result]
                setCheckoutQueues(tempVar)
            }
        }
    }

    useEffect(() => {
        const interval = setTimeout(() => {
            setCheckoutQueues(workThroughQueues(checkoutQueues))}, Math.floor(1000 / scanRate))

        return () => clearTimeout(interval)
    }, [checkoutQueues, scanRate])

    return(
        <>
        <div className='reactHead'>
            <input placeholder="Add Customer" value={newItem} onChange={(e) => {setNewItem(e.target.value !== "" ? parseInt(e.target.value, 10) : "")}}></input>
            <button onClick={() => addNewItem()}>Checkout</button>
            <br/>
            <button onClick={() => changeQueueCount(-1)}>Reduce Queue Count</button>
            <input value={checkoutQueues.length} disabled={true} style={{width: 20}}></input>
            <button onClick={() => changeQueueCount(1)}>Increase Queue Count</button>
            <br/>
            <button onClick={() => setScanRate(scanRate > 1 ? scanRate - 1 : 1)}>Reduce Scan rate</button>
            <input value={scanRate} disabled={true} style={{width: 20}}></input>
            <button onClick={() => setScanRate(scanRate + 1)}>Increase Scan rate</button>
        </div>
        <div className='reactBody'>
            {checkoutQueues.map((checkout, checkoutId) => {
                return (<div key ={checkoutId} className='checkoutColumn'>
                <div className='checkoutHead'>
                    <p style={{margin: 0}}>Checkout #{checkoutId + 1}</p>
                </div>
                    <div className='checkoutQueue'>
                    {checkout.map((trolley, trolleyId) => {
                        return <div key={trolleyId} className='checkoutItem'>{trolley}</div>
                    })}
                    </div>
            </div>)
            })}
        </div>
        </>
    )
}
export default ReactPage;