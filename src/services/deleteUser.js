const db=require('../firebase/init')

const deleteUser=async(email)=>{
    // console.log("delete User")

    var id
    // var name
    const snapshot = await db.collection('Users').where("email","==",email).get();
    // console.log(snapshot)
    snapshot.forEach((doc) => {
        // console.log(doc.data().id);
        id=doc.data().id
        // name=doc.data().email
    });
    


    // var email
    // // var name
    const snapshot2 = await db.collection('Users').doc(id).delete();
    
    
}

module.exports=deleteUser;
