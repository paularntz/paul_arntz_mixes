
const Page = () => {
    return (
        <>
            <form name="contact" data-netlify="true"  method="POST" className="container grid grid-cols-1 gap-4">
                <p>
                    <label>Name <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Email <input type="email" name="email" /></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </>
    )
}

export default Page