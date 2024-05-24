import { Image } from 'antd';
import React from 'react';
import styles from "./Avatar.module.css"

export default function Avatar({ alt, src, className, size, color }: { alt: string, src: string, className?: string, size?: number, color?: string }) {
    return (
        <div className={`rounded-circle ${styles.avatar} ${className}`} style={{
            width: `${size ? size / 2 : 80}px`,
            height: `${size ? size / 2 : 80}px`,
            '--color': color ?? "#fff"
        }}>
            <Image src={src} alt={alt} />
        </div>
    );
}
