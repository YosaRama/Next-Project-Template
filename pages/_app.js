// Styles
import "antd/dist/antd.css";
import DashboardLayout from "app/components/layout";
import "app/styles/dashboard.scss";

// Libs
import { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Yosa Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {router.pathname.startsWith("/dashboard") ? (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
