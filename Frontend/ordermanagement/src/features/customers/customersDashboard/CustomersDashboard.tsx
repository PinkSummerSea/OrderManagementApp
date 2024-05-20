import React from 'react'
import { useGetCustomersQuery } from '../../../graphql/generated/schema'

const CustomersDashboard = () => {
    const {data: customersData, loading, error } = useGetCustomersQuery();
    if(loading){
        return <div>loading...</div>
    }
    if(error||!customersData){
        return <div>error...</div>
    }
    return(
        <div>
            <h2>Customers</h2>
            <ul>
                {customersData.customers?.map(
                    c => (
                        <li key={c?.id}>{c?.firstName}</li>
                    )
                )}
            </ul>
        </div>
    )
}

export default CustomersDashboard