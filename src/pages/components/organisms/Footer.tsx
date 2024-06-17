import Copyright from "../atoms/Copyright";

export default function Footer() {
    return(
        <footer className="mb-4">
            <div className="flex justify-end">
                <div className="flex gap-4 mr-4">
                    <p>牛尾ゼミ</p>
                    <p>明治大学</p>
                </div>
            </div>
            <div className="flex justify-center">
                <Copyright />
            </div>
        </footer>
    )
}