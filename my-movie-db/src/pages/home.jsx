import Movies from "../components/Movies";
import FormicForm from "../components/FormicForm"

export default function Home() {
    return ( 
      <>
      <div className='d-flex form'>
      <h1>Movies App</h1>
        <p style={{textAlign:"center"}} >Hello Friend! <br/> Here you can find all your favorite movies. <br/> So, go ahead and choose what you want to watch now!</p>
      <FormicForm/>
    </div>
    <Movies />
    </>
    );
  } 
