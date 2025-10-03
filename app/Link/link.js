import Link from 'next/link';
import React from 'react';

export default function MyLink({ href, children, ...props }) {
    return (
        <Link href={href} {...props}>
            <a style={{textDecoration: "none"}}>{children}</a>
        </Link>
    )
}
