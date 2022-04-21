import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { getData } from '../helpers/getData';



const ApiFetch = () => {
    const url = "https://rickandmortyapi.com/api/character";
    const [state, setState] = useState({
        loading: true,
        data: []
    })

    const { loading, data } = state;

    const getDataApi = async () => {
        let response = await getData(url);

        setState({
            loading: false,
            data: response
        })
    }

    useEffect(() => {
        getDataApi();
    }, [])

    return (
        <>
            {
                loading ?
                    <div style={{ display: "flex", height: '100vh', justifyContent: "center", alignItems: "center" }}>
                        <Spin size="large" />
                    </div> :
                    data.map(item => {
                        const {id, name} = item;
                        return (
                            <div key={id}>
                                <h1>{name}</h1>
                            </div>
                        )
                    })
            }


        </>
    )
}

export default ApiFetch;