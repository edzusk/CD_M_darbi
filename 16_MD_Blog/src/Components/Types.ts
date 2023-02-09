type Post = {
    id: number,
    title : string,
    content : string,
    image: string,
    comments: Comments[]    
}

export type Comments = {
    blogId: number,
    id: number
    author: string,
    content: string,
    avatar: string
}

export default Post