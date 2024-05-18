
import '../Loader/loader.css'
const Spinner = () => {
    return (
        <div className={" body fixed top-0 left-0 w-full h-full opacity-[0.98] flex items-center justify-center z-[200] "}>
            <div className="content">
                <div className="bars">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="bars">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;
