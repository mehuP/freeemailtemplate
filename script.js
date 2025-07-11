// Auction data from the screenshot
const auctionData = [
    {
        srNo: 1,
        auctionId: "124545",
        auctionInfo: "Commercial Vehicle Auction...",
        auctionStart: "23/06/2025 12:41:00",
        auctionEnd: "25/06/2025 12:41:00",
        type: "English Auction",
        biddingMode: "Open / Forward",
        domain: "drtauction.gov.in",
        status: "live"
    },
    {
        srNo: 2,
        auctionId: "124545",
        auctionInfo: "Passenger Car Auction...",
        auctionStart: "23/06/2025 12:41:00",
        auctionEnd: "25/06/2025 12:41:00",
        type: "English Auction",
        biddingMode: "Open / Forward",
        domain: "bankeauction.in",
        status: "live"
    },
    {
        srNo: 3,
        auctionId: "124545",
        auctionInfo: "Two-Wheeler Auction...",
        auctionStart: "23/06/2025 12:41:00",
        auctionEnd: "25/06/2025 12:41:00",
        type: "English Auction",
        biddingMode: "Open / Forward",
        domain: "govehicleauction.nic.in",
        status: "live"
    },
    {
        srNo: 4,
        auctionId: "124545",
        auctionInfo: "Luxury Vehicle Auction...",
        auctionStart: "23/06/2025 12:41:00",
        auctionEnd: "25/06/2025 12:41:00",
        type: "English Auction",
        biddingMode: "Open / Forward",
        domain: "propertyauction.org",
        status: "live"
    },
    {
        srNo: 5,
        auctionId: "124545",
        auctionInfo: "Scrap Vehicle Disposal Auction...",
        auctionStart: "23/06/2025 12:41:00",
        auctionEnd: "25/06/2025 12:41:00",
        type: "English Auction",
        biddingMode: "Open / Forward",
        domain: "industrialauction.in",
        status: "live"
    },
    {
        srNo: 6,
        auctionId: "124545",
        auctionInfo: "Government Vehicle Auction...",
        auctionStart: "23/06/2025 12:41:00",
        auctionEnd: "25/06/2025 12:41:00",
        type: "English Auction",
        biddingMode: "Open / Forward",
        domain: "scrapgovauction.nic.in",
        status: "future"
    },
    {
        srNo: 7,
        auctionId: "124545",
        auctionInfo: "Bank Repossessed Vehicle Auction...",
        auctionStart: "23/06/2025 12:41:00",
        auctionEnd: "25/06/2025 12:41:00",
        type: "English Auction",
        biddingMode: "Open / Forward",
        domain: "transportauction.gov.in",
        status: "future"
    },
    {
        srNo: 8,
        auctionId: "124545",
        auctionInfo: "Used Machinery Auction...",
        auctionStart: "23/06/2025 12:41:00",
        auctionEnd: "25/06/2025 12:41:00",
        type: "English Auction",
        biddingMode: "Open / Forward",
        domain: "municipalassetsale.in",
        status: "future"
    },
    {
        srNo: 9,
        auctionId: "124545",
        auctionInfo: "Construction Equipment Auction...",
        auctionStart: "23/06/2025 12:41:00",
        auctionEnd: "25/06/2025 12:41:00",
        type: "English Auction",
        biddingMode: "Open / Forward",
        domain: "railwayauction.gov.in",
        status: "future"
    },
    {
        srNo: 10,
        auctionId: "124545",
        auctionInfo: "Electronic Scrap Auction...",
        auctionStart: "23/06/2025 12:41:00",
        auctionEnd: "25/06/2025 12:41:00",
        type: "English Auction",
        biddingMode: "Open / Forward",
        domain: "statepropertybid.in",
        status: "archive"
    },
    {
        srNo: 11,
        auctionId: "124545",
        auctionInfo: "Industrial Asset Auction...",
        auctionStart: "23/06/2025 12:41:00",
        auctionEnd: "25/06/2025 12:41:00",
        type: "English Auction",
        biddingMode: "Open / Forward",
        domain: "psuauction.gov.in",
        status: "archive"
    },
    {
        srNo: 12,
        auctionId: "124545",
        auctionInfo: "Government Vehicle Auction...",
        auctionStart: "23/06/2025 12:41:00",
        auctionEnd: "25/06/2025 12:41:00",
        type: "English Auction",
        biddingMode: "Open / Forward",
        domain: "transportauction.gov.in",
        status: "archive"
    },
    {
        srNo: 13,
        auctionId: "124545",
        auctionInfo: "Bank Repossessed Vehicle Auction...",
        auctionStart: "23/06/2025 12:41:00",
        auctionEnd: "25/06/2025 12:41:00",
        type: "English Auction",
        biddingMode: "Open / Forward",
        domain: "municipalassetsale.in",
        status: "archive"
    },
    {
        srNo: 14,
        auctionId: "124545",
        auctionInfo: "Used Machinery Auction...",
        auctionStart: "23/06/2025 12:41:00",
        auctionEnd: "25/06/2025 12:41:00",
        type: "English Auction",
        biddingMode: "Open / Forward",
        domain: "railwayauction.gov.in",
        status: "cancelled"
    },
    {
        srNo: 15,
        auctionId: "124545",
        auctionInfo: "Construction Equipment Auction...",
        auctionStart: "23/06/2025 12:41:00",
        auctionEnd: "25/06/2025 12:41:00",
        type: "English Auction",
        biddingMode: "Open / Forward",
        domain: "statepropertybid.in",
        status: "cancelled"
    },
    {
        srNo: 16,
        auctionId: "454555",
        auctionInfo: "Electronic Scrap Auction...",
        auctionStart: "23/06/2025 12:41:00",
        auctionEnd: "25/06/2025 12:41:00",
        type: "English Auction",
        biddingMode: "Open / Forward",
        domain: "psuauction.gov.in",
        status: "cancelled"
    }
];

