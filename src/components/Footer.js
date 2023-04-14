import Link from "next/link";

export default function Footer({ message }) {
    return (
        <footer className="col-12 d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-3 mb-0 text-body-secondary">
                &copy; 2023 Do Cavalcanti, Inc.
            </p>
            {
                message
                    ? <span className="alert alert-success col-4" role="alert">{message}</span>
                    : <></>
            }
            <ul className="nav col-md-5 justify-content-end">
                <li className="nav-item">
                    <Link href="/" className="nav-link px-2 text-body-secondary">Início</Link>
                </li>
                <li className="nav-item">
                    <Link href="/create" className="nav-link px-2 text-body-secondary">Nova Campanha</Link>
                </li>
                <li className="nav-item">
                    <Link href="/donate" className="nav-link px-2 text-body-secondary">Doar</Link>
                </li>
                <li className="nav-item">
                    <Link href="https://www.linkedin.com/feed/" className="nav-link px-2 text-body-secondary">Linkedin</Link>
                </li>
                <li className="nav-item">
                    <Link href="https://github.com/adolpho-cavalcanti" className="nav-link px-2 text-body-secondary">Github</Link>
                </li>
            </ul>
        </footer>
    )
}