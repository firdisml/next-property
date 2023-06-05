import { NextPage } from 'next';

const Buy: NextPage = () => {
    return (
        <div className="px-4 py-4 sm:px-0">
            <div className='flex'>
            <h1 className='text-4xl mb-5 mr-5 font-bold'>HProperty</h1>
            <h1 className='text-3xl mb-5 mt-1 font-thin'>Find New Property in Malaysia</h1>
            </div>
            
            <div className="relative rounded-md bg-black px-5 pt-5 pb-5 opacity-70">
                <div className='relative flex w-full'>
                    <select id="category" name="category" className="block text-black w-40 pr- mr-5 rounded-sm border border-gray-300 bg-white py-2.5 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                        <option value="">
                            State
                        </option>

                    </select>

                    <input
                        type="text"
                        name="search"
                        id="search"
                        className="h-12 block mr-5 w-full bg-white text-black  rounded-sm border placeholder-black  border-gray-300 dark:border-gray-700 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Search"
                    />

                    <button className="text-white w-56 bg-indigo-500 hover:bg-opacity-75 px-3 py-3 rounded-sm text-sm font-semibold">
                        Search
                    </button>
                </div>
                <div className='mt-5'>

                    <select className="appearance-none text-white border-none bg-transparent pl-3 pr-8 py-2 rounded-sm">
                        <option className='text-black' value="option1">Option 1</option>
                        <option className='text-black' value="option2">Option 2</option>
                        <option className='text-black' value="option3">Option 3</option>
                    </select>

                    <select className="appearance-none text-white border-none bg-transparent pl-3 pr-8 py-2 rounded-sm">
                        <option className='text-black' value="option1">Option 1</option>
                        <option className='text-black' value="option2">Option 2</option>
                        <option className='text-black' value="option3">Option 3</option>
                    </select>

                    <select className="appearance-none text-white border-none bg-transparent pl-3 pr-8 py-2 rounded-sm">
                        <option className='text-black' value="option1">Option 1</option>
                        <option className='text-black' value="option2">Option 2</option>
                        <option className='text-black' value="option3">Option 3</option>
                    </select>

                    <select className="appearance-none text-white border-none bg-transparent pl-3 pr-8 py-2 rounded-sm">
                        <option className='text-black' value="option1">Option 1</option>
                        <option className='text-black' value="option2">Option 2</option>
                        <option className='text-black' value="option3">Option 3</option>
                    </select>



                </div>
            </div>

        </div>
    );
}

export default Buy