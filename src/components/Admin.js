import React from 'react'
import { firebaseApp } from '../firebase'

const Admin = () => {

    const onChange = (e) => {
        const file = e.target.files[0];
        let storageRef = firebaseApp.storage().ref('files')
        const fileRef = storageRef.child(file.name)
        fileRef.put(file).then(() => {
            console.log('Uploaded file to server')
        }).catch((err) => console.log(err))
    }
     
    




    return (
        <div className="admin">
            <h1>Admin panel</h1>
            <div className="admin__content">
                <input type='file' onChange={onChange} />
            </div>
        </div>
    )
}

export default Admin
