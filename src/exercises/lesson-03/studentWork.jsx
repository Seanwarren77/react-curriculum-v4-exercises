//Lesson-03 Component Lifecycle, Hooks, State, and Props
//Exercise: React Bug Hunt – Fix the broken components in this folder
//Impport components here

// Importing the three bug components we will debug and display
import BugEffectLoop from './BugEffectLoop.jsx';
import BugMutatedState from './BugMutatedState.jsx';
import BugProps from './BugProps.jsx';

// Main component that renders all bug-fix exercises
export default function StudentWork() {
  return (
    <div>
      {/* add components here */}
      {/* BUG #1: useEffect lifecycle issue
      This component should update once when mounted */}
      <BugEffectLoop />

      {/* BUG #2: state mutation issue 
          This component should correctly update state using setState */}
      <BugMutatedState />

      {/* BUG #3: props vs state issue
          This component demonstrates how props are passed and updatedusing state */}
      <BugProps message="Hello!" />
      {/* Placeholder text to confirm component rendering */}
      <p>Student output will go here</p>
    </div>
  );
}
