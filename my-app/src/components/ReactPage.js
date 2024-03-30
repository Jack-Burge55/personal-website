import React, { useState, useEffect } from "react";
const ReactPage = () => {
  const [newItem, setNewItem] = useState("");
  const [checkoutQueues, setCheckoutQueues] = useState(Array(3).fill([]));
  const [scanRate, setScanRate] = useState(1);

  const addNewItem = () => {
    if (newItem) {
      let smallestQueueTotal = Infinity;
      let smallestQueueIndex;
      checkoutQueues.forEach((checkout, checkoutIndex) => {
        const checkoutSum = checkout.reduce(
          (partialSum, trolley) => partialSum + trolley,
          0
        );
        if (checkoutSum < smallestQueueTotal) {
          smallestQueueTotal = checkoutSum;
          smallestQueueIndex = checkoutIndex;
        }
      });
      checkoutQueues[smallestQueueIndex] = checkoutQueues[
        smallestQueueIndex
      ].concat([newItem]);
      setCheckoutQueues(checkoutQueues);
      setNewItem("");
    }
  };

  const workThroughQueues = (queues) => {
    const newQueues = queues.map((queue) => {
      if (queue.length) {
        const firstElement = queue[0];
        const rest = queue.slice(1);
        return firstElement === 1 ? rest : [firstElement - 1].concat(rest);
      } else return [];
    });
    return newQueues;
  };

  const changeQueueCount = (change) => {
    let result;
    if (change === 1) {
      result = [...checkoutQueues, []];
      setCheckoutQueues(result);
    } else if (change === -1 && checkoutQueues.length > 1) {
      let emptyQueueFound = false;
      let indexToRemove;
      checkoutQueues.forEach((queue, index) => {
        if (queue.length === 0 && !emptyQueueFound) {
          emptyQueueFound = true;
          indexToRemove = index;
        }
      });
      result = [...checkoutQueues];
      if (0 <= indexToRemove) {
        result.splice(indexToRemove, 1);
        const tempVar = [...result];
        setCheckoutQueues(tempVar);
      }
    }
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      setCheckoutQueues(workThroughQueues(checkoutQueues));
    }, Math.floor(1000 / scanRate));

    return () => clearTimeout(interval);
  }, [checkoutQueues, scanRate]);

  return (
    <>
      <h1>React Supermarket Exercise</h1>
      <div className="reactHead">
        <input
          className="input reactInput"
          value={newItem}
          onChange={(e) => {
            setNewItem(
              e.target.value !== "" ? parseInt(e.target.value, 10) : ""
            );
          }}
        ></input>
        <button className="button" type="button" onClick={() => addNewItem()}>
          Checkout
        </button>
        <br />
        <br />
        <button
          className="button"
          type="button"
          onClick={() => changeQueueCount(-1)}
        >
          Reduce Checkouts
        </button>
        <input
          className="input reactInput"
          title="Checkout Count"
          value={checkoutQueues.length}
          disabled
        ></input>
        <button
          className="button"
          type="button"
          onClick={() => changeQueueCount(1)}
        >
          Increase Checkouts
        </button>
        <br />
        <br />
        <button
          className="button"
          type="button"
          onClick={() => setScanRate(scanRate > 1 ? scanRate - 1 : 1)}
        >
          Reduce Scan rate
        </button>
        <input
          className="input reactInput"
          title="Scan Rate"
          value={scanRate}
          disabled
        ></input>
        <button
          className="button"
          type="button"
          onClick={() => setScanRate(scanRate + 1)}
        >
          Increase Scan rate
        </button>
      </div>
      <div className="reactBody">
        {checkoutQueues.map((checkout, checkoutId) => {
          return (
            <div key={checkoutId} className="checkoutColumn">
              <div className="checkoutHead">
                <p style={{ margin: 0 }}>Checkout #{checkoutId + 1}</p>
              </div>
              <div className="checkoutQueue">
                {checkout.map((trolley, trolleyId) => {
                  return (
                    <div key={trolleyId} className="checkoutItem">
                      {trolley}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="title is-4">Instructions</h2>
      <p className="block">
        Welcome to the supermarket! To add a customer, input a number into the
        checkout input box and click the Checkout button to add them. The
        customer automatically goes to the queue with the shortest wait, even if
        this queue has more customers in it compared to another queue with fewer
        customers with more items. Each second, each queue scans through a
        number of items from the current customer equal to the scan rate
        selected. You can also change the number of checkouts by clicking the
        buttons for Checkout Count, however a checkout can't be removed if it
        has customers waiting in the queue.
      </p>
      <h2 className="title is-4">Coding Comments</h2>
      <p className="block">
        This exercise was inspired by{" "}
        <a
          href="https://www.youtube.com/watch?v=B9fmr1TpKHE&t=184s"
          target="_blank"
          rel="noreferrer"
          className="textLink"
        >
          this youtube video
        </a>
        . This is a basic model of a supermarket checkout, where there can be
        multiple checkouts which scan through items from separate customers. So,
        in terms of data, we have multiple items: checkouts, customers and
        items. We also have two different variables, the number of checkout
        queues and the rate that each queue scans through items.
      </p>
      <p className="block">
        One of the most important lessons I learnt when starting to code in
        React was the importance of selecting the right things to be React
        states, and to have as few as required. For example, in this exercise I
        have chosen only 3 states: the current input in the checkout box, the
        scan rate and an array of arrays of items. There is no need to split up
        each queue into its own state, as this complicates things for our
        requirements.
      </p>
    </>
  );
};
export default ReactPage;
