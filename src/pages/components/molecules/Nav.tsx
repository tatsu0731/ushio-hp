import Link from "next/link";

export default function Footer() {
    return(
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}