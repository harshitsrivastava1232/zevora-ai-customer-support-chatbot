function Button({ children }) {
  return (
    <button className="rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600">
      {children}
    </button>
  );
}

export default Button;
