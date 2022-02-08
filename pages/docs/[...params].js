import {useRouter} from 'next/router';

const docs=()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router=useRouter();
    const {params=[]}=router.query;
    console.log(params);
   if(params.length===3){
       return (
           <h1>Showing docs for feature {params[0]} concept {params[1]} and example {params[2]}</h1>
       )
   }else if(params.length===2){
    return (
        <h1>Showing docs for feature {params[0]} concept {params[1]} </h1>
    )
   } else{
    return (
        <h1>Docs home page  </h1>
    )

   }
}

export default docs;