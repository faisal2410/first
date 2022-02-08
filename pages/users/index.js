import Link from 'next/link';
const users =({userId=50})=>{
    return (
        <div>
        <Link href="/"><a>Home Page</a></Link>        
        <h1>Welcome to Users Page</h1>
        <h2><Link href="/users/1"><a>User Number 1</a></Link></h2>
        <h2> <Link href="/users/2"><a>User Number 2</a></Link></h2>
       <h2> <Link href="/users/3"><a>User Number 3</a></Link></h2>
       <h2> <Link href="/users/4" replace><a>User Number 4</a></Link></h2>
       <h2> <Link href={`users/${userId}`}><a>User Number {userId}</a></Link></h2>
       
      
        </div>
    );
};

export default users;