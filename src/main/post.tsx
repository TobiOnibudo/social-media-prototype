import { addDoc, getDocs,collection,query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { db,auth } from "../config/firebase";
import {post as IPost} from "./main";
import { useEffect, useState } from "react";


interface Props{
    post: IPost
}

interface Like{
    userId: string;
}

export function Post(props : Props)
{
    const {post}  = props
    const [user] = useAuthState(auth)
    const [likes,setLikes] = useState<Like[]|null>(null);
    const likesRef = collection(db,"likes")

    const getLikes = async () => {
        const data = await getDocs(likesRef)
        setLikes(  data.docs.map((doc) => 
        ({userId: doc.data().userId})))
    }
    const likesDoc = query(likesRef,where ("postId", "==", post.id))
    const addLike = async () => {
        try 
        {
        await addDoc(likesRef,
            {
               userId : user?.uid,
               postId : post.id
            })
            if (user)
            {
             setLikes((prev) => prev ? [...prev,{userId: user?.uid}] : [{userId: user?.uid}]  )
            }
        }
        catch(err)
        {
            console.log(err)
        }
    };

    const hasUserLiked = likes?.find((like) => like.userId == user?.uid )
    useEffect( () => {
        getLikes();
    },[])

    return (<div>
        <div className="title"> 
        <h1> {post.title}</h1>
        </div>
        <div className="body">
            <p> {post.description}</p>    
        </div>
        <div className="footer">
        <p> @{post.username}</p> 
        </div> 
        <button onClick={addLike}> {hasUserLiked ? <>&#128078;</> : <>&#128077; </> }</button>
        { likes && <p>Likes : {likes?.length} </p> }
    </div>)
}