"use client";
import { Button, Image } from "antd";
import React, { useState } from "react";
import styles from "./imageUpload.module.css";

export default function ImageUpload({ text, onImageSelected, className,imageProps: { height, width } } = { imageProps : { height: '200px', width: '100%' } }) {
    const [imagePreview, setImagePreview] = useState(null);
    const handleImage = (file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            setImagePreview(event.target.result);
        }
        onImageSelected(file);
        reader.readAsDataURL(file);
    }
    const deleteImage = () => {
        setImagePreview(null);
        onImageSelected(null);
    }
    return (
        <div className={`${styles.imageUpload} ${className}`} >
            {!!imagePreview ?
                (<div style={{
                    height: height,
                    width: width
                }}>
                    <i class={`${styles.delete} flaticon flaticon-bin`} onClick={deleteImage}></i>
                    <Image className={`${styles.imagePreview} w-100 h-100`} alt="image" src={imagePreview} />
                </div>) :
                (<Button className="uploadBtn">
                    <input onChange={(event) => handleImage(event.target.files[0])} type="file" />
                    {text}
                </Button>)
            }

        </div>
    );
}