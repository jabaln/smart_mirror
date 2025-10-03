function showView(viewId) {
                // Hide all views
                const views = document.querySelectorAll('.view-container');
                views.forEach(view => view.classList.remove('active'));

                // Remove active from all buttons
                const buttons = document.querySelectorAll('.view-btn');
                buttons.forEach(btn => btn.classList.remove('active'));

                // Show selected view
                document.getElementById(viewId).classList.add('active');

                // Activate clicked button
                event.target.classList.add('active');

                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }