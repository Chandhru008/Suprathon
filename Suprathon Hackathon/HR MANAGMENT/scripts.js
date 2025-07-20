// Menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
});

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const addEmployeeBtn = document.getElementById('addEmployeeBtn');
    const addEmployeeModal = document.getElementById('addEmployeeModal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    
    if(addEmployeeBtn) {
        addEmployeeBtn.addEventListener('click', function() {
            addEmployeeModal.style.display = 'flex';
        });
    }
    
    if(closeModalBtns) {
        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                if(addEmployeeModal) addEmployeeModal.style.display = 'none';
            });
        });
    }
    
    if(addEmployeeModal) {
        window.addEventListener('click', function(e) {
            if(e.target === addEmployeeModal) {
                addEmployeeModal.style.display = 'none';
            }
        });
    }
    
    // Employee form submission
    const employeeForm = document.getElementById('employeeForm');
    if(employeeForm) {
        employeeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Employee added successfully!');
            if(addEmployeeModal) addEmployeeModal.style.display = 'none';
            employeeForm.reset();
        });
    }
    
    // Tab functionality
    const tabs = document.querySelectorAll('.tab');
    
    if(tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const targetTab = this.getAttribute('data-tab');
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.style.display = 'none';
                });
                document.getElementById(`${targetTab}Tab`).style.display = 'block';
            });
        });
    }
    
    // Initialize date picker
    const leaveDates = document.getElementById('leaveDates');
    if(leaveDates) {
        flatpickr(leaveDates, {
            mode: "range",
            dateFormat: "Y-m-d",
            minDate: "today",
        });
    }
    
    // Initialize charts
    if(typeof Chart !== 'undefined') {
        initCharts();
    }
    
    // Generate calendar days
    generateCalendar();
});

function initCharts() {
    // Department chart
    const deptCtx = document.getElementById('departmentChart');
    if(deptCtx) {
        new Chart(deptCtx, {
            type: 'doughnut',
            data: {
                labels: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'],
                datasets: [{
                    data: [35, 20, 25, 10, 10],
                    backgroundColor: [
                        '#4361ee',
                        '#f72585',
                        '#06d6a0',
                        '#ff9e00',
                        '#7209b7'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    }
                }
            }
        });
    }
    
    // Leave trends chart
    const leaveTrendsCtx = document.getElementById('leaveTrendsChart');
    if(leaveTrendsCtx) {
        new Chart(leaveTrendsCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Leave Requests',
                    data: [12, 19, 15, 8, 17, 14],
                    borderColor: '#4361ee',
                    backgroundColor: 'rgba(67, 97, 238, 0.1)',
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    // Hiring chart
    const hiringCtx = document.getElementById('hiringChart');
    if(hiringCtx) {
        new Chart(hiringCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Hires',
                        data: [8, 12, 7, 10, 6, 9],
                        backgroundColor: '#06d6a0'
                    },
                    {
                        label: 'Turnover',
                        data: [3, 5, 4, 6, 2, 4],
                        backgroundColor: '#ef476f'
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    // Gender diversity chart
    const genderCtx = document.getElementById('genderChart');
    if(genderCtx) {
        new Chart(genderCtx, {
            type: 'pie',
            data: {
                labels: ['Male', 'Female', 'Other'],
                datasets: [{
                    data: [55, 42, 3],
                    backgroundColor: [
                        '#4361ee',
                        '#f72585',
                        '#ff9e00'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    }
                }
            }
        });
    }
}

function generateCalendar() {
    const calendarDays = document.querySelector('.calendar-days');
    if(calendarDays) {
        // Clear existing days
        calendarDays.innerHTML = '';
        
        // Create empty days for the start of the month
        for(let i = 0; i < 5; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.classList.add('calendar-day');
            calendarDays.appendChild(emptyDay);
        }
        
        // Create days 1-30
        for(let i = 1; i <= 30; i++) {
            const day = document.createElement('div');
            day.classList.add('calendar-day');
            day.textContent = i;
            
            // Mark today
            if(i === 20) {
                day.classList.add('today');
            }
            
            // Add events on certain days
            if([5, 10, 15, 22, 27].includes(i)) {
                day.classList.add('event');
            }
            
            calendarDays.appendChild(day);
        }
    }
}