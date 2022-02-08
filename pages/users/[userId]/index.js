import { useRouter } from 'next/router';

const userDetails=()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const {userId} = router.query;
    return (
        <div>
        <h1>User Information Number: {userId}</h1>
        </div>
    );
};

export default userDetails;