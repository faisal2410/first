import Link from 'next/link';
import {useRouter} from 'next/router';
const index=()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router=useRouter()
    const routing=()=>{
        alert("You are submitted as a user");
        router.push("/docs")
    }
return (
    <div>
 <h1>Welcome to the home page</h1>
 <Link href="/users">
     <a>Users</a>
 </Link>
 <Link href="/docs">
     <a>Docs</a>
 </Link>

 <button onClick={routing}>Submit</button>
    </div>
   
)
}
export default index;