export default function Layout({ children }) {
    console.log(children)

    return (
        <html lang="en">
            <head>
                <title>Title of home page</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}