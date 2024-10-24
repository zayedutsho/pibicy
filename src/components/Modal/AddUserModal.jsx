

const AddUserModal = ({toggleModal}) => {

    return (
        <div className="bg-white rounded-lg shadow-lg p-8 w-4/5 md:w-2/5 relative">
            <button
                className="absolute top-3 right-3 text-red-500 border border-red-500 rounded-full px-1.5 font-bold"
                onClick={toggleModal}  
            >
                &#x2715;
            </button>
            <h3 className="text-[#05A6E6] font-[700] text-[24px] mb-3">Here's a reminder:</h3>
            <p className=" text-xs md:text-[16px] "><span className="font-[600]">Admin Access</span> gives full control over user management, billing and settings.</p>
            <p className="my-2 text-xs md:text-[16px]"><span className="font-[600]">Primary Access</span> allows audit team members to create, send document requests, and make in-app document markings.</p>
            <p className=" text-xs md:text-[16px]"><span className="font-[600]">Secondary Access</span> grants audit clients the ability to receive and upload documents with view-only permissions, but no editing or request creation capabilities.</p>
                        
                        {/* Form inside the modal */}
                        <form className="my-4">
                            <div className="mb-4">
                                <label className="block text-xs md:text-sm font-medium mb-2">User's Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter user's name"
                                    className="w-full px-4 py-2 border rounded-lg text-xs md:text-sm"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-xs md:text-sm font-medium mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter user's email"
                                    className="w-full px-4 py-2 border rounded-lg text-xs md:text-sm"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Access Type</label>
                                <div className="flex gap-4 text-xs md:text-sm">
                                    <label className="flex items-center">
                                        <input type="radio" name="access" value="Admin" className="mr-2" />
                                        Admin
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="access" value="Primary" className="mr-2 " />
                                        Primary
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="access" value="Secondary" className="mr-2" />
                                        Secondary
                                    </label>
                                </div>
                            </div>
                            <div className="text-center mt-8">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#F47108] text-white rounded-lg w-3/5"
                                >
                                    Grant Access
                                </button>
                            </div>
                        </form>
                    </div>
    )
}

export default AddUserModal;