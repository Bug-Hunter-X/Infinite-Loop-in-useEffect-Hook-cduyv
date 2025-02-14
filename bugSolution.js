```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The effect will run only once after the component mounts.
    console.log('Mounted!');
    // Or perform a side effect with no dependency on count
  }, []);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
```