import React from "react";

export const Doc = () => {

    return (
        <div style={{ display: "flex" }}>
            < div style={{ width: "20%" }}></div>


            <div style={{ marginTop: "120px", width: "60%" }}>
                <h1>Overview</h1>
                <div>
                    <p>Let's face it, forms are really verbose in React. To make matters worse, most form helpers do wayyyy too much magic and often have a significant performance cost associated with them. Formik is a small library that helps you with the 3 most annoying parts:</p>

                    <p>1. Getting values in and out of form state
                    </p>
                    <p>2. Validation and error messages</p>
                    <p>3. Handling form submission
                    </p>

                    <p>By colocating all of the above in one place, Formik will keep things organized--making testing, refactoring, and reasoning about your forms a breeze</p>


                </div>


                <h1>Motivation</h1>
                <div>
                    <p> I (@jaredpalmer) wrote Formik while building a large internal administrative dashboard with @eonwhite. With around ~30 unique forms, it quickly became obvious that we could benefit by standardizing not just our input components but also the way in which data flowed through our forms. </p>


                </div>
                <h1>Why not Redux-Form?</h1>
                <div>
                    <p>By now, you might be thinking, "Why didn't you just use Redux-Form?" Good question.</p>
                    <p>1. According to our prophet Dan Abramov, form state is inherently ephemeral and local, so tracking it in Redux (or any kind of Flux library) is unnecessary</p>
                    <p>2. Redux-Form calls your entire top-level Redux reducer multiple times ON EVERY SINGLE KEYSTROKE. This is fine for small apps, but as your Redux app grows, input latency will continue to increase if you use Redux-Form. </p>
                    <p>3. Redux-Form is 22.5 kB minified gzipped (Formik is 12.7 kB) </p>
                    <p style={{ fontSize: "1.2rem" }}>My goal with Formik was to create a scalable, performant, form helper with a minimal API that does the really really annoying stuff, and leaves the rest up to you.</p>

                </div>
                <div style={{ width: "100%", height: "0px", border: "1px solid rgb(105, 105, 107)" }}>   </div>

                <div>
                    <p>My talk at React Alicante goes much deeper into Formik's motivation and philosophy, introduces the library (by watching me build a mini version of it), and demos how to build a non-trivial form (with arrays, custom inputs, etc.) using the real thing. </p>
                    <div style={{ height: "500px", width: "100%", border: "1px solid black" }}>

 <iframe
        width="560"
        height="315"
        // src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>


                    </div>

                </div>
                <div>
<h1>Influences</h1>
<p>Formik started by expanding on this little higher order component by Brent Jackson, some naming conventions from Redux-Form, and (most recently) the render props approach popularized by React-Motion and React-Router 4. Whether you have used any of the above or not, Formik only takes a few minutes to get started with.

Installation</p>
<h1>Installation</h1>
<p>You can install Formik with NPM, Yarn, or a good ol' script via unpkg.com.</p>
            </div>
            </div>
            <div>

            </div>



            <div style={{ width: "20%" }}></div>
            
   

        </div>
    )
}