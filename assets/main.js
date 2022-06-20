function getMyName(){
    let txtname = document.getElementById("iname").value;
    document.getElementById("paragr").innerHTML= ` Hello ${txtname}, welcome to the bootcamp`;
}