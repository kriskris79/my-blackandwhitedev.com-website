import React, { useRef, useEffect } from 'react';
import '../scss/styles/_typewriter.scss';

function TypeWriter() {
    const txtElement = useRef(null);

    useEffect(() => {
        class TypeWriter {
            constructor(txtElement, words, wait = 3000) {
                this.txtElement = txtElement;
                this.words = words;
                this.txt = '';
                this.wordIndex = 0;
                this.wait = parseInt(wait, 8);
                this.type();
                this.isDeleting = false;
            }

            type() {
                // Current index of word
                const current = this.wordIndex % this.words.length;
                // Get full text of current word
                const fullTxt = this.words[current];

                // Check if deleting
                if (this.isDeleting) {
                    // Remove char
                    this.txt = fullTxt.substring(0, this.txt.length - 1);
                } else {
                    // Add char
                    this.txt = fullTxt.substring(0, this.txt.length + 1);
                }

                // Insert txt into element
                this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

                // Initial Type Speed
                let typeSpeed = 100;

                if (this.isDeleting) {
                    typeSpeed /= 3;
                }

                // If word is complete
                if (!this.isDeleting && this.txt === fullTxt) {
                    // Make pause at end
                    typeSpeed = this.wait;
                    // Set delete to true
                    this.isDeleting = true;
                } else if (this.isDeleting && this.txt === '') {
                    this.isDeleting = false;
                    // Move to next word
                    this.wordIndex++;
                    // Pause before start typing
                    typeSpeed = 100;
                }

                setTimeout(() => this.type(), typeSpeed);
            }
        }

        const words = JSON.parse(txtElement.current.getAttribute('data-words'));
        const wait = txtElement.current.getAttribute('data-wait');
        // Init TypeWriter
        new TypeWriter(txtElement.current, words, wait);
    }, []);

    return (
        <div className="container" id="typewriter">
            <h1>
        <span
            ref={txtElement}
            className="txt-type"
            data-wait="3000"
            data-words="[&quot;Hi there, I'm Kris.&quot;, &quot;I'm currently studying IT.&quot;, &quot;I worked through 600+ hours of bootcamp structure,&quot;, &quot;learning JavaScript, CSS, HTML, React.Js.&quot;, &quot;Now, I am expanding my skills into IT domains.&quot;, &quot;Eager to tackle IT, web development/design, web applications, and mobile app challenges.&quot;, &quot;Have a look at my skills below and check out my newest Git repositories.&quot;]"
        ></span>
            </h1>

        </div>
    );
}

export default TypeWriter;
