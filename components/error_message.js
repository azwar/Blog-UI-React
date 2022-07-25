const ErrorMessage = ({ error }) => (
  <div
    className="bg-purple-100 rounded-lg py-5 px-6 mb-3 text-base text-purple-700 inline-flex items-center w-full"
    role="alert"
  >
    <ol>
      <li className="font-bold">Error</li>
      {error?.map((item, index) => (
        <li key={index}>
          {index + 1}) {item}
        </li>
      ))}
    </ol>
  </div>
);

module.exports = {
  ErrorMessage,
};
