
const Page = () => {
    return (
        <>
        <form netlify name="contact">
            <div>Name:<input type="text" name="name" /></div>
            <div>Email:<input type="email" name="email" /></div>
            <div><button type="submit">Submit</button></div>
        </form>
        </>
    )
}

export default Page