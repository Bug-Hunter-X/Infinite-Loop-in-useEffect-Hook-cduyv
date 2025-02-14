```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the effect depends on count,
    // and setting count triggers the effect again.
    setCount(count + 1);
  }, [count]);

  return <div>Count: {count}</div>;
}
```