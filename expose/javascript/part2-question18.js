let d = new Date(); 
let time = d.toLocaleDateString();
setInterval(() => {
    time = d.toLocaleTimeString();
    console.log(time);
}, 1000);