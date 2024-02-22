const db=require('../firebase/init')

const getEmail=async(emailParam)=>{
    // console.log("get email")
    
    var email
    // var name
    const snapshot = await db.collection('Users').where("email","==",emailParam).get();
    // console.log(snapshot)
    snapshot.forEach((doc) => {
        // console.log(doc.data());
        email=doc.data().email
        // name=doc.data().email
    });
    return email
    
}

module.exports=getEmail;
