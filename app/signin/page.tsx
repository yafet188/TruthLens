import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SignIn() {

    return <div className="w-full flex flex-row bg-gradient-to-r from-[#000000] to-[#01131A] py-[200px] px-[200px]  min-h-screen">

       {/* Left Side - Sign In Form */}
       <div className="flex flex-col justify-between p-[10px]">
        <p className="sf-pro font-normal text-[75px]">Sign In</p>

        {/* Sign In Options */}
        <div className="flex flex-col gap-[25px]">
            {/* Google Sign In Button */}
            <button className="flex flex-row rounded-[15px] p-[10px] bg-white">
                <img 
                src="images/Google.png" 
                alt="Google Icon" 
                width={33}
                height={33}
                className="mr-[10px] shadow-[2px_4px_4px_rgba(0,0,0,0.33)]" />
                <p className="sf-pro font-normal text-[25px] text-black">Sign in with Google</p>
            </button>
        </div>

       </div>
    </div>
}