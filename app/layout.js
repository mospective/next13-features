import { Roboto } from "@next/font/google";
import Header from "../components/Header";

const roboto = Roboto({
    weight: ["400", "700"],
    style: ["normal"],
    subsets: ["latin"]
  });

export default function Layout({ children }) {

    return (
        <html lang="en" className={roboto.className}>
            <head>
                <title>Title of home page</title>  
            </head>
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}