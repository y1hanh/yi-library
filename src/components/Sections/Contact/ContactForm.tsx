import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const [showModal, setShowModal] = useState(false);
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = () => {
    setShowModal(true);
  }

  const inputClasses =
    'bg-[#30347a] border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-pink-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  if (showModal) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#a8a3c2] bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Feature not available yet</h2>
            <p className="text-gray-700">I am still working on this feature. Please contact me via email  
              <a href="mailto:huangehan@gmail.com" className="text-blue-500" target="_blank"> huangehan@gmail.com</a> instead.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 bg-[#a8a3c2] text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
    );
  } else {
    return (
      <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        // required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        // required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-pink-200 bg-[#30347a] px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-[#676599] focus:ring-2 focus:ring-pink-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  )};
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
