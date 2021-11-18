// Styles
import "antd/dist/antd.css";
import DashboardLayout from "app/components/layout";
import "app/styles/dashboard.scss";

// Libs
import { useRouter } from "next/router";
import Head from "next/head";

// Context
import GlobalContext from "app/contexts";

// Client Data Fetching
import { SWRConfig } from "swr";
import { fetcher } from "app/utils/swr";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <SWRConfig value={{ refreshInterval: 0, fetcher }}>
        <GlobalContext>
          <Head>
            <title>Yosa Template</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          {router.pathname.startsWith("/dashboard") ? (
            <DashboardLayout>
              <Component {...pageProps} />
            </DashboardLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </GlobalContext>
      </SWRConfig>
    </>
  );
}

export default MyApp;
