import Image from "next/image";
import Link from "next/link";

export default function SignUp() {

    return <div className="w-full flex flex-row bg-gradient-to-r from-[#000000] to-[#01131A] py-[50px]  min-h-screen">

        {/* Left Side - Sign In Form */}
        <div className="flex flex-col gap-[10px] w-full p-[10px]">
            <p className="sf-pro font-normal text-center text-[75px]">Sign Up</p>

            {/* Sign Up Options */}
            <div className="flex flex-col items-center justify-center gap-[15px]">

                {/* Info */}
                <div className="flex flex-col gap-[25px] w-full max-w-[500px] px-[20px] py-[30px] ">
                    <input
                        type="text"
                        placeholder="Email:"
                        className="sf-pro font-normal text-[20px] px-[15px] py-[10px] rounded-[10px] border-[2px] border-white bg-[#0E191C] text-white focus:outline-none focus:border-[#6EC9F5]"
                        
                    />

                    <input
                        type="password"
                        placeholder="Password:"
                        className="sf-pro font-normal text-[20px] px-[15px] py-[10px] rounded-[10px] border-[2px] border-white bg-[#0E191C] text-white focus:outline-none focus:border-[#6EC9F5]"
                    />

                    {/* Confirm Password */}
                    <input
                        type="password"
                        placeholder="Confirm Password:"
                        className="sf-pro font-normal text-[20px] px-[15px] py-[10px] rounded-[10px] border-[2px] border-white bg-[#0E191C] text-white focus:outline-none focus:border-[#6EC9F5]"
                    />
                </div>
            </div>

            {/* Options */}
            <div className="flex flex-col items-center justify-center gap-[25px]">
                {/* Create Account Button */}
                <button className="sf-pro font-normal text-[25px] bg-white text-black px-[50px] py-[15px] rounded-[25px] hover:bg-[#00B0F2] transition-colors">
                    Create Account
                </button>

                {/* Go Back Button */}
                <Link
                    href="/signin"
                    className="sf-pro font-normal text-[25px] bg-[#0E191C] text-white px-[50px] py-[15px] rounded-[25px] hover:bg-[#00B0F2] hover:text-black transition-colors"
                >
                    Go Back
                </Link>

                {/* Already have an account */}
                <p className="sf-pro font-normal text-[25px] text-gray drop-shadow-[2px_4px_4px_rgba(0,0,0,0.33)]">
                    Already have an account?{" "}
                    <Link href="/signin" className="underline hover:text-[#6EC9F5] transition-colors">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>

        {/* Right Side - TruthLens Logo */}
        <div className="w-full flex flex-col p-[125px] items-center gap-[45px]">
            {/* TruthLens Text */}
            <h1 className="sf-pro font-normal text-[96px] text-center">
                <span className="text-white">Truth</span>
                <span className="text-[#6EC9F5]">Lens</span>
            </h1>

            {/* Logo Section */}
            <Link href="/analyze" className="flex flex-row">
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
            </Link>

            {/* Terms and Conditions */}
            <p className="sf-pro font-normal text-[15px] text-white drop-shadow-[2px_4px_4px_rgba(0,0,0,0.33)]">
                By continuing, you agree to our{" "}
                <Link href="/terms" className="underline hover:text-[#6EC9F5] transition-colors">
                    Terms of Service
                </Link>
                {" "}and{" "}
                <Link href="/privacy" className="underline hover:text-[#6EC9F5] transition-colors">
                    Privacy Policy
                </Link>.
            </p>

        </div>
    </div>
}