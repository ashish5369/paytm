import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";


export const Signup = () => {
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max ">
                <Heading label={"Sign Up"} />
                <SubHeading label={"Enter the info to create the account"} />
                <InputBox placeholder="John" label={"FirstName"} />
                <InputBox placeholder="Doe" label={"LastName"} />
                <InputBox placeholder="ashish@gmail.com" label={"Email"} />
                <InputBox placeholder="123456" label={"Password"} />

                <div>
                    <Button label={"SignUp"} />
                </div>
                <BottomWarning label={"Already have an account"} buttonText={"SignIn"} />
            </div>
        </div>
    </div>
}