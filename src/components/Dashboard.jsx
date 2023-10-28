import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        axios.get('https://praaas.onrender.com/api/invoices')
            .then((response) => setInvoices(response.data))
            .catch((error) => console.error(error));
    }, []);

    console.log(invoices)
    return (
        <>

        </>
    );
}

export default Dashboard;
