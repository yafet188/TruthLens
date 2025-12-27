import Image from 'next/image'

export default function Header() {
    return (
        <header>
            <div className="w-full flex flex-row justify-between items-center px-[50px] py-[50px] gap-auto">
                <Image
                    src="/images/Logo.png"
                    alt="Logo"
                    width={60}
                    height={60}
                    className="w-[63px] h-[63px] rounded-[15px] border-[2px] border-solid border-[#00B0F2] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.60)]"
                />
                <div className='flex flex-row gap-[10px]'>
                    <div className="w-[100px] h-[50px] flex flex-row justify-center items-center rounded-[25px] border-[1px] border-solid border-[#00B0F2] gap-[15px] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)]">
                        <p className="text-[24px] font-normal text-[#00B3F4] sf-pro">Login</p>
                    </div>
                    <div className='w-[50px] h-[50px] flex flex-col items-center justify-between rounded-[10px] px-[20px] py-[12px]  border-[1px] border-solid border-[#00B0F2] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] relative'>
                        <div className='w-[30px] border-solid border-[1.5px] border-[#00B3F4] [0px_4px_10px_rgba(0,_0,_0,_0.50)]'/>
                        <div className='w-[30px] border-solid border-[1.5px] border-[#00B3F4] [0px_4px_10px_rgba(0,_0,_0,_0.50)]'/>
                        <div className='w-[30px] border-solid border-[1.5px] border-[#00B3F4] [0px_4px_10px_rgba(0,_0,_0,_0.50)]'/>
                    </div>
                </div>
            </div>
        </header> 
    );
}
