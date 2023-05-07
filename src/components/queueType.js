import queues from "./queues.json"


function QueueType({playerObj, match}) {

    const queueString = queues.find(queue => queue.queueId == match.info.queueId)


    return (
        <div style={{fontSize: 14}}>
            {queueString.name}
        </div>
    )
}


export default QueueType;