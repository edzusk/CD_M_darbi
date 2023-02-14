type Post = {
    id: number,
    title : string,
    content : string,
    image_link: string,
    comments: Comments[]    
}

export type Comments = {
    blogId: number,
    id: number
    author: string,
    content: string,
    image_link: string
}

export default Post