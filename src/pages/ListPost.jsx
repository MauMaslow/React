import {buscar} from "../api/api"
import { useState, useEffect } from "react";

const ListPost = ({url}) => {

    const [post,setPosts]=useState([])

    useEffect( () => {
        buscar(url, setPosts)
    },[url])

    return<>
    
    {post.map ( post => {
        const {} = post;
        return

    })  }

    </>

}

export default ListPost