import Typewriter from "typewriter-effect";

const TypeEffect = () => {
    return (
        <Typewriter
            options={{
                loop: true,
            }}
            onInit={(writer) => {
                writer
                    .pauseFor(250)
                    .typeString("Hello! I'm ")
                    .pauseFor(2000)
                    .typeString(`<span style="color:#0053cc;">MOE</span>, `)
                    .pauseFor(2000)
                    .typeString("A ")
                    .pauseFor(2000)
                    .typeString(`Software Developer. `)
                    .pauseFor(2000)
                    .pauseFor(5000)
                    .start();
            }}
        />
    );
};

export default TypeEffect;