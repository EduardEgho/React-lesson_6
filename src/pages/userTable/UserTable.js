import React, {useState} from 'react';
import {useForm} from "react-hook-form";


function UserTable() {

    const [array, setObject] = useState([])

    const {
        handleSubmit,
        register,
        reset,
        formState:{errors}} = useForm()

    const submit = (data) => {
        setObject([...array,data])
        reset()
    }

    const deleteUser= (index)=>{
        const newUser = [...array.slice(0, index), ...array.slice(index + 1)]
        setObject(newUser)
    }


    return (
        <div>
            <h1>Create Posts</h1>
            <form onSubmit={handleSubmit(submit)}>
                <input {...register('name', {required: true})} placeholder='name'/>
                <input {...register('username', {required: true})} placeholder='username'/>
                <input {...register('email', {required: true})} placeholder='email'/>
                <input type="number" {...register('phone', {required: true})} placeholder='phone'/>
                <input {...register('website')} placeholder='website'/>
                <button type="submit">Создать</button>
                <button type='reset' onClick={() => setObject([])}>Очистить таблицу</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>website</th>
                    </tr>
                </thead>
                <tbody>
                {
                    array.length > 0 ?
                        array.map((data, index) =>
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.username}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>{data.website}</td>
                                <td>
                                    <button onClick={() => deleteUser(index)}>delete</button>
                                </td>
                            </tr>
                        ) : <tr>
                        <td>Список пуст</td>
                        </tr>
                }


                </tbody>
            </table>

        </div>
    );
}

export default UserTable;
