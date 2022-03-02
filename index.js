const app =require("express")();
//requiring express and setting up setver
const server = require("http").createServer(app);
//requiring cors
const cors = require("cors");

//setting up io server side instance and after requiring
// socket.io calling function with 2 params 1 server and options
const io =require("socket.io")(server,{
  cors:{
    origin : "*", //on all origins
    method :[ "GET","POST"] //doing these operations
  }
})

app.use(cors());

const PORT = process.env.PORT ||8000;

app.get("/",(req,res)=>{
  res.send("server is listening on "+PORT);
})

io.on("connection",(socket)=>{
  socket.emit("me",socket.id);

  socket.on("calluser",({userTocall,signalData,from,name})=>{
    io.to(userTocall).emit("calluser",{signal:signalData,from,name});
  })
  socket.on("answerscall",(data)=>{
    io.to(data.to).emit("callaccepted",data.signal);
  })
})

server.listen(PORT,()=>{
  console.log("server is listening on "+PORT)
})
