import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function SignIn() {

    return <div className="w-full flex flex-row bg-gradient-to-r from-[#000000] to-[#01131A] py-[150px]  min-h-screen">

        {/* Left Side - Sign In Form */}
        <div className="flex flex-col gap-[50px] w-full p-[10px]">
            <p className="sf-pro font-normal text-center text-[75px]">Sign Up</p>

            {/* Sign In Options */}
            <div className="flex flex-col items-center justify-center gap-[25px]">

                {/* Google Sign In Button */}
                <button className="flex flex-row rounded-[15px] py-[10px] px-[100px] gap-[10px] bg-white">
                    <img
                        src="images/Google.png"
                        alt="Google Icon"
                        className="mr-[10px] w-[33px] h-[33px] object-contain drop-shadow-[2px_4px_4px_rgba(0,0,0,0.33)]" />
                    <p className="sf-pro font-normal text-[25px] text-black drop-shadow-[2px_4px_4px_rgba(0,0,0,0.50)]">Sign in with Google</p>
                </button>

                {/* Apple Sign In Button */}
                <button className="flex flex-row rounded-[15px] py-[10px] px-[100px] gap-[10px] bg-[#0E191C] border-[2px] border-white ">
                    <img
                        src="images/Apple.png"
                        alt="Apple Icon"
                        className="mr-[10px] w-[33px] h-[33px] object-contain drop-shadow-[2px_4px_4px_rgba(0,0,0,0.33)]" />
                    <p className="sf-pro font-normal text-[25px] text-white drop-shadow-[2px_4px_4px_rgba(0,0,0,0.33)]">Sign in with Apple</p>
                </button>

                {/* Email Sign In Button */}
                <button className="flex flex-row rounded-[15px] py-[10px] px-[100px] gap-[10px] bg-[#0E191C] border-[2px] border-white ">
                    <img
                        src="images/Email.png"
                        alt="Email Icon"
                        className="mr-[10px] w-[33px] h-[40px] object-contain drop-shadow-[2px_4px_4px_rgba(0,0,0,0.33)]" />
                    <p className="sf-pro font-normal text-[25px] text-white drop-shadow-[2px_4px_4px_rgba(0,0,0,0.33)]">Sign in with Email</p>
                </button>
            </div>

            {/* Sign Up Link */}
            <div className="flex flex-row gap-[10px] justify-center">
                <p className="sf-pro font-normal text-[25px] text-[#A3A0A0]drop-shadow-[2px_4px_4px_rgba(0,0,0,0.33)]">Don't have an account?</p>
                <button className="sf-pro font-normal text-[25px] text-white drop-shadow-[2px_4px_4px_rgba(0,0,0,0.33)] underline">Sign Up</button>
            </div>
        </div>

        {/* Right Side - TruthLens Logo */}
        <div className="w-full flex flex-col p-[60px] items-center gap-[45px]">
            {/* TruthLens Text */}
            <h1 className="sf-pro font-normal text-[96px] text-center">
                <span className="text-white">Truth</span>
                <span className="text-[#6EC9F5]">Lens</span>
            </h1>

            {/* Logo Section */}
            <div className="flex flex-row">
                <Image
                    src="/images/Logo+Text.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="border-l-[0.5px] border-t-[0.5px] border-b-[0.5px] border-[#00B0F2]"
                />
                <Image
                    src="/images/SeeThroughTheNoise.png"
                    alt="Logo"
                    width={445}
                    height={100}
                    className="border-r-[0.5px] border-t-[0.5px] border-b-[0.5px] border-[#00B0F2]"
                />
            </div>

            {/* Terms and Conditions */}
            <p className="sf-pro font-normal text-[15px] text-white drop-shadow-[2px_4px_4px_rgba(0,0,0,0.33)]">
                By continuing, you agree to our <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span>.
            </p>

        </div>
    </div>
}