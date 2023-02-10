import{useState} from 'react';
const SignUp = () => {

    const [signUpForm, setSignUpState] = useState({});

const setFormState = (e) => {
    setSignUpForm({
        ...signUpState,
        [e.target.name]: e.target.value
    })
}

const sendForm = async () => {
    const sendFormData = await fetch("", {
        method: 'POST',
        body: signUpForm,
})
}

const authenicateForm = async () => {
if(signUpForm.username.length <= 6 && signUpForm.username.length >= 14){
    window.alert("needs to be at least 6 characters and no more than 14 characters")
}
if(!signUpForm.Email.includes('@')){
    window.alert("Email must include @")
}
if(signUpForm.password.length <= 8 && signUpForm.password.length >= 16){
    window.alert("Password must be at least 6 characters and no more than 16 characters")
}
    return (
      <div>
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                name="username"
                onChange={(e) => setFormState(e)}
                value={signUpForm.username}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="Email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="Email"
                type="Email"
                placeholder="Fool@fool.com"
                name="Email"
                onChange={(e) => setFormState(e)}
                value={signUpForm.Email}
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                name='password'
                onChange={(e) => setFormState(e)}
                value={signUpForm.password}
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => authenicateForm()}
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>
      </div>
    );
  };
  
  export default SignUp;