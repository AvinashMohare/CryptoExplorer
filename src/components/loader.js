import { DNA } from "react-loader-spinner";

const Loader = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <DNA type="ThreeDots" color="#000000" />
        </div>
    );
};

export default Loader;

// Audio, BallTriangle, Bars, Blocks, Circles, CirclesWithBar,
// ColorRing, Comment, DNA, Discuss,
// FallingLines, FidgetSpinner,
// Grid, Hearts, Hourglass,
// InfinitySpin, LineWave,
// MagnifyingGlass, MutatingDots,
// Oval, ProgressBar, Puff, Radio,
// RevolvingDot, Rings, RotatingLines,
// RotatingSquare, RotatingTriangles,
// TailSpin, ThreeCircles, ThreeDots, Triangle, Vortex, Watch)
