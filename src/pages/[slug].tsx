import Container from "../components/Container";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const MDXComponent = useMDXComponent(post.body.code);
    return (
        <Container>
            <div className="mt-10 prose">
                <h1 className="text-sky-700">{post.title}</h1>
                <MDXComponent />
            </div>
        </Container>
    );
};

export const getStaticProps = async ({ params }) => {
    console.log(params)
    const post = allPosts.find((p) => p._raw === params.slug);
    return {
        props: {
            post,
        },
    };
};

export default Post;