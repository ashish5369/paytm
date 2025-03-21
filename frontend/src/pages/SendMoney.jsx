export const SendMoney = () => {
    return <div>
        <div>
            <div>
                <div>
                    <h2>
                        Send Money
                    </h2>
                </div>
                <div>
                    <div>
                        <div>
                        </div>
                        <h3></h3>
                    </div>
                    <div>
                        <div>
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disables:opacity-70" for="amount">
                                Amount (in Rs)

                            </label>
                            <input type="number" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" id="amount" placeholder="Enter Amount" />
                        </div>
                        <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colours h-10 px-4 py--2 w-full bg-green-500 text-white">Initiate Transfer

                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
}