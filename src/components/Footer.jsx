

const Footer = () => {
    return (
        <div>
            <div className="text-center mb-10 border-b-2 py-5 pt-16">
                <h2 className="text-[32px] font-bold ">Gadget Heaven</h2>
                <p className="text-[#6C6B6F]">Leading the way in cutting-edge technology and innovation</p>
            </div>
            <footer className="footer justify-evenly p-10">
                <nav>
                    <h6 className="footer-title text-[18px] font-bold text-[#09080F]">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;