// Function to populate the table
function populateTable(data = auctionData) {
    const tbody = document.getElementById('auction-tbody');
    tbody.innerHTML = '';

    data.forEach(auction => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${auction.srNo}</td>
            <td>${auction.auctionId}</td>
            <td>${auction.auctionInfo}</td>
            <td>${auction.auctionStart}</td>
            <td>${auction.auctionEnd}</td>
            <td>${auction.type}</td>
            <td>${auction.biddingMode}</td>
            <td>${auction.domain}</td>
            <td class="status-cell">
                <span class="status-dot ${auction.status}"></span>
            </td>
            <td class="document-cell">
                <i class="fas fa-file-alt"></i>
            </td>
            <td class="view-cell">
                <i class="fas fa-eye"></i>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

// Search functionality
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (!searchTerm) {
            populateTable(auctionData);
            return;
        }
        
        const filteredData = auctionData.filter(auction => {
            return auction.auctionId.toLowerCase().includes(searchTerm) ||
                   auction.auctionInfo.toLowerCase().includes(searchTerm) ||
                   auction.type.toLowerCase().includes(searchTerm) ||
                   auction.biddingMode.toLowerCase().includes(searchTerm) ||
                   auction.domain.toLowerCase().includes(searchTerm);
        });
        
        populateTable(filteredData);
    }
    
    searchInput.addEventListener('input', performSearch);
    searchIcon.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Status filter functionality
function setupStatusFilter() {
    const statusItems = document.querySelectorAll('.status-item');
    
    statusItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            statusItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Get the status type
            const statusType = this.querySelector('.status-indicator').classList[1];
            
            // Filter data based on status
            let filteredData;
            if (statusType === 'live') {
                filteredData = auctionData.filter(auction => auction.status === 'live');
            } else if (statusType === 'future') {
                filteredData = auctionData.filter(auction => auction.status === 'future');
            } else if (statusType === 'archive') {
                filteredData = auctionData.filter(auction => auction.status === 'archive');
            } else if (statusType === 'cancelled') {
                filteredData = auctionData.filter(auction => auction.status === 'cancelled');
            } else {
                filteredData = auctionData; // Show all if no specific filter
            }
            
            populateTable(filteredData);
        });
    });
}

// Navigation functionality
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all nav items
            navItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
        });
    });
}

// Table sorting functionality
function setupTableSorting() {
    const headers = document.querySelectorAll('.auction-table th');
    
    headers.forEach((header, index) => {
        const sortIcon = header.querySelector('i');
        if (sortIcon) {
            header.style.cursor = 'pointer';
            header.addEventListener('click', function() {
                // Simple toggle between ascending and descending
                const isAscending = sortIcon.classList.contains('fa-sort-up');
                
                // Reset all sort icons
                headers.forEach(h => {
                    const icon = h.querySelector('i');
                    if (icon) {
                        icon.className = 'fas fa-sort';
                    }
                });
                
                // Set current sort icon
                if (isAscending) {
                    sortIcon.className = 'fas fa-sort-down';
                } else {
                    sortIcon.className = 'fas fa-sort-up';
                }
                
                // Sort data (basic implementation)
                // In a real application, this would sort based on the column
                console.log(`Sorting by column ${index}, ascending: ${!isAscending}`);
            });
        }
    });
}

// Notification panel functionality
function setupNotificationPanel() {
    const closeBtn = document.querySelector('.close-notification');
    const viewAllBtn = document.querySelector('.view-all');
    const notificationPanel = document.querySelector('.notification-panel');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            notificationPanel.style.display = 'none';
        });
    }
    
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function() {
            alert('View All Notifications clicked');
        });
    }
}

// Table row click functionality
function setupTableRowClicks() {
    const table = document.querySelector('.auction-table tbody');
    
    table.addEventListener('click', function(e) {
        const target = e.target;
        
        if (target.classList.contains('fa-file-alt')) {
            alert('Document icon clicked');
        } else if (target.classList.contains('fa-eye')) {
            alert('View icon clicked');
        }
    });
}

// Update time display
function updateTime() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-GB', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
    });
    const dateStr = now.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    
    const footerInfo = document.querySelector('.footer-info');
    if (footerInfo) {
        footerInfo.innerHTML = `
            <span>${timeStr}</span>
            <span>${dateStr}</span>
            <span class="language">ENG</span>
        `;
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    populateTable();
    setupSearch();
    setupStatusFilter();
    setupNavigation();
    setupTableSorting();
    setupNotificationPanel();
    setupTableRowClicks();
    updateTime();
    
    // Update time every minute
    setInterval(updateTime, 60000);
});

// Advance Filter button functionality
document.addEventListener('DOMContentLoaded', function() {
    const advanceFilterBtn = document.querySelector('.advance-filter-btn');
    
    if (advanceFilterBtn) {
        advanceFilterBtn.addEventListener('click', function() {
            alert('Advance Filter functionality would open here');
        });
    }
});

// Profile section click functionality
document.addEventListener('DOMContentLoaded', function() {
    const profileSection = document.querySelector('.profile-section');
    
    if (profileSection) {
        profileSection.addEventListener('click', function() {
            alert('Profile section clicked - would navigate to profile page');
        });
    }
});