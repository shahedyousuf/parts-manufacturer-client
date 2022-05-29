import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const userEmail = user?.user?.email;
        const currentUser = { userEmail: userEmail };
        if (userEmail) {
            fetch(`http://localhost:5000/user/${userEmail}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const accessToken = data.token;

                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }
    }, [user]);

    return [token, setToken];
}

export default useToken;