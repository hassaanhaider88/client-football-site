export default function Loading() {
  // You can add any UI inside, including a skeleton, spinner, etc.
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Loading...</h1>
      {/* You could add a custom spinner component here */}
    </div>
  );
}
