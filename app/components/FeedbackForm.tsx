import React from 'react';

interface FeedbackFormProps {
  onSubmit: (formData: FormData) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-[750px] pb-50 mt-10">
      <div>
        <label htmlFor="firstname" className="sf-pro block text-[25px] font-medium text-white">
          First Name (optional):
        </label>
        <input
          type="name"
          id="firstname"
          name="firstname"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-[15px] shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="lastname" className="sf-pro block text-[25px] font-medium text-white">
          Last Name (optional):
        </label>
        <input
          type="name"
          id="lastname"
          name="lastname"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-[15px] shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="email" className="sf-pro block text-[25px] font-medium text-white">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-[15px] shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="feedback" className="sf-pro block text-[25px] font-medium text-white">
          Feedback:
        </label>
        <textarea
          id="feedback"
          name="feedback"
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-[7.5px] shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          rows={4}
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Feedback
        </button>
      </div>
    </form>
  );
}

export default FeedbackForm;