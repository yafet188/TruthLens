import React from 'react';

interface FeedbackFormProps {
  onSubmit: (formData: FormData) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-white mb-2">Name</label>
        <input type="text" id="name" name="name" className="w-full p-2 rounded bg-[#000F14] border border-gray-700 text-white" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white mb-2">Email</label>
        <input type="email" id="email" name="email" className="w-full p-2 rounded bg-[#000F14] border border-gray-700 text-white" />
      </div>
      <div className="mb-4">
        <label htmlFor="feedback" className="block text-white mb-2">Feedback</label>
        <textarea id="feedback" name="feedback" rows={5} className="w-full p-2 rounded bg-[#000F14] border border-gray-700 text-white"></textarea>
      </div>
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;