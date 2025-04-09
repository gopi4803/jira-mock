import  { useState } from "react";
import "../../index.css";
import { InputField, ButtonField } from "../../Common";
import { Menu, Search } from "lucide-react";
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [selectedMode, setSelectedMode] = useState('Learning');
    const navigate = useNavigate();

    const handleClick = () => setIsSidebarOpen(!isSidebarOpen);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

    // Update the handleCreate function
    const handleCreate = () => {
        if (selectedMode === 'Learning') {
            navigate('/ai');
        } else if (selectedMode === 'ToDo') {
            navigate('/manual');
        }
    };

    return (
        <div className="flex">

            {/* Left Sidebar for Large Screens */}
            <div className="bg-black w-1/5 h-screen justify-center items-center relative hidden md:block">
                <div className="absolute text-center inset-0 flex flex-col justify-center items-center w-full">
                    <label className="lbl">Learning path</label>
                    <label className="lbl !mt-4">Task</label>
                </div>
            </div>

            {/* Sidebar for Mobile */}
            <div className={`fixed inset-0 bg-black w-3/5 h-full z-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-4 text-white text-xl" onClick={handleClick}>
                </button>
                <label className="lbl text-white !w-[50%] !text-center">Learning path</label>
                <label className="lbl text-white mt-4 !w-[50%] !text-center">Task</label>
            </div>

            {/* Main Content */}
            <div className="w-full md:w-4/5 flex flex-col items-center text-center">
                {/* Search Bar & Dropdown */}
                <div className="h-1/6 w-full mt-0 border-b-2 border-black flex flex-col px-4 gap-2">
                    {/* Menu Icon (Above Search & Dropdown) */}
                    <button
                        className="self-start z-50 block md:hidden p-2 bg-gray-200 rounded"
                        onClick={handleClick}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    {/* Search & Dropdown Container */}
                    <div className="flex justify-between items-center mb-2 mt-3 w-full">
                        {/* Small & Medium Screens: Toggle Search Field */}
                        <div className="block lg:hidden">
                            {!isSearchOpen ? (
                                <button onClick={toggleSearch} className="p-2">
                                    <Search className="w-6 h-6 text-gray-500" />
                                </button>
                            ) : (
                                <div className="relative w-full sm:w-80 max-w-xs sm:max-w-sm md:max-w-md min-w-48">
                                    <InputField
                                        type="text"
                                        placeholder="Search"
                                        className="!w-full pl-4 pr-12 py-2 border !text-start"
                                    />
                                    <button
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                        onClick={toggleSearch} // Hide search when clicking ✖
                                    >
                                        ✖
                                    </button>
                                </div>
                            )}
                        </div>
                        {/* Large Screens: Always Show Search Field */}
                        <div className="hidden lg:block w-full sm:w-80 max-w-xs sm:max-w-sm md:max-w-md min-w-48 mt-5 relative">
                            <InputField
                                type="text"
                                placeholder="Search"
                                className="!w-full pl-4 pr-12 py-2 border !text-start"
                            />
                            {/* Search Icon inside Input Field */}
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                <Search className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Dropdown (Hidden on Small & Medium Screens when Search is Open) */}
                        <div className={isSearchOpen ? "hidden" : "block"}>
                            {/* Update the dropdown options */}
                            <select 
                                className="p-2 bg-black text-white font-bold"
                                value={selectedMode}
                                onChange={(e) => setSelectedMode(e.target.value)}
                            >
                                <option className="text-white">Learning</option>
                                <option className="text-white">ToDo</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Header Section */}
                <div className="w-full flex justify-between items-center px-4 mt-6">
                    <h1 className="text-4xl font-bold text-left">Today&apos;s Learning Plan</h1>
                    <ButtonField 
                        label="Create" 
                        className="!w-auto" 
                        onClick={handleCreate}
                    />
                </div>

                {/* Content Section */}
                <div className="mt-6 flex flex-wrap justify-evenly items-start gap-6 mb-20">
                    <div className="border-black border-2 self-start p-4">
                        <h2 className="p-2 text-center px-4 font-bold border-b-2">TODO</h2>
                        <div className="border-black border-1 m-4">
                            <div className="bg-black text-white">
                                <h2 className="font-bold">Task Name</h2>
                            </div>
                            <ButtonField label="Extend Deadline" className="block m-2 !w-auto" />
                            <ButtonField label="Re-priotrize" className="block m-2 !w-auto" />
                            <ButtonField label="Notify" className="block m-2 !w-auto" />
                        </div>
                    </div>
                    <div className="border-black border-2 self-start p-2">
                        <h2 className="p-2 mt-2 mx-auto border-b-2 font-bold">In Progress</h2>
                        <div className="border-black border-1 m-4">
                            <div className="bg-black text-white">
                                <h2 className="font-bold">Task Name</h2>
                            </div>
                            <ButtonField label="View Details" className="block m-2 !w-auto" />
                            <ButtonField label="Change Category" className="block m-2 !w-auto" />
                            <ButtonField label="Priority" className="block m-2 !w-auto" />
                        </div>
                    </div>
                    <div className="border-black border-2 self-start p-2">
                        <h2 className="p-2 mt-2 mx-auto border-b-2 font-bold">Completed</h2>
                        <div className="border-black border-1 m-4">
                            <div className="bg-black text-white">
                                <h2 className="font-bold">Task Name</h2>
                            </div>
                            <ButtonField label="Archieve" className="block m-2 !w-auto" />
                            <ButtonField label="Review" className="block m-2 !w-auto" />
                            <ButtonField label="Feedback" className="block m-2 !w-auto" />
                        </div>
                    </div>
                    <div className="border-black border-2 self-start p-2">
                        <h2 className="p-2 mt-2 mx-auto border-b-2 font-bold">Blockers</h2>
                        <div className="border-black border-1 m-4">
                            <div className="bg-black text-white">
                                <h2 className="font-bold">Task Name</h2>
                            </div>
                            <ButtonField label="Re-Schedule" className="block m-2 !w-auto" />
                            <ButtonField label="Change Category" className="block m-2 !w-auto" />
                            <ButtonField label="Notify Team" className="block m-2 !w-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage