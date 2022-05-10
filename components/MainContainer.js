import MyLink from "./MyLink";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
  return (
    <>
      <Head>
        <meta keywords={"react, next, js" + keywords}></meta>
        <title>main page</title>
      </Head>
      <div className="navbar">
        <MyLink href={'/'} text={'home'}></MyLink>
        <MyLink href={'/users'} text={'users'}></MyLink>
      </div>
      <div>
        {children}
      </div>
      <style jsx>
        {`
        .navbar {
           background: lightgray;
           padding: 15px;
        }
      `}
      </style>
    </>
  );
};

export default MainContainer;
