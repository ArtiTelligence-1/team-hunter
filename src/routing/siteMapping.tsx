import { Link, useLocation } from "react-router-dom";
import { linkStructure } from "./models/routing-structures";

export const structure = {
    Login: {
        path: "/login/*",
        caption: 'Login',
    } as linkStructure,
    Home: {
        path: "/Home",
        caption: 'Home',
        position: ['header'],
    } as linkStructure,
    Events: {
        path: "/Events",
        caption: 'Events',
        position: ['header', 'footer'],
    } as linkStructure,
    About: {
        path: "/About",
        caption: 'About',
        position: ['header', 'footer'],
    } as linkStructure,
    Contact: {
        path: "/Contact",
        caption: 'Contact',
        position: ['header', 'footer'],
    } as linkStructure,
    Profile: {
        path: "/Profile",
        caption: 'Profile',
        position: ['header'],
    } as linkStructure,
};

export const structureMap = (position: string) =>
    Object.values(structure)
        .filter(link => link?.position?.includes(position) || false)
        .map(link => 
            ({
                component: (
                    <Link to={link.path}>{link.caption}</Link>
                ), 
                isActive: useLocation().pathname == link.path
            })
        );