const Footer = (): JSX.Element => (
    <footer>
        rocketcrab by{" "}
        <a
            href="https://www.tannerkrewson.com/"
            target="_blank"
            rel="noopener noreferrer"
        >
            Tanner Krewson
        </a>
        <br />
        <a
            href="https://github.com/tannerkrewson/rocketcrab"
            target="_blank"
            rel="noopener noreferrer"
        >
            View on GitHub
        </a>
        <style jsx>{`
            font-size: 12px;
            text-align: center;
            margin-bottom: 2em;
        `}</style>
    </footer>
);

export default Footer;
