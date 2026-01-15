import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';  // submit button

function App() {
  return (
    <div> 
      
      <PipelineToolbar />
      {/* all nodes input here */}

      <PipelineUI />
       {/*   +  -  locks    and side map */}

      <SubmitButton />
      {/*   submit button here */}

    </div>
  );
}

export default App;
