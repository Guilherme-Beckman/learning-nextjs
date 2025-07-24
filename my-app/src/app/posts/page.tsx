interface PostProps{
    id:number;
    title:string;
    body: string;
    userId:number;
}
interface Response{
    posts: PostProps[]
}
export default async function PostPage(){
    const response = await fetch('https://dummyjson.com/posts');
    const data: Response = await response.json();
    return (
        <div>
            <h1>Página de posts</h1>
            <div className="flex flex-col gap-4">
                {data.posts.map((post)=>(
                    <div key={post.id} className="p-4 border rounded-md shadow-md bg-gray-50">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
} 