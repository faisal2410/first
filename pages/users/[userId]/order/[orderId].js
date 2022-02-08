import {useRouter} from 'next/router';

const orderInfo=()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
  const  router=useRouter();
   const {userId, orderId}=router.query;

    return (
        <div>
       
    <h2>Order  Number: {orderId} for User Number {userId}</h2>
        </div>
    );
};

export default orderInfo;