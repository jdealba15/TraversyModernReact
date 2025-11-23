const formatDate = () => {

   const d = new Date();
   const date = d.toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});;
   const time = d.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
   });

   return `The current date and time is ${date}, ${time}.`;
};

console.log(formatDate());


