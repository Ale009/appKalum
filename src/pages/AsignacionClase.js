import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function AsignacionClase() {
    const user = useSelector(state => state.auth.user);
    const { uuid } = useParams()

    console.log(uuid);
    console.log(user.carne);

    axios.post();
    return (
        <div>
            Asignación de clase
        </div>
    )
}
