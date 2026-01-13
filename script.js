   <script>
        // Optional: Add simple analytics or interaction logging here
        document.querySelectorAll('.sector').forEach(item => {
            item.addEventListener('click', event => {
                console.log('Navigating to sector: ' + event.target.parentNode.getAttribute('href'));
            })
        });
    </script>
