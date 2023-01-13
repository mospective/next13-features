import Header from "../components/Header"

export default function Layout({ children }) {

    return (
        <html lang="en">
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