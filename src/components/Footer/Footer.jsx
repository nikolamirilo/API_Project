import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.scss";

const Footer = () => {
  return (
    <div classNameName="footer">
      <footer className="text-center bg-primary text-white">
        <div className="container pt-1">
          <section className="mb-0">
            <Link
              className="btn btn-link btn-floating btn-lg text-light m-1"
              to="https://www.facebook.com/nikola.mirilo.5/"
              role="button"
              data-mdb-ripple-color="light"
            >
              <BsFacebook />
            </Link>

            <Link
              className="btn btn-link btn-floating btn-lg text-light m-1"
              to="https://www.instagram.com/nikola.mirilo/"
              role="button"
              data-mdb-ripple-color="light"
            >
              <BsInstagram />
            </Link>

            <Link
              className="btn btn-link btn-floating btn-lg text-light m-1"
              to="https://www.linkedin.com/in/nikola-mirilo/"
              role="button"
              data-mdb-ripple-color="light"
            >
              <BsLinkedin />
            </Link>
            <Link
              className="btn btn-link btn-floating btn-lg text-light m-1"
              to="https://github.com/nikolamirilo"
              role="button"
              data-mdb-ripple-color="light"
            >
              <BsGithub />
            </Link>
          </section>
        </div>

        <div className="text-center text-light p-3">© 2020 Copyright: Nikola Mirilo</div>
      </footer>
    </div>
  );
};

export default Footer;
