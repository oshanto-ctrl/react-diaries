/* Import any practices from src/practices here */ 

/* Module 1 */

// Map Iterating Practice
import MapPractice from "./practices/module-one/MapPractice";
// Conditional Rendering Practice
import ConditionalRendering from "./practices/module-one/ConditionalRendering";
// Functional Component Practice
import FunctionalComponent from "./practices/module-one/FunctionalComponent";
// Comonent Props Practice
import ComponentProps from "./practices/module-one/ComponentProps";

/* Module 2 */

// Handle Change Events Practice
import HandlingChangeEvents from "./practices/module-two/HandlingChangeEvents"; 
// State Practice: Guards and Navigation
import StatePractice from "./practices/module-two/StatePractice";
// State Practice: Onboarding Process with Derived UI Conditional Rendering
import StatePracticeDerivedUI from "./practices/module-two/StatePracticeDerivedUI";  
// Form handle practice
import HandleFormSubmission from "./practices/module-two/HandleFormSubmission";

/* Module 3 */
// useEffect basic practice from module 3
import UseEffectBasics from "./practices/module-three/useEffectBasics";
// useEffect with 3 stepsp (data, loading, error)
import UseEffectProdPractice from "./practices/module-three/useEffectProdPractice";
/*
Current Component (Practice File), 
Change it when needed.
*/
const CURRENT_COMPONENT = UseEffectProdPractice;

// export the App component that render each practices
export default function App() {
  /*Return CURRENT_COMPONENT  */
  return <CURRENT_COMPONENT />;
}