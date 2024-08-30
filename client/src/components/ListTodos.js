import React,{Fragment, useEffect, useState} from "react";

const ListTodos = () => {

    // getTodos = async () => { 
    //     try {
    //         const response = await fetch("http://localhost:5000/todos", {
    //             method: "get",
    //             headers: {"Content-Type": "application/json"},
    //             body: JSON.stringify(body)
    //         });
    //     } catch (err) {
    //         console.error(err.message);
    //     }
    // }

    // useEffect(() => {
    //     getTodos();
    // })

    return(
        <Fragment>
            <table class="table mt-5">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>
                <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                </tr>
                <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListTodos;