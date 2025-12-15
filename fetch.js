fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
        console.error('Fetch failed:', error.message); //Logging only error message
        console.log(error); //Logging entire error object.
    });

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    };

    fetchData();

//Study differences between .then and async/await.