document.addEventListener('DOMContentLoaded', () => {
    const customers = [
        { name: 'Jane Cooper', email: 'jane@microsoft.com', phone: '(225) 555-0118', company: 'Microsoft', country: 'United States', status: 'Active' },
        { name: 'John Doe', email: 'john@google.com', phone: '(225) 555-0123', company: 'Google', country: 'United States', status: 'Inactive' }, { name: 'Jane Coopeffer', email: 'jane@microsoft.com', phone: '(225) 555-0118', company: 'Microsoft', country: 'United States', status: 'Active' },
        { name: 'John Doe', email: 'john@google.com', phone: '(225) 555-0123', company: 'Google', country: 'United States', status: 'Inactive' }, { name: 'Jane Cooper', email: 'jane@microsoft.com', phone: '(225) 555-0118', company: 'Microsoft', country: 'United States', status: 'Active' },
        { name: 'Johdvdvn Doe', email: 'john@google.com', phone: '(225) 555-0123', company: 'Google', country: 'United States', status: 'Inactive' }, { name: 'Jane Cooper', email: 'jane@microsoft.com', phone: '(225) 555-0118', company: 'Microsoft', country: 'United States', status: 'Active' },
        { name: 'Jojujuhn Doe', email: 'john@google.com', phone: '(225) 555-0123', company: 'Google', country: 'United States', status: 'Inactive' }, { name: 'Jane Coojk.per', email: 'jane@microsoft.com', phone: '(225) 555-0118', company: 'Microsoft', country: 'United States', status: 'Active' },
        { name: 'Jo.l.ohn Doe', email: 'john@google.com', phone: '(225) 555-0123', company: 'Google', country: 'United States', status: 'Inactive' }, { name: 'Jane Cooper', email: 'jane@microsoft.com', phone: '(225) 555-0118', company: 'Microsoft', country: 'United States', status: 'Active' },
        { name: 'Johtitiin Doe', email: 'john@google.com', phone: '(225) 555-0123', company: 'Google', country: 'United States', status: 'Inactive' }, { name: 'Jane Coo;i;ier', email: 'jane@microsoft.com', phone: '(225) 555-0118', company: 'Microsoft', country: 'United States', status: 'Active' },
        { name: 'John Doe', email: 'john@google.com', phone: '(225) 555-0123', company: 'Google', country: 'United States', status: 'Inactive' }, { name: 'Jane Cooper', email: 'jane@microsoft.com', phone: '(225) 555-0118', company: 'Microsoft', country: 'United States', status: 'Active' },
        { name: 'Johi./pn Doe', email: 'john@google.com', phone: '(225) 555-0123', company: 'Google', country: 'United States', status: 'Inactive' }, { name: 'Jane Coofjytper', email: 'jane@microsoft.com', phone: '(225) 555-0118', company: 'Microsoft', country: 'United States', status: 'Active' },
        { name: 'Jo.,ip/pihn Doe', email: 'john@google.com', phone: '(225) 555-0123', company: 'Google', country: 'United States', status: 'Inactive' }, { name: 'Jane Cooper', email: 'jane@microsoft.com', phone: '(225) 555-0118', company: 'Microsoft', country: 'United States', status: 'Active' },
        { name: 'John Doe', email: 'john@google.com', phone: '(225) 555-0123', company: 'Google', country: 'United States', status: 'Inactive' }, { name: 'Jane Cooper', email: 'jane@microsoft.com', phone: '(225) 555-0118', company: 'Microsoft', country: 'United States', status: 'Active' },
        { name: 'John Doe', email: 'john@google.com', phone: '(225) 555-0123', company: 'Google', country: 'United States', status: 'Inactive' }, { name: 'Jane Cooper', email: 'jane@microsoft.com', phone: '(225) 555-0118', company: 'Microsoft', country: 'United States', status: 'Active' },
        { name: 'John Doe', email: 'john@google.com', phone: '(225) 555-0123', company: 'Google', country: 'United States', status: 'Inactive' }, { name: 'Jane Cooper', email: 'jane@microsoft.com', phone: '(225) 555-0118', company: 'Microsoft', country: 'United States', status: 'Active' },
        { name: 'John Doe', email: 'john@google.com', phone: '(225) 555-0123', company: 'Google', country: 'United States', status: 'Inactive' },

    ];

    const tableBody = document.querySelector('.customers-table__body');
    const paginationContainer = document.querySelector('.pagination');

    const rowsPerPage = 8;
    let currentPage = 1;

    function renderTable(data, page) {
        tableBody.innerHTML = '';
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const paginatedData = data.slice(start, end);

        paginatedData.forEach(customer => {
            const row = document.createElement('tr');
            row.classList.add('customers-table__row');
            row.innerHTML = `
                <td class="customers-table__cell">${customer.name}</td>
                <td class="customers-table__cell">${customer.company}</td>
                <td class="customers-table__cell">${customer.phone}</td>
                <td class="customers-table__cell">${customer.email}</td>
                <td class="customers-table__cell">${customer.country}</td>
                <td class="customers-table__cell status">${customer.status}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    function renderPagination(data) {
        paginationContainer.innerHTML = '';
        const pageCount = Math.ceil(data.length / rowsPerPage);

        // Previous button
        const prevButton = document.createElement('button');
        prevButton.innerHTML = '<img src="images/l.png"/>';
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderTable(customers, currentPage);
                updatePagination();
            }
        });
        paginationContainer.appendChild(prevButton);

        // Page buttons
        for (let i = 1; i <= pageCount; i++) {
            const button = document.createElement('button');
            button.innerText = i;
            button.addEventListener('click', () => {
                currentPage = i;
                renderTable(customers, currentPage);
                updatePagination();
            });
            paginationContainer.appendChild(button);
        }

        // Next button
        const nextButton = document.createElement('button');
        nextButton.innerHTML = '<img src="images/r.png"/>';
        nextButton.addEventListener('click', () => {
            if (currentPage < pageCount) {
                currentPage++;
                renderTable(customers, currentPage);
                updatePagination();
            }
        });
        paginationContainer.appendChild(nextButton);
    }

    function updatePagination() {
        const buttons = paginationContainer.querySelectorAll('button');
        buttons.forEach(button => {
            button.classList.remove('active');
            if (parseInt(button.innerText) === currentPage) {
                button.classList.add('active');
            }
        });
    }

    renderTable(customers, currentPage);
    renderPagination(customers);
    updatePagination();
});
