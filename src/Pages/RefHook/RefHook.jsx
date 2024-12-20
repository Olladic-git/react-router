export default function RefHook() {
    return (
        <div className="Main">
            <h2>useRef</h2>
            <p>useRef is a React Hook that lets you reference a value that’s not needed for rendering.</p>
            <h2>useRef(initialValue)</h2>
            <p>Call useRef at the top level of your component to declare a ref.</p>
            <p>By using a ref, you ensure that: 
                You can store information between re-renders (unlike regular variables, which reset on every render).
                Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).
                The information is local to each copy of your component (unlike the variables outside, which are shared).
            </p>
        </div>
    )
} 