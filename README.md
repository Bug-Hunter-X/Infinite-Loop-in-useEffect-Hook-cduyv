# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications where an infinite loop occurs within a `useEffect` hook. The bug arises from an incorrect dependency array, causing the effect to run repeatedly and never settle. 

## Bug Description

The `MyComponent` function utilizes the `useEffect` hook to increment a state variable (`count`) continuously. The dependency array `[count]` is incorrectly specified; it leads to an infinite loop because every change in `count` re-triggers the effect, leading to further updates of `count`. This creates a cycle that never terminates, causing the application to freeze or crash.

## Solution

The solution involves removing the `count` dependency from the effect. If the intent is to perform a side effect only once after the component mounts,  an empty dependency array `[]` can be used. In other scenarios where updates are necessary, optimize dependencies to trigger the effect only when relevant changes occur.