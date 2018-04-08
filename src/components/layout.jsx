import React, {Component} from "react";
import App from "app";

export default class Layout extends App {
    render() {
        return (
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">Hello World!</h1>
                        <h2 className="subtitle">Sample Application <span className="icon"><i className="fa fa-comment"></i></span></h2>
                    </div>
                </div>
            </section>
        );
    }
}