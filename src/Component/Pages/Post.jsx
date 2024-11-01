

const Post = ({post}) => {
    const {body,id,title,userId}=post;
    console.log(post);
    return (
        <div className="">
            <h2 className="font-semibold text-blue-500">ID : {id}</h2>
            <h2>userID : {userId}</h2>
            <h2>Title : {title}</h2>

            <div>
                Details
            </div>
        </div>
    );
};

export default Post;