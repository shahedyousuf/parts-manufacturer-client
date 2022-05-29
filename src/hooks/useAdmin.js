import { useEffect, useState } from 'react';

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const userEmail = user?.userEmail;
        if (userEmail) {
            fetch(`https://evening-escarpment-73208.herokuapp.com/admin/${userEmail}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                })
        }
    }, [user])

    return [admin]
}

export default useAdmin;