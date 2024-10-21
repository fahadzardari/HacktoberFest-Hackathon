function AddIncome() {
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const source = e.target.source.value;
        const amount = e.target.amount.value;
        const income = {
            source,
            amount
        }
        console.log(source, amount);
        e.target.reset();
    }
    return (
        <>
            <div className="py-16">
                <h2 className="text-2xl text-center py-4">Add Income</h2>
                <form className="max-w-sm mx-auto" onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-5">
                        <label
                            for="source"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Source
                        </label>
                        <input
                            type="text"
                            id="source"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Salary"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            for="amount"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Amount
                        </label>
                        <input
                            type="number"
                            id="amount"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="50000"
                            required
                        />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add Income
                    </button>
                </form>
            </div>
        </>
    );
}

export default AddIncome;