import Head from "next/head";
import Nav from "./Nav";
import Image from "next/image";
import metadata from "../data/metadata";

const Container = (props) => {
    const meta = {
        title: metadata.title,
        description: metadata.description,
        author: metadata.author,
    };

    return (
        <div className={`w-full flex flex-col items-center p-3`}>
            <Head>
                <title>{metadata.title}</title>
                <meta content={meta.description} name="description" />
                <meta property="og:site_name" content={meta.author} />
            </Head>
            <header className={`w-full max-w-3xl flex flex-row justify-between items-center my-1`}>
                <div className={`flex flex-row items-center`}>
                    <Image
                        src={`/logo.jpg`}
                        alt="로고"
                        width={60}
                        height={40}
                        className={`rounded-full`}
                    />
                    <span className={`mx-2 font-extralight text-lg`}>
                        {metadata.title}
                    </span>
                </div>
                <Nav/>
            </header>
            <main className={`w-full max-w-3xl`}>{props.children}</main>
        </div>
    );
};

export default Container;
