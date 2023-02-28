import React from "react";
import './rrssIcon.css';
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

const RRSSIcon = ({ name }) => {
    const InstagramIcon = () => (
        <>
            <li className="icon instagram">
                <span className="cierzo-games_rrss-text"><a href="#s">{name}</a></span>
                <FaInstagram />
            </li>
        </>
    )
    const YoutubeIcon = () => (
        <>
            <li className="icon youtube">
                <span className="cierzo-games_rrss-text"><a href="#s">{name}</a></span>
                <FaYoutube />
            </li>
        </>
    )
    const FacebookIcon = () => (
        <>
            <li className="icon facebook">
                <span className="cierzo-games_rrss-text"><a href="#s">{name}</a></span>
                <FaFacebookF />
            </li>
        </>
    )

    function getIconByName(name) {
        switch (name) {
            case 'Instagram':
                return <InstagramIcon />

            case 'Youtube':
                return <YoutubeIcon />;

            case 'Facebook':
                return <FacebookIcon />;

            default:
                return null;
        }
    }
    const SelectedIcons = getIconByName(name);

    return (
        <div>
            <ul>
                {SelectedIcons}
            </ul>
        </div>
    )
};

export default RRSSIcon;