const event =require("events");
const eventEmitter = new events.EventEmitter()


//creating an event  handler

const chitkarDibo =()=>{
    console.log("oi beta koi toi ? ami dharai aci ")
}


//assign the handler into an event 

eventEmitter.on('scream',chitkarDibo)


// firint the event 

eventEmitter.emit('scream')



