//1. import area

//2. defination area
function Home() {
  // we can use sever action inside server component define function
  async function gulab(formData: FormData) { //old style for function define
    "use server"
    console.log("hell Hello Hello", formData);

    const fn = formData.get('firstname');

    console.log('first name is -->', fn);  
  }
  let suresh = async ()=>{ //new style function define
 
  }
  // retuning something area
  return (
    <>
      <form method="" action={gulab}>
        <h1>Student Admission Form</h1>
        <input type="text" name="firstname" placeholder=" Your Firs tName" /> <br/><br/>
        <button type="submit">submit</button>
      </form>
    </>
  )
}

//3. export area
export default Home;