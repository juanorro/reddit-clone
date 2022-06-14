import React from 'react';

const UtilsPage = () => {

  const tasks = [
    { task: 'generate_users', descritption: 'Generate random users'},
    { task: 'generate_subreddits', descritption: 'Generate random subreddits'},
    { task: 'add_fake_content', descritption: 'Add fake content'},
    { task: 'clean_database', descritption: 'Clean the database'},
  ];

  console.log(tasks);

  const Button = ({ task }) => (

    <div className='flex-1 mb-5'>
      <button
        className='border px-8 py-2 mt-5 mr-8 font-bold rounded-full color-accent-contrast bg-color-accent hover:bg-color-accent-hover-darker'
        onClick={ async() => {
          await fetch('/api/utils', {
            body: JSON.stringify({
              task: task.task
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          })
        }}
      >
        { task.descritption }
      </button>
    </div>
  );
  
  return (
    <div className='mt-10 ml-20'>
      <h2 className='mb-10 text-xl'>Utils</h2>
      { tasks.map((task, i) => (
        <Button key={ i } task={ task } />
      ))}
    </div>
  )
};

export default UtilsPage;