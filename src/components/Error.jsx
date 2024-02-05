export default function Error({ title, message }) {
  return (
    <div className="error">
      <h2>{title}</h2>
      <div>{message}</div>
    </div>
  );
}
