import React, { useState } from "react";
import styles from "./Cats.module.css";
import * as actions from "../store/cat/actionCreator";
import { useDispatch, useSelector } from "react-redux";

const Cats = (props) => {
    const [text, setText] = useState("Meoww");

    const dispatch = useDispatch();
    const url = useSelector((state) => state.cats.url);
    const loading = useSelector((state) => state.cats.loading);

    const clickHandler = () => {
        dispatch(actions.asyncFetchCats({ text }));
    };
    return (
        <div className={styles.Cats}>
            <h1>Cats!!!</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter random text"
            />
            <button onClick={clickHandler}>Click me!</button>
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <div className={styles.Cats__image}>
                    <img src={url} alt="cat" />
                </div>
            )}
        </div>
    );
};

export default Cats;
