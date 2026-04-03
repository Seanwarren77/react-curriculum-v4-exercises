//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  // variables
  const name = 'Sean';
  const age = 30;

  const hobbies = [
    'Coding',
    'Exercise',
    'Learning new technology',
    'Reading',
    'Hiking',
  ];

  return (
    <div>
      <h2>About Me</h2>
      {/* add JSX here */}
      <p>
        {' '}
        Hi, my name is {name}. I am {age} years old and I enjoy learning new
        technology and building software applications.{' '}
      </p>

      <h3>My Hobbies</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
