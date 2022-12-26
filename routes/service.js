var admin = require("../connect")

exports.getdb = async(req,res)=> {
    var db = admin.database();
    //let b = await db.ref("baochay").child("p").set("ngu")
    
     //console.log(a);
    
    var gas =  admin.database().ref("baochay").child("p");
    // gas.on("value",snap=>{
    //     console.log('realtime'+snap.val());
       
    // })
    let a =await gas.on('value', async(snapshot) => {
    let data = await snapshot.val();
    
    console.log("thien: "+data)
    
    });
    console.log("database :"+ gas)
    
};
    
 
 


