// Initialize AOS
AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 700, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

document.addEventListener('DOMContentLoaded', function () {
    // Read More functionality
    const readMoreButtons = document.querySelectorAll('.readMoreBtn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const cardContent = this.closest('.card-custom-content');
            const moreText = cardContent.querySelector('.moreText');
            const dots = cardContent.querySelector('.dots');

            if (moreText.classList.contains('show')) {
                moreText.classList.remove('show');
                dots.style.display = 'inline';
                this.textContent = 'Read More';
            } else {
                moreText.classList.add('show');
                dots.style.display = 'none';
                this.textContent = 'Read Less';
            }
        });
    });


});

// Google Charts functionality
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(loadChartData);

function loadChartData() {
    $.getJSON('data.json', function (data) {
        drawChart2(data.chart2);
        drawChart3(data.chart3);
    });
}

function drawChart2(chartData) {
    var data = google.visualization.arrayToDataTable(chartData);
    var options = {
        title: 'Average Difficulty of Computer Engineering Courses',
        bar: { groupWidth: '95%' },
        legend: { position: 'none' },
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
}


function drawChart3(chartData) {
    var data = google.visualization.arrayToDataTable(chartData);
    var options = {
        title: 'Effort Distribution in a Computer Engineering Project'
    };
    var chart = new google.visualization.PieChart(document.getElementById('chart_div3'));
    chart.draw(data, options);
}




    document.getElementById('readMeLink').addEventListener('click', function (event) {
        event.preventDefault();

        fetch('http://localhost:3500/content')
            .then(response => response.text())
            .then(data => {
                document.getElementById('contentContainer').innerHTML = data;
                document.getElementById('contentContainer').style.display = 'block';
                document.getElementById('readMeLink').style.display = 'none';
                document.getElementById('closeMeLink').style.display = 'inline';
            })
            .catch(error => console.error('Error fetching content:', error));
    });

    document.getElementById('closeMeLink').addEventListener('click', function (event) {
        event.preventDefault();

        document.getElementById('contentContainer').style.display = 'none';
        document.getElementById('readMeLink').style.display = 'inline';
        document.getElementById('closeMeLink').style.display = 'none';
    });









