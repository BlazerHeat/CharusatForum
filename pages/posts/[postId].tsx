import PostPage from "../../containers/PostPage";

const Post = ({ postId }: any) => {
    return <PostPage postId={postId} />;
};

export default Post;

export function getServerSideProps(context: any) {
    return {
        props: {
            postId: context.params.postId,
        },
    };
}
