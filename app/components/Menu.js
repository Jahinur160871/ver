import Link from 'next/link.js';
import React from 'react';

const Menu = () => {
    return (
        <div>
            <Link href={"/"}>Home</Link><br/>
            <Link href={"/blog"}>Blog</Link><br/>
            <Link href={"/single-blog"}>Single-blog</Link><br/>
            <Link href={"/contact"}>Contact</Link><br/>
            <Link href={"/about"}>About</Link><br/>
        </div>
    );
};

export default Menu;